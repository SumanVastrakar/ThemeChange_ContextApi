// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm';
// import About from './components/About';
import Categories from './components/Categories';
// import Counter from './components/Counter';
import { useState } from 'react';
import Alert from './components/Alert';


// const object=[
//   {
//     image:"https://kingchoice.me/media/CACHE/images/378268d5701f6058c02b318b6663284c_Cu7hNfA/61e3f0733237a549d971270bf34cabff.jpg",
//     label:"jennie Solo"
//   },
//   {
//     image:"https://static.toiimg.com/photo/87277842/87277842.jpg?v=3",
//     label:"paris fashion"
//   }
// ]

function App() {
  const [mode, setMode] = useState("light");// whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert=(message, Type)=>{
setAlert({
  msg:message,
  type:Type,
})
setTimeout(()=>{
setAlert(null)
},1500)
  }
  const toggleMode =()=>{
if(mode === "light"){
  setMode("dark")
  document.body.style.backgroundColor="rgb(50, 49, 49)";
  showAlert("Dark mode has been enabled","success")
}else {
  setMode("light")
  document.body.style.backgroundColor="white"
showAlert("Light mode has been enabled","success")
}
  }
  return (
 <>
<Navbar title="LOGOBAKERY" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm title="Enter Your Text here" showAlert={showAlert} mode={mode}/>
{/* <About/> */}
</div>

{/* <div>
 { object.map(ele=>(
    <Categories  images={ele.image} label={ele.label} />
  ))}

</div> */}
{/* <Counter/> */}


 </>
  );
}

export default App;
