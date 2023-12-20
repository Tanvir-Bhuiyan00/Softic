import { IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsArray()
  productIds: number[];

  @IsNotEmpty()
  @IsArray()
  quantities: number[];

  @IsNotEmpty()
  paymentInfo: string;
}
