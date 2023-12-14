const express=require("express");
const mongoose=require("mongoose");
const {addUser,retrieveUsers,deleteUser,updateUser}=require("./operations-onmongo");

const app=express();
const port= 3000;
app.use(express.json());


mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/FirstDatabase",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(async()=>{
    console.log("Connection Successfull");
        
    let userInput=await addUser("saim","saim123");
    console.log(userInput);
    // let retrieveUser=await retrieveUsers();
    // console.log(retrieveUser);
    // let deleteUsers=await deleteUser("657abfbedd16940cc8708f27");
    // console.log(deleteUsers);
    // let updateUser=await updateUser("","saimsss","imsaim");
    // console.log(updateUser);

}).catch((err)=>{
    console.log("Connection Failed");
    console.log(err.message);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});