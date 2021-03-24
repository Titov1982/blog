// Подключаем библиотеки
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const staticAsset = require('static-asset')     // Библиотека для создания хэшей

//------------------------------------------------------------------------------------------------
// database
// Подключяемся к БД
// Подключаем библиотеки
const config = require('./config')
const mongoose = require('mongoose')

// Включаем режим отладки
mongoose.set('debug', config.IS_PRODUCTION)

// Настраеваем события
mongoose.connection
    .on('error', console.error.bind(console, 'Connection error:'))
    .on('close', () => console.log('Database connection closed.'))
    .once('open', () => {
            const info = mongoose.connection
            console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
            // console.log('Database connection opened.')
    })

// Коннектимся
mongoose.connect(config.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true})
    .then()
//------------------------------------------------------------------------------------------------

// Подключаем объекты модели


// express
// Создаем приложение express
const app = express()

//sets and uses
// Активируем движок шаблонизатора EJS
app.set('view engine', 'ejs')
// Подключаем bodyParser для распарсивания тела запроса
app.use(bodyParser.urlencoded({extended: true}))
// Подключаем staticAsset к папке public для добавления хэшей
app.use(staticAsset(path.join(__dirname, 'public')))
// Устанавливаем путь к статическим файлам
app.use(express.static(path.join((__dirname, 'public'))))
// Устанавливаем путь к установленному jquery
app.use('/js', express.static(path.join((__dirname, 'node_modules', 'jquery', 'dist'))))

// routers
app.get('/', (req, res) => {
        res.render('index')
})

// Слушаем порт
app.listen(config.PORT, () => {
        console.log(`Server started on port ${config.PORT}...`)})