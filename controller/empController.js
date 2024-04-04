const emp= require("../model/empModel")

const insertEmployee= async(req, res)=>{
    try{
        const employee= new emp({
            name:req.body.name,
            email:req.boyd.email,
            mobile:req.body.mobile,
            password: req.body.password
        })
        const ressult= await employee.save()
        res.send("Register Successfully"+result)
    }
    catch(error){
        res.send(error+message)
    }

}
module.exports={insertEmployee}