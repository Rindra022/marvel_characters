import { Request, Response } from 'express';
import {readCharacters, writeCharacters} from "../models/characterModel";


export async function getCharacters(req: Request,res: Response) {
    const characters = await readCharacters();
    res.json(characters);
}

export async function addCharacter(req: Request, res: Response) {
    const characters = await readCharacters();
    const newId = characters.length ? characters[characters.length - 1].id + 1 : 1;
    const newCharacter = { id: newId, ...req.body };
    characters.push(newCharacter);
    await writeCharacters(characters)
    res.status(200).json(newCharacter);
}

export async function updateCharacter(req: Request, res: Response) {
    const {id} = req.params;
    const characters = await readCharacters();
    const index = characters.findIndex((c: { id: number; }) => c.id === parseInt(id));

    if(index === -1){
        return res.status(404).json({message: "Character not found."});
    }
    characters[index]={...characters[index], ...req.body};
    await writeCharacters(characters);
    res.json(characters[index])
}

export async function deleteCharacter(req: Request, res: Response) {
    const { id } = req.params;
    let characters = await readCharacters();
    characters = characters.filter((c: { id: number; }) => c.id !== parseInt(id));
    await writeCharacters(characters);
    res.json({ message: "Deleted" });
}