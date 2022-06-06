import { Controller, Get, Param } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { UserUpdatedEvent } from "@packages/domain";
import { CalculateInsuranceService } from "./calculate-insurance/calculate-insurance.service";

@Controller()
export class InsuranceController {
  constructor(
    private readonly calculateInsuranceService: CalculateInsuranceService
  ) {}

  @EventPattern(UserUpdatedEvent.name)
  async handleEvent(@Payload() data: UserUpdatedEvent) {
    // Fetch new user data to simple user table
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
