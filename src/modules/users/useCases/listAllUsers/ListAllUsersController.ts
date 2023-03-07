import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const res:any = this.listAllUsersUseCase.execute({ user_id: request.params.user_id })
    if(!res?.length) {
      return response.status(400).json(res)
    }
    return response.json(res)
  }
}

export { ListAllUsersController };
