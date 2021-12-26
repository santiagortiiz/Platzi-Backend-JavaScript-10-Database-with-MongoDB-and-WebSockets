const config = {
    dbUrl: process.env.DB_URL || "mongodb+srv://root:r00t@clusternodejs.jcrm1.mongodb.net/telegrom?retryWrites=true&w=majority",
    host: process.env.HOST || "http://localhost",
    port: process.env.PORT || 3030,
    publicRoute: process.env.PUBLIC_ROUTE || '/app'

}

module.exports = config