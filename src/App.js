import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import {useParams
} from "react-router-dom";
import axios from 'axios';
function App() {
  var bifrostCors ="";
  let { id } = useParams();
  const [token,setToken]=useState("");
  useEffect(()=>{
  //   var xhr = new XMLHttpRequest();
  //   xhr.open('GET', 'http://localhost:3000/cookie', true);
  //  // xhr.withCredentials = true;
  //   xhr.send(null);
  //   if (xhr.status == 200 && xhr.status < 300) {
  //     // Runs when the request is successful
  //     console.log(xhr);
  //   } else {
  //     // Runs when it's not
  //   }
  //const params = new URLSearchParams(window.location.pathname);
  //console.log(params.token)
  alert(id)
  if(typeof(id)!='undefined' && id!=null && id!=""){
    setToken(id);
  }else{
    redirect("https://login-three-gamma.vercel.app/cookie/client1-awipkz2oo-kalpanchatterjee.vercel.app");
  }
    // axios.get("http://localhost:3000").then(res=>{
    //   console.log(res.headers);
    // })
    
  },[])
  const redirect =url=>{
    console.log(url);
    window.location.replace(url);
}
  return (
    <div className="App">
      <header className="App-header">
       {token}
      </header>
    </div>
  );
}

export default App;
