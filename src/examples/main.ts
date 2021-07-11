import { plainToClass } from 'class-transformer';
import { GetUsersOptionsInput } from './example';

const usersOptionsInput = plainToClass(GetUsersOptionsInput, {
  query: '',
  pagination: { skip: 0, limit: 20 },
});

console.log(usersOptionsInput);
