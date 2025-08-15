import {Router} from "express";
import {getCharacters,addCharacter,updateCharacter,deleteCharacter} from "../controllers/characterController";

const router = Router();

router.get('/', getCharacters);
router.post('/',addCharacter);
router.put('/:id',updateCharacter);
router.delete('/:id', deleteCharacter)

export default router;