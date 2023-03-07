import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const result = await this.createUserUseCase.execute({ name, email });
    if (result.has_error) {
      return response.status(400).json({ error: true })
    } else {
      return response.status(201).json({
        id: result?.user.id,
        name: result?.user.name,
        email: result?.user.email,
        admin: result?.user.admin,
      });
    }
  }
}

export { CreateUserController };
