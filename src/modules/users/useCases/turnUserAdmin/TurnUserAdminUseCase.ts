import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

interface IResponse {
  admin?: User;
  error: boolean;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): IResponse | User {
    const user: any = this.usersRepository.findById(user_id);
    // if(!user.id) {
    // }
    if (!user) {
      throw new Error("");
    } else {
      const user_admin: User = this.usersRepository.turnAdmin(user);
      // user_admin.admin = true
      return user_admin;
    }
  }
}

export { TurnUserAdminUseCase };
