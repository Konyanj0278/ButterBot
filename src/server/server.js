const express = require('express');
const app = express();
const mysql = (require('mysql'));

const bcrypt = require("bcrypt");
const saltRounds = 10;

const bodyParser = require('body-parser')
const cors = require('cors')

const { spawn } = require('child_process')

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

const db2 = mysql.createPool({
    host: 'sql3.freemysqlhosting.net',
    user: 'sql3445783',
    password: '1ZPLzAdjxn',
    database: 'sql3445783',
});

app.get('/api/Home/Run', (req, res) => {
    const childPython = spawn('python', ['ButterBot.py']);
 
    childPython.stdout.on('data', (data) => {
       console.log(`stdout: ${data}`)
    });
 
    childPython.stderr.on('data', (data) => {
       console.error(`stderr: ${data}`);
    });
 
    childPython.on('close', (code) => {
       console.log(`child process exited with code ${code}`);
    });
 });

app.get('/api/Home', (req, res)=>{
    const sqlLatest = "SELECT * FROM Runs ORDER BY Date_ran DESC LIMIT 3";
    db2.query(sqlLatest, (err, result)=>{
        if (err) throw err;
        res.send(result)
    })
});

app.post('/api/insert', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const passwordConfirm = req.body.passwordConfirm

    const dupUserErr = "for key 'user.PRIMARY'"

        if (password != passwordConfirm) {
            res.send({fail:{passFail:"Passwords do not match"}})
        }
  
        else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
            const sqlInsert = "INSERT INTO user (username, password) VALUES (?, ?)";
            db.query(sqlInsert, [username, hash], (err, result)=>{
            
            if(err){
                console.log(err)
                if (err.sqlMessage.includes(dupUserErr)) {
                    res.send({fail:{userFail:"Username already in use."}})
                }
            }

            else {
                res.send({pass:"Registered!"})
            }

        })
    })
        }
            
    })


app.post('/api/login', (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    const sqlLogin = "SELECT * FROM user WHERE username=?";
    db.query(sqlLogin,[username], (err, result)=>{
        if(err){
            res.send({err: err})
        }

        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    res.send({pass:"Success!"});
                }
                else
                  res.send({fail: "Wrong username/password combination"})
              })
        }

        else {
            res.send({fail: "User doesn't exist"})
        }
    })
});


app.listen(3001, ()=>{
    console.log('running on port 3001')
});

//for nodemon: npm run devStart
