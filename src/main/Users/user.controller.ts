import {
  Body,
  Route,
  Post,
  SuccessResponse,
  Controller,
  Get,
  Query,
} from "tsoa";
import { NewParamsUser } from "./user.interface";
import { UserServices } from "./user.service";

@Route("User")
export class UserController extends Controller {
  @SuccessResponse("201", "Created")
  @Post("/addUser")
  public async addRegisteredUser(@Body() newUserInfo: NewParamsUser) {
    try {
      const result = await new UserServices().addRegisteredUsers(newUserInfo);
      this.setStatus(201);
      return result;
    } catch (error) {
      throw error;
    }
  }

  @SuccessResponse("200", "Fetched")
  @Get("/fetchUser")
  public async getUser(@Query() email: String, @Query() password: string) {
    try {
      const matchQuery = { email, password };
      const result = await new UserServices().getUser(matchQuery);
      this.setStatus(200);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
