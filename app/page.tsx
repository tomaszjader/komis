"use client";
import { useEffect, useState } from "react";
import "./globals.css"
export default function Home() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});
const carOnClick = (id) =>{
console.log(id);
fetch(`/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCar(data);
      });
}
  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCars(data);
      });
  }, []);
const tempCars = () =>{
if(cars.length==0){
return <div>Ładaownie...</div>
      }else{
        return (cars.map((car) => (
        <button key={car.id} className="car" onClick={()=>carOnClick(car.id)}>
          <img src={car.miniatura} alt="" />
          <p>{car.marka} {car.model}</p>
          <p>{car.rok}</p>
          <p>{car.cena}</p>
          <p>{car.przebieg}</p>
        </button>
      )))
      }
}



  return (
    <div>
{car? 
<div className="overlay">
  <div className="popup">{car.marka}{car.model}</div>
</div>
:""}
    {tempCars()}
    </div>
  );
}
