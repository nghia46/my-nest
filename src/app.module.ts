import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { DemoController } from './Controllers/demo.controller';
import { UserController } from './Controllers/user.controller';
import { UserService } from './Services/user.service';
import { PrismaService } from './prisma.service';
import { CommandBus, CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './user/commands/handlers/create-user.handler';

const CommandHandlers = [CreateUserHandler]; 
@Module({
  imports: [CqrsModule], // ⚠️ Bắt buộc phải có CqrsModule
  controllers: [AppController, DemoController, UserController],
  providers: [AppService, UserService, PrismaService, ...CommandHandlers], 
})

export class AppModule {}
