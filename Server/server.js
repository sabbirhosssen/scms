const express = require('express');
// const bodyParser = require('body-parser');
const db = require('./config/database');
const PORT = 8081;
const cors = require('cors')
//ROUTES
const app = express();
app.use(cors({
     origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', "DELETE"],
    credentials: true
}));
app.use(express.json());
// app.use(bodyParser.json());
// app.use('/api/v1/student',require('./Routes/StudentRoutes'))

app.use('/api/student', require('./Routes/StudentLogin'))


app.use((err, req, res, next) => {
    res.status(err.status||500).send('Showing the APP USE ERROR')
})
app.get("/", (req, res)=>{
    res.status(200).send('Hey There, My Smart Campus Management System Node app');
})

//Database 
db
    .query("SELECT 1")
    .then(() => {
    console.log('Mysql db connected ...');
        app.listen(PORT, () => {
            console.log(`server running at http://localhost:${PORT}`);       
        })
    })
    .catch((error) => {
    console.log(error);
    })
