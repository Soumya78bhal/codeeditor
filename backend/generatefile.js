const fs=require('fs');
const {v4:uuid}=require('uuid');
const path=require('path');
const dirname=path.join(__dirname,"codes");

if(!fs.existsSync(dirname)){
    fs.mkdirSync(dirname,{recursive:true});
}
const generatefile=async(format,code)=>{
    const id=uuid();
    const filename=  `${id}.${format}`;
    const filepath= path.join(dirname,filename);
    await fs.writeFileSync(filepath,code);
    return filepath;
    
}

module.exports={generatefile};