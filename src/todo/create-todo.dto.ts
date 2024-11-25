import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
