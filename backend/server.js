const express = require ('express');
const cors = require('cors');
const swaggerUi =require('swagger-ui-express');
const swaggerDocument = require('./utils/openapi.json') ;
const taskRoutes =require ("./routes/TaskRoute.js");
const searchRoutes=require("./routes/SearchRoute");
require('dotenv').config();


const app = express()
require('./DbConfig.js') ;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,{ explorer: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', taskRoutes);
app.use('/api',searchRoutes)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})