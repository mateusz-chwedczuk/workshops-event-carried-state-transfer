import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./modules/database/database.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: "INSURANCE_SERVICE",
        transport: Transport.TCP,
        options: { port: 4011 },
      },
    ]),
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
