import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

interface IRes {
  error?: boolean
}
type IResponse = User | any;

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const res:IResponse = this.showUserProfileUseCase.execute({
      user_id: request.params.user_id,
    });
    if (!res?.id) {
      return response.status(404).json({ error: true, ...res });
    }
    return response.json(res);
  }
}

export { ShowUserProfileController };
