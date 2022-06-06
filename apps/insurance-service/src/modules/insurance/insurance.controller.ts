import { Controller, Get, Param } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { UserUpdatedEvent } from "@packages/domain";
import { SimpleUserService } from "../simple-user/simple-user.service";
import { CalculateInsuranceService } from "./calculate-insurance/calculate-insurance.service";

@Controller()
export class InsuranceController {
  constructor(
    private readonly simpleUserService: SimpleUserService,
    private readonly calculateInsuranceService: CalculateInsuranceService
  ) {}

  @EventPattern(UserUpdatedEvent.name)
  async handleEvent(@Payload() data: UserUpdatedEvent) {
    await this.simpleUserService.update(data.userId, data.city);
    await this.calculateInsuranceService.execute(data.userId);
    console.log(
      `Calculated insurance for user ${data.userId} via event handler`
    );
  }

  @Get("insurance/:id")
  async handleRequest(@Param("id") userId: string) {
    await this.calculateInsuranceService.execute(userId);
    console.log(`Calculated insurance for user ${userId} via endpoint`);
  }
}
