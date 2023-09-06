const mysql = require('mysql');
const dbConfig = require("../config/db.config");

//Create a connection to the database server
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
});

//open MYSQL Connected
connection.connect(
    (error)=>{
        if(error) throw error;
        console.log("Succesfilly connected to the database.....");
    }
);

module.exports = connection;