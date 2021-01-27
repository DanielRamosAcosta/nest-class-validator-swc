import { Inject, Injectable } from '@nestjs/common';
import { UserRepository, USER_REPOSITORY_TOKEN } from './repositories/UserRepository';

@Injectable()
export class AppService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private userRepository: UserRepository
  ) {}

  async getHello() {
    
    const user = await this.userRepository.findOne()

    if (user) {
      console.log("I have the user!")
      console.log(user)
    }


    return 'Hello World!';
  }
}
