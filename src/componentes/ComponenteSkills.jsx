import React from 'react';
import img from '../assets/img/frontend.png';
const ComponenteSkills = () => {
	return(
		<div className='cuerpo-cv'>
			<div className='titulo-cv'>
				<h1>Skills</h1>
			</div>
			<div className='section-cv'>
				<div id="titulo-n">
					<h2>Front-End</h2>
				</div>
				<div className='sliceDown'>
					<img src={img} alt="" />
				</div>
				<div>
					<h2 id="titulo-v">Front-End</h2>
					<p>
						En lo que respecta al Front-End manejo lenguaje de etiquetado <strong>(HTML5)</strong>,
						lenguaje de estilos <strong>(CSS3)</strong>, pre-procesadores de estilos <strong>(SASS)</strong>,
						lenguaje de programacion <strong>(JS)</strong>. Frameworks <strong>(Materialize Css), (Bootstrap)</strong>. 
						Lo basico de la libreria <strong>(ReactJs)</strong>.
					</p>
				</div>
			</div>
			<div className='section-cv'>
				<div id="titulo-n">
					<h2>Back-End</h2>
				</div>
				<div className='sliceUp'>
					<img src={img} alt="" />
				</div>
				<div>
					<h2 id="titulo-v">Back-End</h2>
					<p>
						En el Back-End manejo lenguaje de programacion del lado del servidor <strong>(PHP)</strong>. Frameworks <strong>(Codeigniter)</strong>.
						Servidor web <strong>(Apache)</strong>. Base de datos <strong>(MySql)</strong>, Bases de datos Relacionales.
					</p>
				</div>
			</div>
		</div>
	);
}
export default ComponenteSkills;