import { Request, Response } from 'express';
import {readCharacters} from "../models/characterModel";


export async function getCharacters(req: Request,res: Response) {
    const characters = await readCharacters();
    res.json(characters);
}

