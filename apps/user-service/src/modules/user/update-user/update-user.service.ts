import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { UserUpdatedEvent } from "@packages/domain";
import { DatabaseService } from "../../database/database.service";
import { UpdateUserDto } from "./update-user.dto";

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly database: DatabaseService,
    @Inject("INSURANCE_SERVICE") private readonly client: ClientProxy
  ) {}

  async execute(id: string, dto: UpdateUserDto) {
    const index = this.database.users.findIndex((u) => u.id === id);
    this.database.users[index].city = dto.city;
    console.log(`Updated city of user ${id}`);
    this.client.emit(
      UserUpdatedEvent.name,
      new UserUpdatedEvent({ userId: id, city: dto.city })
    );
  }
}
