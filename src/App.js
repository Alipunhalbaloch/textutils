import './App.css';

import Alert from './components/Alert';
 import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, { useState } from 'react';
 import { Routes,Route} from 'react-router-dom';

 
function App() {
   const [mode, setMode] = useState('light');
   


   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=> {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
   }


   const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-light')
    
   }
   const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls)
      document.body.classList.add('bg-'+cls)
      if(mode === 'light'){
        
        setMode('dark');
        
        document.body.style.backgroundColor='#042743';
        
        showAlert(cls+" mode has been enabled",cls);
        //document.title='Textutils -Dark Mode';

        setInterval(() => {
          document.title='Textutils is amazing ';
        }, 2000);
        
        setInterval(() => {
          document.title='Install Textutils';
        }, 1500);
        
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';

        showAlert("light mode has been enabled","success");
        //document.title='Textutils -Light Mode';

      }}

      
  return (
    <>
   
    
   <Navbar   title="Textutils"  Home="home" About="About us" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>

    <div className='container'>
    
        
        
      <Routes>
            <Route exect path="/" element={<TextForm showAlert={showAlert} heading="Try Textutils- word counter character counter" mode={mode}/>}></Route>
            <Route exect path="about" element={<About  mode={mode}/>}></Route>

      </Routes>
        
     
    
      </div>
      
    </>
  );
}


export default App;
