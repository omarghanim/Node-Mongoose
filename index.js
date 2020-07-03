const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true});

connect.then((db)=>{

    console.log('Connected correctly to server');
    Dishes.create({
      name: 'Uthappizza',
       description: 'test'
    })
    .then((Dish)=>{
      console.log(Dish);
      return Dishes.find({}).exec();
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
