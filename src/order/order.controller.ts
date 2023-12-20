import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrderController {
  @Post('createOrder')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    try {
      console.log('Order details:', createOrderDto);
      return { message: 'Order created successfully' };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal Server Error',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
