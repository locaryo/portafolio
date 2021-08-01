import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';
import './assets/css/Animacion.css';
import './assets/css/media_query.css';
import 'font-awesome/css/font-awesome.min.css';
import Rutas from './componentes/Routes.jsx';

const contenedor = document.getElementById('root')

ReactDOM.render(<Rutas/>, contenedor)
