import { getRepository, ILike, Repository } from "typeorm";

import { User } from "../../entities/User";
import { IUserRepository, ICreateUserDTO } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repositoryORM: Repository<User>;

    constructor() {
        this.repositoryORM = getRepository(User);
    }

    async create({
        name,
        email,
        password,
        birthday,
    }: ICreateUserDTO): Promise<User> {
        const user = this.repositoryORM.create({
            name,
            email,
            password,
            birthday,
        });

        await this.repositoryORM.save(user);

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repositoryORM.findOne({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repositoryORM.findOne({ id });
        return user;
    }

    async listById(id: string): Promise<User[]> {
        const listUserByid = await this.repositoryORM.find({
            where: { id },
        });

        return listUserByid;
    }

    async list(): Promise<User[]> {
        const userList = await this.repositoryORM.find();
        return userList;
    }

    async save(user: User): Promise<User> {
        return this.repositoryORM.save(user);
    }
}

export { UserRepository };
