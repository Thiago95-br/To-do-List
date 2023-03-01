const express = require('express');
const checkListRouter = require('./src/routes/checklist.js')
require('./config/database.js')

//para chamar um middleware devo usar o app.use()
const app = express();
app.use(express.json());

app.use('/checklists', checkListRouter)

app.listen(4000, () => {
    console.log('Servidor foi iniciado')
})  