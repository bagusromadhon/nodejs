module.exports = (app) => {
    const controller = require('./controller');
    app.get('/',(req,res) => {
        res.sendFile(__dirname+'/index.html')
    })
    
    app.get('/test/:nama',(req,res) => {
        res.send(req.params.nama)
    })

    app.get('/pa',(req,res) => {
        res.send('TESt')
    })
    app.post('/apipost',(req,res) =>{
        const {id,nama} = req.body
        res.send(id)
    })
    
// mencoba buat api
    app.get('/data/siswa',(req,res)=> {
        controller.getSiswa(req,res)
    })

    app.post('/data/siswa',(req,res) => {
        controller.addSiswa(req,res)
    })
    app.put('/data/siswa',(req,res)=>{
        controller.updateSiswa(req,res)
    })
    app.delete('/data/siswa',(req,res)=>{
        controller.deletSiswa(req,res)
    })



    app.get('/data/product',(req,res)=>{
        controller.getProduct(req,res)
    })
    app.post('/data/product',(req,res)=>{
        controller.addProduct(req,res)
    })
    app.put('/data/product',(req,res)=>{
        controller.editProduct(req,res)
    })
    app.delete('/data/product',(req,res)=>{
        controller.deletSiswa(req,res)
    })
}
