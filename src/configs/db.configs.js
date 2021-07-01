module.exports = {
    DATABASE_URL: `mongodb+srv://${process.env.SERVER_DB_USER}:${process.env.SERVER_DB_PW}@cluster0.x7pkp.mongodb.net/${process.env.SERVER_DB_NAME}?retryWrites=true&w=majority`
}