
const app = require('./app')
const database = require('./database')
const config = require('./config')

// database().then(info => {
//     console.log(`Connected to ${info.host}:${info.port}/${info.name}`)
//     // Слушаем порт
//     app.listen(config.PORT, () => {
//         console.log(`Server started on port ${config.PORT}...`)
//     })
// }).catch(() => {
//     console.error('Unable to connect to database')
//     process.exit(1)
// })

// const mongoose = require('mongoose')
//
// mongoose.connect(config.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true})
//     .then(() => {
//         console.log('MongoDB Connected...')
// }).catch(err => console.log(err))

// Если объект БД вернул промис, то начинаем слушать HTTP порт
database.then(()=> {
    // Слушаем порт
    app.listen(config.PORT, () => {
        console.log(`Server started on port ${config.PORT}...`)
    })
}).catch(() => {
    console.error('Unable to connect to database')
    process.exit(1)
})