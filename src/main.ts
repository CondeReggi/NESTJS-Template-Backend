import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { resolve } from 'path';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const env = process.env.NODE_ENV || 'local';
config({ path: resolve(__dirname, `../environments/.env.${env}`) });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nombre de tu API')
    .setDescription('Descripción de tu API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  await app.listen(3000);
}

bootstrap();
