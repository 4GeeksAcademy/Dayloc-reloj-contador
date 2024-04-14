import React from "react";
import Counter from "./SecoundCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
 let Contador=0;
 function Incremento(contador){
	contador++;
	console.log(contador)
	
	 
}



let seg = setInterval(Incremento,1000);

console.log(seg)
let segundos=seg;
let minutos=0;
let horas=0;

const Home = () => {
	return (
		<div className="container">
				<Counter segundos={segundos} minutos={minutos} horas={horas} />
		</div>	
				
	);
};

export default Home;
