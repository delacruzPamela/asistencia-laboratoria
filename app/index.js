import './base.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import Button from './components/Button'
import ContainerForm from './components/ContainerForm'
import Course from './components/Course'
import Header from './components/Header'
import Hour from './components/Hour'
import InputData from './components/InputData'
import LogOut from './components/LogOut'
import Message from './components/Message'
import Profile from './components/Profile'
import Success from './components/Success'
import store from './config/store'

const state = {
  page: 0
}


const App = () => {

   if(state.page === 0) {

    return (
      <Provider store={store}>
        <div>
          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            />
          <ContainerForm/>
          <Button
            assistance="present"
            text="Ingresar"
            />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
          />
          <Success
            user='Kenneth'
          />
          <Button
            assistance="present"
            text="Marca tu asistencia"
          />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
          />
          <Course/>
          <Message/>
          <Button
            assistance="miss"
            text="Entiendo"
          />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
          />
          <Profile
            name='Kenneth'
          />
          <Hour/>
          <Button
            assistance="present"
            text="Presente! :)"
          />
          <Button
            assistance="miss"
            text="Voy a faltar :("
          />

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
          />
          <LogOut/>
          <Button
            assistance="present"
            text="Ingresa de nuevo"
          />

        </div>




      </Provider>
    );

  } /*else if (state.page === 1) {
     console.log(state.page);
    return (
      <Provider store={store}>
        <div className="container-fluid padding-0">

          <Header
            src="http://i65.tinypic.com/2lwrbwx.png"
            alt="Laboratoria"
            />
          <Hour/>

          <Button
            assistance="present"
            text="Presente! :)"
            />
          <Button
            assistance="miss"
            text="Voy a faltar :("
            />

        </div>
      </Provider>
    )
  } else {
     return (
       <Provider store={store}>
         <div>
           <Header
             src="http://i65.tinypic.com/2lwrbwx.png"
             alt="Laboratoria"
           />

           <LogOut/>

           <Button
             assistance="present"
             text="Ingresa de nuevo"
           />


         </div>
       </Provider>
     )
  }*/
}

render(
  <App state = {state} />,
  document.getElementById('root')
)


/* Para pintar asistencia */

/*
	<Header
	  src="http://i65.tinypic.com/2lwrbwx.png"
	  alt="Laboratoria"
	  />
	<Hour/>

	<Button
	  assistance="present"
	  text="Presente! :)"
	  />
	<Button
	  assistance="miss"
	  text="Voy a faltar :("
	  />
*/

/* Para pintar registro */
/*
<Header
	  src="http://i65.tinypic.com/2lwrbwx.png"
	  alt="Laboratoria"
	  />

	<ContainerForm>

	</ContainerForm>
*/


/*
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/

