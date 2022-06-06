import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { DatabaseModule } from "./modules/database/database.module";
import { InsuranceModule } from "./modules/insurance/insurance.module";
import { SimpleUserModule } from "./modules/simple-user/simple-user.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    InsuranceModule,
    SimpleUserModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
