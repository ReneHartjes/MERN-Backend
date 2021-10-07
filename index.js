const express = require("express")
const app= express()
const mongoose = require("mongoose")
const Data = require('./models/Data')
const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://rene2:huhu123@cluster0.wpl6f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {

    useNewUrlParser:true,



});


app.post('/api', async (req,res) =>{
    const username = req.body.username;
    const usertext = req.body.usertext;

    const Dataer = new Data({username: username, usertext: usertext})

    try{
        await Dataer.save();


    }catch (err){

        console.log(err)
    }


})


app.get("/read", async (req, res) => {
    await Data.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
        console.log(result)
      }
    });
  });






  app.delete("/delete/:id", async (req, res) => {

    const id = req.params.id
    await Data.findByIdAndRemove(id).exec()
  });


app.listen(2999, ()=>{

    console.log("server running on Port 2999...")


})