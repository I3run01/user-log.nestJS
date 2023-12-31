import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin: [process.env.ORIGIN],
    credentials: true
})

  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT || 8000);
}
bootstrap();