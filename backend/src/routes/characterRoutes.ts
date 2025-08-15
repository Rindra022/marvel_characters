import {Router} from "express";
import {getCharacters,addCharacter,updateCharacter} from "../controllers/characterController";

const router = Router();

router.get('/', getCharacters);
router.post('/',addCharacter);
router.put('/:id',updateCharacter);

export default router;