import React from "react";

interface Character {
    id : number;
    name: string;
    realName: string;
    universe: string;
}

interface Props {
    form: Character;
    setForm: (char: Character) => void;
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
}

function FormCharacter({form, setForm, onSubmit,onCancel}: Props) {

    return(
        <>
            <div className="py-4  px-6 mt-8 bg-gray-100 rounded-xl">
                <h1 className="mb-4 text-center text-gray-500 font-bold text-2xl">{form.id? `Edit Character #${form.id}`: "Add Character"}</h1>
                <form onSubmit={onSubmit} className="flex flex-col justify-center ">
                    <input
                        className="w-md border-gray-300 border-b-1 p-2"
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({...form, name :e.target.value})}
                        required
                    />
                    <input
                        className="w-md border-gray-300 border-b-1 p-2"
                        type="text"
                        placeholder="Real Name"
                        value={form.realName}
                        onChange={(e) =>
                            setForm({...form, realName :e.target.value})}
                        required
                    />
                    <input
                        className="w-md border-gray-300 border-b-1 p-2"
                        type="text"
                        placeholder="Universe"
                        value={form.universe}
                        onChange={(e) =>
                            setForm({...form, universe :e.target.value})}
                        required
                    />
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="bg-gray-500 transition ease hover:transform hover:-translate-y-1 text-white font-bold px-3 py-2 rounded-md mr-6"
                        >
                            {form.id? "Update": "Add"}
                        </button>
                        <button
                            type="button"
                            onClick={onCancel}
                            className="bg-gray-500 transition ease hover:transform hover:-translate-y-1 text-white font-bold px-3 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormCharacter;