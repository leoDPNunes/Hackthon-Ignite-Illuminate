import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listUsersUseCase = container.resolve(ListUsersUseCase);

        const listAll = await listUsersUseCase.execute();

        return response.json(listAll);
    }
}

export { ListUserController };
