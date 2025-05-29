import React from 'react'
import imgl from '../assets/img/l.png'
import {Link} from 'react-router-dom'

const ComponenteHome = () => {

	const handleClickAbrir = () => {
		var x = document.getElementById("cabecera-home-responsive");
    	if(x.className === ""){
        	x.className += "responsive";
    	}else{
    		x.className = "";
    	}
	}

	const fecha = new Date();
        const actual = fecha.getFullYear();

	return(
		<div className='cuerpo-home'>
			<div className='cabecera-home'>
				<div>
					<Link to="/portafolio/about" className='deslizar-animate'><i className="fa fa-user"/> About</Link>
				</div>
				<div>
					<Link to="/portafolio/portfolio" className='deslizar-animate'><i className="fa fa-folder"/> Portafolio</Link>
				</div>
				<div>
					<Link to="/portafolio/skills" className='deslizar-animate'><i className="fa fa-terminal"/> Skills</Link>
				</div>
			</div>
			<div id="cabecera-home-responsive">
				<div>
					<Link to="/portafolio/about" className='link-responsive'><i className="fa fa-user"/> About</Link>
				</div>
				<div>
					<Link to="/portafolio/portfolio" className='link-responsive'><i className="fa fa-folder"/> Portafolio</Link>
				</div>
				<div>
					<Link to="/portafolio/skills" className='link-responsive'><i className="fa fa-terminal"/> Skills</Link>
				</div>
				<div>
					<button href="#" className='icon-responsive' onClick={handleClickAbrir}><i className="fa fa-list"/></button>
				</div>
			</div>
			<div className='logo'>
				<img src={imgl} alt=""  className='sacudir-animate' />
			</div>
			<div className='footer'>
			<div className='copy'>
				<p><strong>
					&copy; Copyright {actual} - ALBO
				</strong></p>
				<p><strong>
					Para la creación de esta pagina se utilizo React.js 
				</strong></p>
			</div>
		</div>
		</div>
	);
}

export default ComponenteHome
