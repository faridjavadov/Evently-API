import  express  from "express"
import { placeController } from "../controllers/placeControllers.js";

export const placeRouter = express.Router();

 placeRouter.get('/',placeController.getAllData)
 placeRouter.get('/:id',placeController.getDataById)
 placeRouter.post('/',placeController.addPlace)
 placeRouter.delete('/:id',placeController.deleteById)