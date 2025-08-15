import './App.css'
import ArrayMarvelCharacters from "./component/ArrayMarvelCharacters"
import FormCharacter from "./component/FormCharacter.tsx";
import {useState,useEffect} from "react";

interface Character {
    id: number;
    name: string;
    realName: string;
    universe: string;
}


function App() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [form, setForm] = useState<Character>({
        id: 0,
        name: "",
        realName: "",
        universe: "",
    });

    useEffect(() => {
        fetch("/characters")
            .then((res) => res.json())
            .then((data) => setCharacters(data))
            .catch((err) => console.error(err));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.id) {
            // Update
            const res = await fetch(`/characters/${form.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const updated = await res.json();
            setCharacters((prev) =>
                prev.map((c) => (c.id === updated.id ? updated : c))
            );
        } else {
            // Add
            const res = await fetch(`/characters`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const newChar = await res.json();
            setCharacters((prev) => [...prev, newChar]);
        }
        setForm({ id: 0, name: "", realName: "", universe: "" });
    };

    const handleEdit = (char: Character) => {
        setForm(char);
    };

    const handleDelete = async (id: number) => {
        await fetch(`/characters/${id}`, { method: "DELETE" });
        setCharacters((prev) => prev.filter((c) => c.id !== id));
    };


    return (
    <>
        <main className="h-screen flex flex-col justify-center items-center">
            <ArrayMarvelCharacters
                characters={characters}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <FormCharacter
                form={form}
                setForm={setForm}
                onSubmit={handleSubmit}
                onCancel={() =>
                    setForm({ id: 0, name: "", realName: "", universe: "" })
                }
            />
        </main>
    </>
  )
}

export default App
