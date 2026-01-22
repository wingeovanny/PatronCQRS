import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Post()
  create(@Body() request: any) {
    return {
      message: 'Order received placeholder',
      request,
    };
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return {
      message: 'Order fetch (placeholder)',
      id,
    };
  }
}
