import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { startActivateOnrenderServer } from './utils/onrender/active.onrender';

startActivateOnrenderServer();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
}
bootstrap();
