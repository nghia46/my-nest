import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up swagger

  app.use('/public', express.static(join(__dirname, '..', 'public')));

  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, {
    customCssUrl: '/public/swagger-dark.css', // Load CSS dark mode
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
