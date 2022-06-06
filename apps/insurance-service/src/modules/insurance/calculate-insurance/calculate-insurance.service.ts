import { Injectable } from "@nestjs/common";
import { SimpleUserService } from "src/modules/simple-user/simple-user.service";
import { InsuranceService } from "../insurance.service";

@Injectable()
export class CalculateInsuranceService {
  constructor(
    private readonly simpleUserService: SimpleUserService,
    private readonly insuranceService: InsuranceService
  ) {}

  async execute(userId: string) {
    const insurance = await this.insuranceService.getByUserId(userId);
    const user = await this.simpleUserService.get(userId);

    console.log(`City of user ${userId} is ${user.city}`);
    console.log(`City of user ${userId} is ${user.city}`);
    return;
    // some magic
  }
}
