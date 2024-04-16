import React, { useEffect } from "react";
import Counter from "./SecoundCounter";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const [segundos, setSegundos] = useState(0);
  const[minutos,setMinutos]  = useState(0);
  let horas = 0;
 
  
  useEffect(() => {
    setInterval(() => {
      
      setSegundos((preSegundos)=>preSegundos===59 ? 0 : preSegundos+1);
     
      
    }, 1000);
    

  }, []);
 
  useEffect(() => {
    setInterval(() => {
      
      setMinutos((preMinutos)=> preMinutos===59 ? 0 : preMinutos+1 );
      console.log(minutos)
      
    }, 60000);
    

  }, [
    
  ]);
 

  return (
    <div className="container">
      <Counter segundos={segundos} minutos={minutos} horas={horas} />
    </div>
  );

};

export default Home;
