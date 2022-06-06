import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class DatabaseService {
  users: UserEntity[] = [{ id: "abc", city: "Gliwice", age: 20 }];
}
