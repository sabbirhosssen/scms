const { jwt }   = require("jsonwebtoken");
const db = require("../config/database");

const studentLogin = async (req, res) => {
   try {
        const email = req.body.email;
        const password = req.body.password;

        if (!email||!password) {
            return res.status(503).send({
                success: false,
                messsage:'Please Provide ALL FIELDS'
            })
       }
       
       const data = await db.query(`select * from register WHERE email=? AND password=?`, [email, password]);
    //    const adata =data[0]
    //    console.log(adata[0]?.email);
       
    //    if (data.length > 0) {
    //        const adata = data[0];
    //        const email = adata[0].email;
    //        console.log(email, "hi");
    //        const token = jwt.sign(
    //            { role: "admin", email: email},
    //            "jwt_secret_key",
    //            { expiresIn: "1d" }
    //        );
    //        res.cookie('token', token);
    //    }
        if (!data) {
             res.status(404).send({
                   success: false,
                   message: 'login failed'
               })
        }
        res.status(200).send({
               success: true,
               message: 'success login',  
               alldata: data[0]
           })
        
    } catch (error) {
        console.log(error);
         res.status(500).send({
            success: false,
            messsage: 'false in feiled login',
            error
        })
        
    }
    
    
    
}
const studentRegister = async (req, res) => {
    try {
         const user_id = req.body.user_id;
        const first_name = req.body.first_name;
        const second_name = req.body.last_name;
        const email = req.body.email;
        const password = req.body.password;
        
        

        if (!user_id || !first_name || !email || !password) {
            return res.status(503).send({
                success: false,
                messsage:'Please Provide ALL FIELDS'
            })
        }
         const data = await db.query(`insert into register values(?,?,?,?,?,?,?,?,?,?,?,?,?)`,[user_id, first_name,second_name, email, password," "," "," "," "," "," "," "," "]);
        if (!data) {
             res.status(406).send({
                   success: false,
                   message: 'Error Insert query'
               })
        }
        res.status(202).send({
               success: true,
               message: 'New Student Register Record Created',            
           })
        
    } catch (error) {
         console.log(error);
        res.status(500).send({
            success: false,
            messsage: 'Faild in the Register',
            error
        })
        
    }
    
}
module.exports = { studentLogin,studentRegister };



