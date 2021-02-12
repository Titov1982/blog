// Файл конфигурации


// Подключаем библиотеки
const config = require('./config')
const mongoose = require('mongoose')

// Определяем объект подключения к БД
function Connect(){
    // Включаем режим отладки
    mongoose.set('debug', true)

    // Настраеваем события
    mongoose.connection
        .on('error', console.error.bind(console, 'Connection error:'))
        .on('close', () => console.log('Database connection closed.'))
        .once('open', () => console.log('Database connection opened.'))

    // Коннектимся
    return mongoose.connect(config.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true})
}

// Создаем объект БД
const connect = new Connect()

// Экспортируем объект БД
module.exports = connect
