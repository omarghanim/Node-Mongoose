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
      return Dishes.findByIdAndUpdate(Dish._id ,{$set:{description:"Updated Test"}
    },{new:true

    })
      .exec()
    })
    .then((Dish)=>{
      console.log(Dish)
      Dish.comments.push({
        rating:5,
        comment:"I'm getting sinking feeling",
        author:"Omar Ghanim"
      });
      return Dish.save();
      })
      .then((Dish)=>{
        console.log(Dish);
        return Dishes.deleteOne({});

      })

    .then(()=>{
      return mongoose.connection.close();
    })
    .catch((err)=>{
      console.log(err);
    });
});
