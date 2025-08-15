interface Character {
    id: number;
    name: string;
    realName: string;
    universe: string;
}

interface Props {
    characters: Character[];
    onEdit: (char: Character) => void;
    onDelete: (id: number) => void;
}

function ArrayMarvelCharacters({characters, onEdit, onDelete}:Props) {

    return (
        <>
            <div className="w-4xl">
                    <h1 className="mb-8 text-center font-bold text-3xl text-red-500">Marvel Characters</h1>

                    {characters.map((char)=>
                        <div key={char.id} className="grid grid-cols-6 text-gray-700 text-sm">
                            <div className="border-b-2 border-gray-400 pl-5 py-4 flex items-center font-bold"><span>{char.id}</span></div>
                            <div className="border-b-2 border-gray-400 px-3 py-4 flex items-center font-bold">{char.name}</div>
                            <div className="border-b-2 border-gray-400 px-3 py-4 flex items-center">{char.realName}</div>
                            <div className="border-b-2 border-gray-400 px-3 py-4 flex items-center">{char.universe}</div>
                            <div className="border-b-2 border-gray-400 px-3 py-4 flex items-center">
                                <button
                                    onClick={()=>onEdit(char)}
                                    className="bg-gray-600 transition ease hover:bg-gray-500 text-white font-bold px-3 py-2 rounded-xl"
                                >
                                    Update
                                </button>
                            </div>
                            <div className="border-b-2 border-gray-400 flex items-center">
                                <button
                                    onClick={()=>onDelete(char.id)}
                                    className="bg-red-400 transition ease hover:bg-red-300 text-white font-bold px-3 py-2 rounded-xl"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )}
                </div>
        </>
    )
}

export default ArrayMarvelCharacters;