import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { DatabaseModule } from "../database/database.module";
import { UpdateUserService } from "./update-user/update-user.service";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  exports: [UserService],
  imports: [
    DatabaseModule,
    ClientsModule.register([
      {
        name: "INSURANCE_SERVICE",
        transport: Transport.TCP,
        options: { port: 4011 },
      },
    ]),
  ],
  providers: [UserService, UpdateUserService],
})
export class UserModule {}
