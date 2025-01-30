import { Module } from '@nestjs/common';
import { AppController } from './Controllers/app.controller';
import { AppService } from './Services/app.service';
import { DemoController } from './Controllers/demo.controller';

@Module({
  imports: [],
  controllers: [AppController, DemoController], // Gộp tất cả controllers vào đây
  providers: [AppService],
})

export class AppModule {}
