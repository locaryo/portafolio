import React from 'react';
import img from '../assets/img/frontend.png';
import imgBeeApp from '../assets/img/b.png';
import imgCat from '../assets/img/cat.png'

const Sectionb = () => {
  return(
    <div className='cuerpo-portafolio'>
      <div className='titulo'>
        <h1>Portafolio</h1>
      </div>
      <div className='section-portafolio'>
        <div>
          <h2>BeeApp</h2>
          <p>BeeApp es una App web desarrollada como un proyecto de grado, esta se creo con el fin de 
            solucionar una problematica que se evidencio en algunas instituciones educativas tantos publicas como privadas.
            BeeApp es una App administrativa para ser usadas en dichas instituciones
            cuenta con un panel administrador desde donde puedes usar funciones como registrar data en una BD, consultar, editar, eliminar 
            tambien pueden generar constancias en formato PDF. Esta se seguira mejorando y se le agregaran mas funciones.
          </p>
          <br/> 
           <p>Para el desarrollo de este aplicacion se utilizo en el Front-End: HTML5, CSS3, JS, no se utilizo ningun Framework
              todo esta desarrollado desde cero, se uso la libreria FontAwesome para los iconos.
          </p>
          <br/> 
           <p>Back-End: PHP, MySql, se utilizo el Framework Codeigniter, Apache, PHPMyAdmin para facilitar la creacion de la BD y realizar
              las relaciones pertinentes entre las tablas.
          </p>
        </div>
        <div className='sliceRigth ajustar-img-portafolio'>
          <a href="https://github.com/locaryo/BeeApp.git" target="_blank"><img src={imgBeeApp} alt="BeeApp"/></a>
        </div>
      </div>
      <div className='section-portafolio'>
        <div id="description-n">
          <h2>Tienda Online</h2>
          <p>
            Actualmente me encuentro en la creacion de una Tienda Online esto solo con el fin de practicar para reforzar los conocimientos
            que poseo y aprender nuevas cosas.
          </p>
          <br/> 
           <p>Front-End: HTML5, CSS3, JS.
          </p>
          <br/> 
           <p>Back-End: PHP, MySql, Apache, PHPMyAdmin para facilitar la creacion de la BD y realizar las relaciones pertinentes entre las tablas.
          </p>
        </div>
        <div className='sliceLeft'>
          <img src={img} alt=""/>
        </div>
        <div id="description-v">
          <h2>Tienda Online</h2>
          <p>
            Actualmente me encuentro en la creacion de una Tienda Online esto solo con el fin de practicar para reforzar los conocimientos
            que poseo y aprender nuevas cosas.
          </p>
          <br/> 
           <p>Front-End: HTML5, CSS3, JS.
          </p>
          <br/> 
           <p>Back-End: PHP, MySql, Apache, PHPMyAdmin para facilitar la creacion de la BD y realizar las relaciones pertinentes entre las tablas.
          </p>
        </div>
      </div>
      <div className='section-portafolio'>
        <div>
          <h2>Punto de Venta en Python(Tkinter)</h2>
          <p>
            Quise probar Python pero no en el ambito web, en otras palabras me intereso lo extenso que es este lenguaje de progamacion y como su uso se puede derivar a otros ambientes.
            Probe a realizar un punto de venta muy sencillo utilizando la libreria Tkinter, esta cuenta con funciones basicas como consultar podructos
            por nombre o categoria, visualizar el precio, registrar un producto en caso de que no exista en el inventario, agregar a un carrito de compras donde te suma o resta un total tambien probe a consumir una
            API la cual es la dolarToday para generar un total en divisas basandose en el precio actual del dolar($) y el total en la moneda local(Bs).
            Planeo seguir el desarrollo de esta App para agregarle mas funcionalidades.
          </p>
          <br/>
          <p>
            Python, Sqlite, Base de datos Relacional.
          </p>
        </div>
        <div className='sliceRigth ajustar-img-portafolio'>
          <a href="https://github.com/locaryo/SistemaDVentas.git" target="_blank"><img src={img} alt="Sistema de ventas"/></a>
        </div>
      </div>
       <div className='section-portafolio'>
       <div id="description-n">
          <h2>Framework</h2>
          <p>
            Este proyecto me vino a la mente al preguntarme como funciona el Framework que mas utilizo(Codeigniter) este utiliza MVC un diagrama que me 
            parece facil de enterder. Tras unas investigaciones de como hacer que mi proyecto utilizara MVC como base
            me di a la tarea de comenzar el desarrollo de mi pequeño Framework, felizmente lo complete y hice que tanto el controlador conectara con las vistas,
            el controlador conectara con el modelo y el modelo conecte con la BD. Aunque me falta mejorarlo me siento a gusto con el resultado.
          </p>
          <br/> 
           <p>
            PHP, MySql
          </p>
        </div>
        <div className='sliceLeft ajustar-img-portafolio'>
          <a href="https://github.com/locaryo/CatFramework.git" target="_blank"><img src={imgCat} alt="CatFramework"/></a>
        </div>
        <div id="description-v">
          <h2>Framework</h2>
          <p>
            Este proyecto me vino a la mente al preguntarme como funciona el Framework que mas utilizo(Codeigniter) este utiliza MVC un diagrama que me 
            parece facil de enterder. Tras unas investigaciones de como hacer que mi proyecto utilizara MVC como base
            me di a la tarea de comenzar el desarrollo de mi pequeño Framework, felizmente lo complete y hice que tanto el controlador conectara con las vistas,
            el controlador conectara con el modelo y el modelo conecte con la BD. Aunque me falta mejorarlo me siento a gusto con el resultado.
          </p>
          <br/> 
           <p>
            PHP, MySql
          </p>
        </div>
      </div>
    </div>
  );
}
export default Sectionb;