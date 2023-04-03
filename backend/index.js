const express=require('express');
const {generatefile}= require('./generatefile');
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello");
    console.log("recieved");
});
app.post('/post',async (req,res)=>{
    
    
    const{lang='cpp',code}=req.body;
    if(code==undefined) res.send(res.status(400).json({success:'false',error:'empty code body'}));
    else{
        
       
        console.log(lang,code);   
        const path=await generatefile(lang,code);
       res.send(path.toString());
    }
    
});

app.listen(5000,()=> {
    console.log("listening");
}); 