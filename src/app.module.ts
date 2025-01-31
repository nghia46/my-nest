import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './Services/app.service';
import { DemoController } from './Controllers/demo.controller';
import { UserController } from './Controllers/user.controller';
import { UserService } from './Services/user.service';
import { PrismaService } from './prisma.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './user/commands/handlers/create-user.handler';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './Controllers/product.controller';
import { ProductService } from './Services/product.service';
import { Product, ProductSchema } from 'schemas/product.schema';

const CommandHandlers = [CreateUserHandler];
@Module({
  imports: [
    CqrsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  controllers: [AppController, DemoController, UserController, ProductController],
  providers: [AppService, UserService,ProductService, PrismaService, ...CommandHandlers],
})
export class AppModule {}
