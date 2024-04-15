import React from "react";
import Counter from "./SecoundCounter";
import {useState} from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const[segundos,setSegundos] = useState(0);
  let minutos = 0;
  let horas = 0;
  const incremento=()=>{
    
    setSegundos(segundos+1)
    if(segundos==10){
      segundos=0;
    }else segundos+1;

    console.log(segundos)
    
    
    
  }
  //setInterval(incremento, 1000);

  return (
    <div className="container">
      <Counter segundos={segundos} minutos={minutos} horas={horas} />
      
    </div>
  );
};

export default Home;
