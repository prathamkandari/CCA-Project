const express =require('express');
const path=require("path");


const app=express();

app.use(express.json());

//app.use("/api/user",userRoutes);


app.listen(5001,console.log("server started!!"));

const _dirname = path.dirname("");
console.log(_dirname);
const buildpath = path.join(_dirname , "../build");
console.log(buildpath)
app.use(express.static(buildpath)) 
app.get("/*", function(req, res){
    res.sendFile(
        path.join(__dirname,"../build/index.html"),
        
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
});//