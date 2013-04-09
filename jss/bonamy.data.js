b.data = {
	"_data" : {},
	"_key"  : "",
	"files" : ["data/arbres-ligneux.csv","data/herbacees.csv"],
	"init" : function(){},
	"find" : function(text){
	
		if(text.length==3 && b.data._key!=text){
			
			console.log("Recherche : "+text);
			
			b.data._data={};
			
			for (var i = 0; i<b.data.files.length ; i++) { 
				$.get(b.data.files[i],function(dl){
					var lignes = dl.split(/\r\n|\r|\n/);
					console.log("Recherche dans : "+lignes[0]);
					b.data._key=text;
					for (var l = 2; l<lignes.length ; l++) {
						if(lignes[l].search(new RegExp(text,'i'))!=-1){
							//console.log(lignes[l].search(new RegExp(text,'i'))+" : "+l+" : "+lignes[l]); 
							if(!b.data._data[lignes[0]])
								b.data._data[lignes[0]]=[];
							b.data._data[lignes[0]].push(lignes[l]);
						}
					}	
					b.data.gen_list(text,5);
				})
			}
			
		}
		
		if(text.length>=3){
			//Recherche à partir de la base du cache bdd.
			//console.log(b.data._data);
			b.data.gen_list(text,5);
		}
		
		
	},
	"gen_list" : function(text,limit){
		var html="";
		//console.log(b.data._data);
		for (var key in b.data._data){
			
			   html+="<li><h3>"+key+"</h3></li>"	
		   // console.log("_data[" + key + "] = " + b.data._data[key]);
			for (var id in b.data._data[key]){
				if(b.data._data[key][id].search(new RegExp(text,'i'))!=-1)
			   		html+="<li>"+b.data._data[key][id]+"</li>"	
		   }
		}
		$(".search-results").html(html);
	}
};
