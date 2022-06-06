import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { SimpleUserService } from "./simple-user.service";

@Module({
  imports: [DatabaseModule],
  exports: [SimpleUserService],
  providers: [SimpleUserService],
})
export class SimpleUserModule {}
