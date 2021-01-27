import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { USER_REPOSITORY_TOKEN } from './repositories/UserRepository';
import { UserRepositoryFake } from './repositories/UserRepositoryFake';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserRepositoryFake
    },
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
