import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class InsuranceService {
  constructor(private readonly database: DatabaseService) {}

  async getByUserId(userId: string) {
    return this.database.insurances.find((i) => i.userId === userId);
  }
}
