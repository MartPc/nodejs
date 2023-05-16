const express = require('express')

const app = express()
const path = require('path')
const hbs = require('hbs')

const puerto = 8081

//Servidor del directorio estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuración del directorio que guardará los archivos partials hbs.
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/',(req, res) => {
    res.render('home',
    {
        titulo: 'OurPage',
        nombre: 'María Jóse',
        mensaje: '¡Te amo mucho!'
        
    })
})

//app.get('/productos',(req, res) => {
//        res.render('productos',
//        {
//            titulo: 'Listado productos',
//            nombre: 'Mattin',
//            rol: 'usuario'
//        })
//    }
//)



//app.get('*',(req, res) => {
    //res.write('Error')
    //res.end()
    //res.sendFile(__dirname+'/public/404.html')
//})

app.listen(puerto, () =>
console.log(`Escuchando por el puerto ${puerto}`)
)