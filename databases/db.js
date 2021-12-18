const mongoose=require('mongoose')

const ConnectDB=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }).then(()=>{
        console.log("connected To the Database")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=ConnectDB