import { Injectable } from "@nestjs/common";
import { InsuranceEntity } from "./entities/insurance.entity";
import { SimpleUserEntity } from "./entities/simple-user.entity";

@Injectable()
export class DatabaseService {
  simpleUsers: SimpleUserEntity[] = [{ id: "abc", city: "Gliwice" }];
  insurances: InsuranceEntity[] = [];
}
