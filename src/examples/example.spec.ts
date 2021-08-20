import { plainToClass } from 'class-transformer';
import { GetUsersOptionsInput } from './example';

describe('example bug', () => {
  it('works', () => {
    const usersOptionsInput = plainToClass(GetUsersOptionsInput, {
      query: 'Query',
      pagination: { skip: 0, limit: 20 },
    });

    expect(usersOptionsInput.query).toEqual('Query');
  });
});
