import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { DemoController } from './Controllers/demo.controller';
import { UserController } from './Controllers/user.controller';
import { UserService } from './Services/user.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, DemoController, UserController], // Gộp tất cả controllers vào đây
  providers: [AppService, UserService, PrismaService], // Gộp tất cả services vào đây
})

export class AppModule {}
