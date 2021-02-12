
const mongoose = require('mongoose')

// Получаем класс схемы
const Schema = mongoose.Schema
// Создаем объект схемы
const schema = new Schema({
    title: {
        type: String,
        required: true, // Обозначаем, что данное поле обязательно для заполнения
    },
    body: {
        type: String
    }
},{
    timestamps: true    // Устанавлеваем временные отметки создания и редактирования каждой записи
    }
)

// Устанавливаем опцию, чтобы обращаться не к "_id", а к "id"
schema.set('toJSON', {
    virtuals: true
})

// Экспортируем модель Post
module.exports = mongoose.model('Post', schema)