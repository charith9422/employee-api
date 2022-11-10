import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Employee API')
    .setDescription('This is created for interview assignment')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    allowedHeaders: ['content-type', 'Access-Control-Allow-Origin'],
    origin: ['https://employee-manager-app.vercel.app'],
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: false,
  });
  await app.listen(3001);
}
bootstrap();
