// Подключаем библиотеки
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


// Подключаем объекты модели
const Post = require('./models/post')


// Сощдаес приложение express
const app = express()

// Активируем движок шаблонизатора EJS
app.set('view engine', 'ejs')
// Подключаем bodyParser для распарсивания тела запроса
app.use(bodyParser.urlencoded({extended: true}))
// Устанавливаем путь к статическим файлам
app.use(express.static(path.join((__dirname, 'public'))))

app.get('/', (req, res) => {
    Post.find({}).then(posts => {
        res.render('index', {posts: posts})
    })
})

app.get('/create', (req, res) => {
    res.render('create')
})

app.post('/create', (req, res) => {
    // Получаем данные из тела запроса и деструктурируем его
    const {title, body} = req.body

    // Создаем объект модели Post
    Post.create({
        title: title,
        body:body
    }).then(post => console.log(post.id))

    // Переходим на главную страницу
    res.redirect('/')
})

module.exports = app