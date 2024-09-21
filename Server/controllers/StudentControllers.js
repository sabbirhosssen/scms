const db = require("../config/database");



//Get all student
const getstudents = async (req, res) => {
    try {
        const data = await db.query('select *from register');
        
        if (!data) {
            return res.status(404).send({
                success: false,
                messsage:'No Records Found'
            })
        }
        res.status(200).send({
            success: true,
            messsage: 'All Students Records',
            alldata:data[0]
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
             
        })
    }
    
}

//get student by id 
const getstudentsid = async (req, res) => {
    try {
        const studnetid = req.params.id;
        if (!studnetid) {
            return res.status(404).send({
                success: false,
                messsage:'invalid or Provide Student id'
            })
        }
        const data =await db.query(`SELECT * FROM register WHERE user_id=?`,[studnetid]);
        if (!data) {
            return res.status(405).send({
                success: false,
                messsage:'No Records Found'
            })
        }
        res.status(201).send({
            success: true,
            messsage: 'Studnet by id',
            studnetdetails:data[0]
            
        })
    } catch (error) {
        console.log(error);
        res.status(501).send({
            success:false,
            messsage: 'Error in Get studetn by ID',
            error
        })
    }
    
}
//post student create

const createStudent =async (req, res) => {
    try {
        console.log('create');
        const id = req.body.id;
        const first_name = req.body.first_name;
        const email = req.body.email;
        const age = req.body.age;
        if (!id || !first_name || !email || !age) {
            return res.status(503).send({
                success: false,
                messsage:'Please Provide ALL FIELDS'
            })
        }
         const data = await db.query(`insert into personal Values(?,?,?,?)`,[id, first_name, email, age]);
        if (!data) {
             res.status(406).send({
                   success: false,
                   message: 'Error Insert query'
               })
        }
        res.status(202).send({
               success: true,
               message: 'New Student Record Created',            
           })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            messsage: 'ERROR IN CREATE STUDENTS  API',
            error
        })

    }
}



module.exports={getstudents,getstudentsid,createStudent}