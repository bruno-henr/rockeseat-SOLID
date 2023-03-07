import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

interface IResponse {
  user?: User;
  has_error: boolean;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): IResponse {
    const email_already_exits = this.usersRepository.findByEmail(email);
    if (email_already_exits) {
      throw new Error("");
    }
    const user = this.usersRepository.create({ email, name });
    return { user: user, has_error: false };
  }
}

export { CreateUserUseCase };
