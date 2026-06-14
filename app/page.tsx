"use client";
import { useEffect, useState } from "react";
import Character from "./character";

async function loadCharacters(){
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data);
}



export default function Home() {
  const [count, setCount] = useState(0);
  const [pressButton, setPressButton] = useState(false);
  const [characters, setCharacters] = useState([]);
  function kliki() {
    setCount(count + 1);
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((r) => r.json())
      .then((f) => {
        console.log(f.results);
        setCharacters(f.results);
        console.log(characters);
      });
    // loadCharacters()
  }, []);

  useEffect(() => {
    console.log("1" + count);
  }, [count]);

  const button = <button onClick={kliki}>nowy przyciak</button>;
  return (
    <div>
      {characters.map((char) => (
        <Character 
        values={char} />
      ))}
    </div>
  );
}
