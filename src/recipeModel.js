var app = window.app || {};

app.Models = app.Models || {};

app.Models.Movie = Backbone.Model.extend({


    names:function(){
        return this.get('name')
    },

    ishorrormovie:function(){
        if(this.get('genres')=='horror'){
            return true
        }
        else{
            return false
        }
    },
    iscomedymovie:function(){
        if(this.get('genres')=='comedy'){
            return true
        }
        else{
            return false
        }
    },
    isactionmovie:function(){
        if(this.get('genres')=='action'){
            return true
        }
        else{
            return false
        }
    },
    isadventuremovie:function(){
        if(this.get('genres')=='adventure'){
            return true
        }
        else{
            return false
        }
    }

});
