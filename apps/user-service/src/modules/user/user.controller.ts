import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from "@nestjs/common";
import { UpdateUserService } from "./update-user/update-user.service";

@Controller("user")
export class UserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Get(":id")
  async handle(@Param("id") id: string, @Query("city") city: string) {
    if (id === "abc") {
      await this.updateUserService.execute(id, { city });
      return "User's city updated";
    } else throw new NotFoundException("User not found");
  }
}
