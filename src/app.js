import express from 'express'
import routes from './routes.js'

const app = express()

//usar o routes
app.use(routes)

//indicar para o express ler body com json
app.use(express.json())

export default app
