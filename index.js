// express
const express = require('express')
const app = express()
// express.static
app.use(express.static('public'))
// express-session
const expressSession = require('express-session')
app.use(
    expressSession({
        secret: "mega boutique",
        resave: true,
        saveUninitialized: true
    })
)

// ejs
const ejs = require('ejs')
app.set('view engine', 'ejs')

// mongoose
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://127.0.0.1/Inventaire', {
    useNewUrlParser: true
})

// bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


// fileUpload
const fileUpload = require('express-fileupload')
app.use(fileUpload())


// connect-flash
const connectflash = require('connect-flash')
app.use(connectflash())

// serveur écoute les requetes 
app.listen(4000, () => {
    console.log("Application écoute sur le port 4000")
})

// Controlleurs
const homeController = require('./controllers/homeController')
const createController = require('./controllers/createController')
const storeController = require('./controllers/storeController')
const stockController = require('./controllers/stockController')
const addStockController = require('./controllers/addStockController')
const removeStockController = require('./controllers/removeStockController')
const getAllController = require('./controllers/getAllController')
const getController = require('./controllers/getController')
const deleteController = require('./controllers/deleteController')
const cancelController = require('./controllers/cancelController')


// Middlewares custom
const stockMiddleware = require('./middlewares/stockMiddleware')
const fileMiddleware = require('./middlewares/fileMiddleware')


// Gestionnaire de requetes
app.get('/', homeController)

app.get('/new', createController)

app.post('/new/store', fileMiddleware, storeController)

app.get('/stock', stockController)

app.post('/stock/add', stockMiddleware, addStockController)

app.post('/stock/remove', stockMiddleware, removeStockController)

app.get('/products', getAllController)

app.post('/products/search', getController)

app.get('/products/delete/:id', deleteController)

app.get('/products/cancel/:id', cancelController)


// Si aucun des gestionnaires n'a pris en charge la requête
app.use((req, res) => {
    res.render('error404')
})