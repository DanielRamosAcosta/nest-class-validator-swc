import { User } from "../models/User";
import { UserRepository } from "./UserRepository";

export class UserRepositoryFake implements UserRepository {
  async findOne(): Promise<User> {
    return new User("Sam 1")
  }
}
