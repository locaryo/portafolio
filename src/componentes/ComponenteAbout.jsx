import React from 'react';
import img from '../assets/img/frontend.png';
import yo from '../assets/img/yo.jpg';

const ComponenteAbout = () => (
	<div className='cuerpo-about'>
		<div className='titulo-about'>
			<h1>About</h1>
		</div>

		<div className='section-about'>
			<div className='info'>
				<h1>¡¡¡ HELLO !!!</h1>
				<h3>
					Mi nombre es Andry Bracho, procedente de Venezuela y estudiante de la carrera de informática.
				</h3>
			</div>
			<div className='yo sliceDown'>
				<img src={yo} alt="" />
			</div>
			<div className='new-info'>
				<h3><strong>¡¡¡ HELLO !!!</strong></h3>
				<p>
					Mi nombre es Andry Bracho, procedente de Venezuela y estudiante de la carrera de informática.
				</p>
			</div>
		</div>

		<div className='section-about about-center-circle'>
			<div className='circle sliceUp'>
				<h2>Estudios</h2>
				<p>
					Educación Basica: <strong>Aprobada</strong>
				</p>
				<p>
					Educación Media: <strong>Aprobada</strong>
				</p>
				<p>
					Educación Universitaria: <strong>Cursando</strong>
				</p>
			</div>
			<div className='circle sliceUp'>
				<h2>Cursos</h2>
				<p>
					Front-End: <strong>Certificado</strong>
				</p>
				<p>
					Back-End: <strong>Certificado</strong>
				</p>
				<p>
					Mantenimiento de Computadores: <strong>Certificado</strong>
				</p>
			</div>
		</div>
		<div className='contacto'>
			<h1>Contactame:</h1>
			<a href="mailto:andrybracho5c@gmail.com" className="aumentar"><i className="fa fa-envelope"/></a>
		</div>

	</div>
);

export default ComponenteAbout;