import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/database.service";
import { UserEntity } from "../database/entities/user.entity";

@Injectable()
export class UserService {
  constructor(private readonly database: DatabaseService) {}

  async get(id: string): Promise<UserEntity> {
    return this.database.users.find((c) => c.id === id);
  }
}
