const express = require('express');
const checkListRouter = require('./src/routes/checklist.js')
require('./config/database.js')
const path = require('path')
const rootRouter = require('./src/routes/index.js')

//para chamar um middleware devo usar o app.use()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs');

app.use('/', rootRouter)

app.use('/checklists', checkListRouter)

app.listen(4000, () => {
    console.log('Servidor foi iniciado')
})  