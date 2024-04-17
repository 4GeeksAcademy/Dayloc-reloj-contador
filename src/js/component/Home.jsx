import React, { useEffect } from "react";
import Counter from "./SecoundCounter";
import { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
  const [segundos, setSegundos] = useState(0);
  const[minutos,setMinutos]  = useState(0);
  const[horas,setHoras]  = useState(0);
 
  
  useEffect(() => {
    setInterval(() => {
      
      setSegundos((preSegundos)=> preSegundos===60 ? 0 : preSegundos+1);
           
    }, 1000);
    
    

  }, []);
 
  
  useEffect(() => {
  
      
    setMinutos((minutos) => segundos===60 ? minutos+1 : minutos && minutos>59 ? minutos=0 : minutos)
      
  

    

},[segundos]);
useEffect(() => {
  
      
  setHoras((horas) => minutos===60 ? horas+1 : horas && horas>=24 ? horas=0 : horas)


  

},[minutos]);



  return (
    <div className="container">
      <Counter segundos={segundos} minutos={minutos} horas={horas} />
      
    </div>
  );

};

export default Home;
