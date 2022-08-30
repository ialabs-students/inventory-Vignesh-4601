// const express = require("express");

// console.log("hello , i'm  vicky");

// const server = express();  // convert body to json(express.json) and keep it in a  body key in request  

// server.use(express.json())    // midllevar method

// var users = [];

// var emailValidator = (req, res, next) =>  {
//      var userdata = req.body;
//      if(userdata.email == undefined){
//         res.status(400);
//         res.send("Invalid request body , Email is mandatory");
//      }
//      next();
// };



// server.get("/hello",(req,res)=> {
//     res.send("Hello welcomee!!");
// });

// //PATH PARAM 
// server.get("/hello/:name", (req, res) => {
//     res.send("Hi there, glad to meet you " + req.params.name);
// });

// //QUERY PARAM
// server.get("/hi", (req, res) => {
//     res.send("Hello there, glad to meet you " + req.query.name);
// });
// server.post("/register/users", (req, res) => {
//     // console.log(req.body);
//     users.push(req.body);
//     res.send("user register succesfully")
// });
// server.put("/update/user", (req, res) => {
//     // console.log(req.body);
//     users.push(req.body);
//     res.send("user register succesfully")
// });
// server.get("/fetch/user", (req, res) => {

//     res.send(users)
// });
// server.get("/fetch/user/:id", (req, res) => {
//     var id = req.params.id;
//     users.forEach(u => {
//         if (u.id == id) {
//             res.send(u);
//         }
// })
// res.send({});
// });

// server.listen(4000, () => {
//     console.log("server running on port :4000");
// });

// //REQUEST/QUERY PARAM -- <URL?key=value&key1=value1&key2=value2>
// //   http://localhost:4000/hello?key=value&key1=value1&key2=value2
// //   http://localhost:4000/hello?name=JN
// b
// //PATH PARAM -- <URL/extra/path>
// //   http://localhost:4000/hello/JN









// const ex1=require("express"); 
// //require is like an import
// //require(express), it will see any library that exporting express in the nodule modules..

// const server=ex1();
// //it is application or server object
// //it will initialize the back end server when u call it

// server.listen(8000,()=>{
//     console.log("The server is running on the port number => 8000");
// });

// server.get("/hello",(request,response)=>{
//     response.send("Hello is running....");
//     console.log("hello is called ");
// });
// //http://localhost:8000/hello/
// //returns the response in  webpage..

// //PATH PARAM
// server.get("/hello/:name",(request,response)=>{
//     response.send("Path Param is running...."+ request.params.name);
//     console.log("Path param is called ");
// });

// //QUERY PARAM
// server.get("/hi",(request,response)=>{
//     response.send("Query param is running...."+ request.query.name);
//     console.log("Query param is called ");
// });

//CHUMMMAAAAA>>>>>>
// app.get("/http2",(request,response)=>{
//     const Employee=[{"name":"Selva","Age":18,"Email_id":"rselav216@gmail.com"},
//     {"name":"Raj","Age":20,"Email_id":"raj@gmail.com"},
//     {"name":"Msdhoni","Age":25,"Email_id":"Msdhoni2019@gmail.com"}
// ];
//     response.send(Employee);
//     console.log("https is called ");
// });
//CHUMMMAAAAA>>>>>>

const http = require('http');
const https = require('https');

const express = require('express');
const { response } = require('express');
const app = express();
app.use(express.json());

//Function for next parameter
var name_validate=(request,response, next)=>{
    var data=request.body;
    if(data.Name==undefined){
        response.status(400);
        response.send("No name is provided");
    }
    next();
};

http.createServer(app).listen(8000,()=>{
    console.log("HTTP SERVER IS RUNNING");
});
https.createServer(app).listen(8080,()=>{
    console.log("HTTPS SERVER IS RUNNING");
});

const Employee=[{"Name":"Harish","Age":25,"Email_id":"harish007@gmail.com"},
{"Name":"Madanagopal","Age":50,"Email_id":"madanrollsroyz@gmail.com"},
{"Name":"sundarampillai","Age":30,"Email_id":"pillaipakkam@gmail.com"}
];

//GET CALL
app.get("/employee",(request,response)=>{
    response.send(Employee);
    });

app.get("/fetch/obj/",(request,response)=>{
    response.send(Employee);
    });

//POST CALL
app.post("/add/obj",name_validate,(request,response)=>{
    const new_employee={
        "Name":request.body.Name,
        "Age":request.body.Age,
        "Email_id":request.body.Email_id
    }
    console.log(request.body);
    Employee.push(new_employee);
    response.send("Employee created");
    });

app.put("/put/obj",(request,response)=>{
    for(let emp of Employee){
        if(emp.Name==request.body.Name){
            emp.Name="Tharun"
        }
    }
    response.send(Employee);
})

app.delete("/delete/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="harish"){
            delete Employee[emp];
        }
    }
    response.send(Employee);
})

app.get("/find/obj/",(request,response)=>{
    for(let emp in Employee){
        if(Employee[emp].Name=="Madanagopal"){
            response.send(Employee[emp]);
        }
    }
})




