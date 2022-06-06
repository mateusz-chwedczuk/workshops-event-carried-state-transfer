import { Logger } from "@nestjs/common";
import { NestApplication, NestFactory } from "@nestjs/core";
import { Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 4012;

  app.connectMicroservice({
    transport: Transport.TCP,
    options: { port },
  });

  await app.startAllMicroservices();
  await app.listen(port);
  Logger.log(
    `🚀 User service is running at http://localhost:${port} 🚀`,
    NestApplication.name
  );
}
bootstrap();
