import { ConnectDB, PORT } from './database.js'
import app from './app.js'

ConnectDB()


app.listen(PORT)

console.log('server in running port ',PORT) ;