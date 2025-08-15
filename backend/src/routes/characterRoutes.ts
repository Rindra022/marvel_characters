import {Router} from "express";
import {getCharacters,getCharacterById,addCharacter,updateCharacter,deleteCharacter} from "../controllers/characterController";

const router = Router();

router.get('/', getCharacters);
router.post('/',addCharacter);
router.route('/:id')
    .get(getCharacterById)
    .put(updateCharacter)
    .delete(deleteCharacter)

export default router;