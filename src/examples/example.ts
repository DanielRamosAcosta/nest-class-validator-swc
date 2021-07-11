import { IsInt, IsOptional, IsString, ValidateNested } from 'class-validator';

export class PaginationInput {
  @IsInt()
  @IsOptional()
  public skip = 0;

  @IsInt()
  @IsOptional()
  public limit = 39;
}

export class GetUsersOptionsInput {
  @IsString()
  @IsOptional()
  public query?: string;

  @ValidateNested()
  public pagination!: PaginationInput;
}
