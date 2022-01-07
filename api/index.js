//Import Enviroments Variables
require('dotenv').config()

// Import Express
const express = require('express');
// Initializing express
const app = express();
// Import bodyParser
const bodyParser = require('body-parser');
// Import express session
const session = require('express-session');
// Import connection with mysql
const connection = require('./database/database')

// Import Controllers
const categoriesController = require('./app/domains/categories/controllers/CategoriesController');
// const articlesController = require('./app/Domains/articles/Controllers/ArticlesController');
// const usersController = require('./app/Domains/Users/Controllers/UsersController');

// Import Models
// const Article = require('./app/domains/articles/models/Article');
// const Category = require('./app/domains/categories/models/category');
// const User = require('./app/Domains/users/Models/User');

// Initializing view engine - EJS
app.set('view engine', 'ejs');

// Initializing express session
app.use(session({
   // The secret is used to compute a hash against the session ID
   secret: 'RW@RY$QeDdDe',
   // Similar to session expiration, you can also expire the cookie that was sent to the browser.
   cookie: { maxAge: 28800000 }
}));

// Initializing static files on public page
app.use(express.static('public'));

// Initializing bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database




connection
   .authenticate()
   .then(() => {
      console.log('Conexão feita com sucesso!');
      startServer();
   })
   .catch((error) => {
      console.error(error);
      return false;
   })
// Informing the application that I want to use the routes from the Controller file
// Note that before calling routes I define a prefix (My route access prefix)
app.use('/', categoriesController);
// app.use('/', articlesController);
// app.use('/', usersController);

const startServer = () => {
   app.get('/', (request, response) => {
      return response.json({ ok: true });
   })

   const port = process.env.PORT || 3000;

   // // Building Server
   app.listen(port, () => {
      console.log('O servidor está rodando!');
   });
}

