import { Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductService } from 'src/Services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create new product' })
  @ApiResponse({ status: 201, description: 'The product has been created.' })
  @ApiResponse({ status: 409, description: 'Product already exists' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async createProduct() {
    return this.productService.create({
      name: 'Product 1',
      price: 100,
    });
  }
}
