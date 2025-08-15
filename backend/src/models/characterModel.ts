import fs from "fs/promises"
import path from "path";

const filePath = path.resolve(__dirname,"../data/characters.json")

export async function readCharacters(){
    const data = await fs.readFile(filePath, "utf8")
    const parsed= JSON.parse(data)
    return parsed.characters;
}

export async function writeCharacters(characters: any[]){
    await  fs.writeFile(filePath, JSON.stringify({characters},null , 2))
}
