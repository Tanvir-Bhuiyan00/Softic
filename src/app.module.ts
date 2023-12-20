import { Module } from '@nestjs/common';
import { OrderController } from './order/order.controller';

@Module({
  imports: [],
  controllers: [OrderController],
})
export class AppModule {}