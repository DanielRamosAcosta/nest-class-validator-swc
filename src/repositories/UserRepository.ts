import { User } from "../models/User";

export const USER_REPOSITORY_TOKEN = "UserRepository"

export interface UserRepository {
  findOne(): Promise<User | undefined>
}
