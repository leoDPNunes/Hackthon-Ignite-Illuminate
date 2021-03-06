import { Router } from "express";

import { CreateCardController } from "../modules/cards/useCases/createCard/CreateCardController";
import { ListCardsController } from "../modules/cards/useCases/listCards/ListCardsController";
import { UpdateCardController } from "../modules/cards/useCases/updateCard/UpdateCardController";

const createCardController = new CreateCardController();
const listCardController = new ListCardsController();
const updateCardController = new UpdateCardController();

const cardsRoutes = Router();

cardsRoutes.post("/", createCardController.handle);
cardsRoutes.get("/:user_id", listCardController.handle);
cardsRoutes.put("/:id", updateCardController.handle);

export { cardsRoutes };
