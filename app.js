const express = require('express');
const session = require('express-session');

const path = require('path');
const methodOverride = require('method-override');

const logMiddleware = require('./middlewares/logMiddlewares');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const app = express();

// ****** Middlewares *******

app.use(session({
    secret: 'Esto es un secreto',
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddleware);


app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: false })); // Necesario para poder obtener la info de los formularios
app.use(express.json()); // Necesario para trabajar archivos JSON
app.use(methodOverride('_method')); // necesario para transformar los POST en PUT Y DELETE
// app.use(logMiddleware); Por ahora no lo vamos a utilizar




// *** Config de Vistas ***
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// ** RUTAS ** 
const mainRoutes = require('./src/routes/mainRoutes');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');

app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en el puerto 3000');
});




