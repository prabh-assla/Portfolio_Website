import express from "express"
import bodyParser from "body-parser"

//our whole application lies in this small variable called app
const app = express()
const PORT = 3000

//this tells that we will be using json type of data throughout the document
app.use(bodyParser.json()) 

app.get('/', (req, res) => {
    console.log('[TEST!')

    res.send('Hello from HomePage.')
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))

//we caanot save the file and close the server and run the server again for chages to occure. This is why we use a package called NODEMON.

