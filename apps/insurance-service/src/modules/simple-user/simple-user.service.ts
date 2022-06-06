import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";

@Injectable()
export class SimpleUserService {
  constructor(private readonly database: DatabaseService) {}

  async get(id: string) {
    return this.database.simpleUsers.find((s) => s.id === id);
  }

  async update(id: string, city: string) {
    const index = this.database.simpleUsers.findIndex((s) => s.id === id);
    if (index > -1) {
      this.database.simpleUsers[index].city = city;
    }
  }
}
