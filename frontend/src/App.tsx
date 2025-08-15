import {useEffect, useState } from "react"
import './App.css'

function App() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('/characters')
            .then(res => {
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
                return res.json();
            })
            .then(data => setCharacters(data.characters))
            .catch(err => console.error(err));
    }, []);
  return (
    <>
        <div className="flex justify-center flex-column">
            <div className="w-xl">
            <h1>Marvel Characters</h1>

                {characters.map((char : any)=>
                <div key={char.id} className="grid grid-cols-3">
                    <div className="border px-2 py-3">{char.id}</div>
                    <div className="border px-2 py-3">{char.name}</div>
                    <div className="border px-2 py-3">{char.realName}</div>
                </div>
                )}
            </div>
        </div>
    </>
  )
}

export default App
