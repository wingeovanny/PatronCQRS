import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

class CreateOrderItemDto {
  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNumber()
  @Min(0.01)
  unitPrice: number;

  currency: string;
}

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  merchantId: string;

  @IsArray()
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];
}
