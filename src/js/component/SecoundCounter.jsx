import { resetWarningCache } from "prop-types";
import React from "react";


const Counter=(props)=>{
    
    return (
        <div className="row text-center ">
            <div className="col "><img className="reloj" src="https://th.bing.com/th/id/R.6acbbe6872453f1a2e4369fbdbcaf1cb?rik=IwapBe05Is9CNg&riu=http%3a%2f%2fgifsanimados.de%2fimg-gifsanimados.de%2fr%2freloj%2frelojarena.gif&ehk=kEe1yY8v%2ff1ZvEfPo5fHslm5DOiWJuqxSvPvouDk%2b9s%3d&risl=&pid=ImgRaw&r=0" alt="" /></div>
            <div className="col"><p className="horas">{props.horas}</p></div> 
            <div className="col"><p className="minutos">{props.minutos}</p></div>
            <div className="col" ><p className="segundos">{props.segundos}</p></div>
            
        </div>

    )
}
export default Counter;