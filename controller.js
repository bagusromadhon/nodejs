// import moduls 
const res = require('express/lib/response');
const mysql = require('mysql2');
const response = require('./response');

// create koneksi 
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'api'
});

// function buat mendapatkan data siswa
exports.getSiswa = (req,res) => {
    connection.query('SELECT * FROM test',(err,result,fields)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,result)
    })
}
exports.addSiswa = (req,res)=> {
    connection.query('INSERT INTO test SET ?',[req.body],(err,result,rows)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,result)
    })
}
exports.updateSiswa = (req,res)=> {
    // memecah data dari payload
    const {id,siswa,jurusan}=req.body
    

    connection.query(`UPDATE test SET siswa="${siswa}",jurusan="${jurusan}" WHERE id=${id} `,(err,rows)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,rows)
    })
}
exports.deletSiswa = (req,res)=>{
    const {id}=req.body
    connection.query(`DELETE FROM test WHERE id=${id}`,(err,result)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,result)
    })
}
exports.getProduct = (req,res)=>{
    connection.query('SELECT * FROM product',(err,result,fields)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,result)
    })
}
exports.addProduct = (req,res)=>{
    const {name,price,quantity}=req.body
    const createdat = new Date();
    const updatedat = new Date();
    connection.query('INSERT INTO product SET ?',[{name,price,quantity,createdat,updatedat}],(err,result,rows)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,result)
    })
}
exports.editProduct = (req,res)=>{
    const {id,name,price,quantity}=req.body
    const createdat = new Date();
    const updatedat = new Date();
    connection.query(`UPDATE product SET name="${name}",price="${price}",quantity=${quantity} WHERE id = ${id}}`,(err,rows)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,rows)
    })
}


exports.deleteProduct = (req,res)=>{
    const {id}=req.body
    connection.query(`DELETE FROM product WHERE id=${id}`,(err,result)=>{
        if (err) {
            console.log(err);
        }
        response(res,200,result)
    })
}