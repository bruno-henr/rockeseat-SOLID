import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const result:any = this.turnUserAdminUseCase.execute({ user_id: request.params.user_id})
    if(!result.id) {
      return response.status(404).json({ error: true })
    } else {
      return response.status(200).json(result)
    }
  }
}

export { TurnUserAdminController };
