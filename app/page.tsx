"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./globals.css";

type Car = {
  id: number;
  marka: string;
  model: string;
  rok: number;
  cena: number;
  przebieg: number;
  miniatura: string;
};

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [car, setCar] = useState<Car | null>(null);
  const carOnClick = (id: number) => {
    console.log(id);
    fetch(`/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCar(data as Car);
      });
  };
  useEffect(() => {
    fetch("/api/cars")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCars(data as Car[]);
      });
  }, []);
  const tempCars = () => {
    if (cars.length == 0) {
      return <div>Ładaownie...</div>;
    } else {
      return cars.map((car) => (
        <button key={car.id} className="car" onClick={() => carOnClick(car.id)}>
          <Image
            src={car.miniatura}
            alt={`${car.marka} ${car.model}`}
            width={120}
            height={80}
          />
          <p>
            {car.marka} {car.model}
          </p>
          <p>{car.rok}</p>
          <p>{car.cena}</p>
          <p>{car.przebieg}</p>
        </button>
      ));
    }
  };

  return (
    <div>
      {car ? (
        <div className="overlay">
          <div className="popup">
            {car.marka}
            {car.model}
          </div>
        </div>
      ) : (
        ""
      )}
      {tempCars()}
    </div>
  );
}
