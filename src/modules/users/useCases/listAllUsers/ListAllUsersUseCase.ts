import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

interface IRes {
  error: boolean
  user?: User[]
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): IRes | User[] {
    const has_user = this.usersRepository.findById(user_id)
    if(!has_user) {
      return { error: true }
    }else if(!has_user.admin) {
      throw new Error("");
    } 

    const users = this.usersRepository.list();
    return users
    
  }
}

export { ListAllUsersUseCase };
