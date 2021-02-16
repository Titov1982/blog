// Подключаем библиотеки
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const staticAsset = require('static-asset')     // Библиотека для создания хэшей


// Подключаем объекты модели



// Сощдаес приложение express
const app = express()

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


app.get('/', (req, res) => {
        res.render('index')
})



module.exports = app