// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar.js';
import TextUtils from './components/textUtils.js';
import About from './components/About.js';
import Alert from './components/alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


// impr
function App() {
  const [theme, setTheme] = useState('light')
  const [message, setMessage] = useState(null)

  const alertMessage = (message, type) => {
    setMessage({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setMessage(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (theme === "dark") {
      alertMessage('light has been Enabled', 'success')
      setTheme('light')

      document.body.style.backgroundColor = "white"
      // document.body.style.color= "black"
    }
    else {
      alertMessage('dark has been Enabled', 'success')
      setTheme("dark")

      document.body.style.backgroundColor = "#1c2b20"
      // document.body.style.color= "white"
    }
  }




  return (
    <>
      <Router>
        <NavBar title="React App" about="about" mode={theme} togleMode={toggleMode} />
        <Alert alert={message} />

        <Routes>
          <Route path="/about" element={<About mode={theme}/>}>
            
          </Route>
          <Route path="/" element={<TextUtils mode={theme} alertMessage={alertMessage} />}>
            
          </Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
