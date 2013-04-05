b.db = {
	"key" : "db",
	"_data" : {
		"params" : {
			"theme" : "light"
		}
	},
	"storage" : window.localStorage,
	"init" : function(){
		b.db.load();
	},
	"load" : function(){
		if(b.db.storage==window.localStorage){
			if(b.db.storage.getItem(b.db.key))
				b.db.data = JSON.parse(b.db.storage.getItem(b.db.key));
			else{
				b.db.data = b.db._data;
				b.db.save();
			}
		}
	},
	"save" : function(){
		if(b.db.storage==window.localStorage)
			 b.db.storage.setItem(b.db.key, JSON.stringify(b.db.data));
	},
	"set" : function(id,data){
		b.db.data[id]=data;
		b.db.save();
	},
	"clean" : function(){
		b.db.data = b.db._data;
		b.db.save();
	}
};
