import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  private email!: string;

  @IsNotEmpty()
  private password!: string;
}
