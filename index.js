const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});


connect.then((db)=>{

    console.log('Connected correctly to server');
    var newDish = new Dishes({
      name: 'Uthappizza',
       description: 'test'
    });
    newDish.save()
    .then((Dish)=>{
      console.log(Dish);
      return Dishes.find({});
    })
    .then((dishes)=>{
      console.log(dishes);
      return Dishes.deleteOne({});
    })
    .then(()=>{
      return mongoose.connection.close();
    })
    .catch((err)=>{
      console.log(err);
    });
});
