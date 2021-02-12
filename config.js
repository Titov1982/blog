// Файл конфигурации

const usernameDb = 'titov'
const passwordDb = '17021982a'
// const nameDb = 'admin'
const nameDb = 'body'

// Конфигурация HTTP порта
module.exports = {
    PORT: process.env.PORT || 3000,
    MONGO_URL: `mongodb+srv://${usernameDb}:${passwordDb}@cluster0.cdyuk.mongodb.net/${nameDb}?retryWrites=true&w=majority`
}