import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Welcome from '../pages/Home.js'
import CV from '../pages/Cv.js'
import Portafolio from '../pages/Portafolio.js'
import About from '../pages/About.js'


const Routes = () => {
	return(
		<BrowserRouter>
			<Route exact path="/portafolio" component={Welcome}/>
			<Route exact path="/portafolio/about" component={About}/>
			<Route exact path="/portafolio/portfolio" component={Portafolio}/>
			<Route exact path="/portafolio/skills" component={CV}/>
		</BrowserRouter>
	)
}

export default Routes