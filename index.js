import express from 'express'
import alexaRoute from './routes/alexa.js'
import actionsRoute from './routes/actions.js'
import apiRoute from './routes/api.js'
import cors from 'cors'
const app = express()

//Always use Alexa endpoint before using body parsing
app.use('/alexa', alexaRoute)

//Enabling url encoding and body parsing requests
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//Google Actions end point
app.use('/google', actionsRoute)

//REST API to fetch data from Database
app.use('/api', apiRoute)

//Test endpoint
app.get('/', (req, res) => res.send("<h1>Hello Learning Matters!!</h1>"))
app.use(cors())

//Open port 3000 and start the server
app.listen(3000, () => console.log("Server started at port 3000"))