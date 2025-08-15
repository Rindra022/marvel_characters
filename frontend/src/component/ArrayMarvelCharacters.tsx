import {useEffect, useState } from "react"

function ArrayMarvelCharacters() {
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
            <div className="w-4xl">
                    <h1 className="mb-8 text-center font-bold text-3xl text-red-500">Marvel Characters</h1>

                    {characters.map((char : any)=>
                        <div key={char.id} className="grid grid-cols-6 text-gray-700 text-sm">
                            <div className="border-b-2 pl-5 py-4 flex items-center font-bold"><span>{char.id}</span></div>
                            <div className="border-b-2 px-3 py-4 flex items-center font-bold">{char.name}</div>
                            <div className="border-b-2 px-3 py-4 flex items-center">{char.realName}</div>
                            <div className="border-b-2 px-3 py-4 flex items-center">{char.universe}</div>
                            <div className="border-b-2 px-3 py-4 flex items-center"><button className="bg-gray-600 transition ease hover:bg-gray-500 text-white font-bold px-3 py-2 rounded-xl">Update</button></div>
                            <div className="border-b-2 flex items-center"><button className="bg-red-400 transition ease hover:bg-red-300 text-white font-bold px-3 py-2 rounded-xl">Delete</button></div>
                        </div>
                    )}
                </div>
        </>
    )
}

export default ArrayMarvelCharacters;