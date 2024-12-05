import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

import { connectDB } from './config/dbConfig.mjs';
import superheroesRoutes from './routes/superHeroRoutes.mjs';
import methodOverride from 'method-override';
import { body } from 'express-validator';

const app = express();
const PORT = 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method')); // Permite usar ?_method=PUT en formularios

// Configurar EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//Configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // archivo Base de layout

// Middleware para agregar navbarLinks
app.use((req, res, next) => {
  res.locals.navbarLinks = [
    { text: 'Inicio', href: '/', icon: '/icons/home.svg' },
    { text: 'Acerca De', href: '/about', icon: '/icons/info.svg' },
    { text: 'Contacto', href: '/contact', icon: '/icons/contact.svg' }
  ];
  next();
});


// Servir archivos estaticos
app.use(express.static(path.resolve('./public')));
app.use('/api', superheroesRoutes);

/********* Inicio ******************************************** */
app.get('/', (req, res) =>{
  res.render('index',{
    title:'Página Principal'
  })
});

/********************** Acerca De ******************************************** */
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Acerca De'}
  );
});

/********************** Contacto ******************************************** */
app.get('/contact', (req, res) =>{
  res.render('contact',{
    title:'Contáctanos'
  });
});

/****************************************** */

app.use((req, res) => {
  res.status(404).send({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`Servidor Carriendo en http://localhost:${PORT}`);
  console.log(`Ctrl+C para bajar servidor`);
});
