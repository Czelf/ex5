module.exports =  {
    aanwezigheden : {},

    saveAanwezigheid : function(aanwezigheid){
        this.aanwezigheden[aanwezigheid.id]= aanwezigheid;
        console.log(this.aanwezigheden);
    },
    listAllAanwezigheden : function(){
        var rtnValue =[];
        for (var item in this.aanwezigheden) {
            rtnValue.push(this.aanwezigheden[item]);
        };
        return rtnValue;
    },
    findAanwezigheid : function(id){
        return this.aanwezigheden[id];
    },

    deleteAanwezigheid : function (id) {
        delete this.aanwezigheden[id];
    }
};