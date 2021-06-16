import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";


@injectable()
class ListUsersService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}
  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();
    return users;
  }
}

export { ListUsersService };
