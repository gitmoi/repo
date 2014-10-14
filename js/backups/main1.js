var Person = Backbone.Model.extend({
    defaults: {
        name: 'John Doe',
        age : 30,
        occupation : 'Worker..'
    },
    work: function () {
        return this.get('name') + ' is working';
    },
    validate: function (attrs) {
        if (attrs.age < 0) {
            console.log('Is is illegal to be less than 0');
            return 'Age must be > 0...';
        }
        if(!attrs.name|| attrs.name.length==0) {
            console.log('It is illegal for name to be empty');
            return 'Person must have a name';
        }

       //console.log(atts);
    }
});

var PView = Backbone.View.extend({
    tagName : 'li',
    template: _.template( $('#personTemplate').html()),

    initialize: function() {
        console.log('init constructor called...');

        this.render(); //automatically render the model.
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()));
       //this.$el.html(this.model.get('name'));
    }
});



var p = new Person({name:"Louis", age:47});
var v = new PView({model:p});

var p2 = new Person({name:"JGood", age:43});
var v2 = new PView({model:p2});

//    var Person = function (config) {
//        this.name = config.name;
//        this.age = config.age;
//        this.occupation = config.occupation;
//    }
//    Person.prototype.work = function() {
//        return this.name + " " + " is working";
//    }
