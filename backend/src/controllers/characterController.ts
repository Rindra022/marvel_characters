import { Request, Response } from 'express';
import {readCharacters, writeCharacters} from "../models/characterModel";


export async function getCharacters(req: Request,res: Response) {
    const characters = await readCharacters();
    res.json(characters);
}

export async function addCharacter(req: Request, res: Response) {
    const characters = await readCharacters();
    const newCharacter = {...req.body}
    characters.push(newCharacter);
    await writeCharacters(characters)
    res.status(200).json(newCharacter);
}

