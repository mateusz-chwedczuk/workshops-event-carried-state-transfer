import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { DatabaseModule } from "../database/database.module";
import { SimpleUserModule } from "../simple-user/simple-user.module";
import { CalculateInsuranceService } from "./calculate-insurance/calculate-insurance.service";
import { InsuranceController } from "./insurance.controller";
import { InsuranceService } from "./insurance.service";

@Module({
  controllers: [InsuranceController],
  exports: [InsuranceService],
  imports: [
    DatabaseModule,
    SimpleUserModule,
    ClientsModule.register([
      {
        name: "USER_SERVICE",
        transport: Transport.TCP,
        options: { port: 4012 },
      },
    ]),
  ],
  providers: [InsuranceService, CalculateInsuranceService],
})
export class InsuranceModule {}
