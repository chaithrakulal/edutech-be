import { NewParamsUser } from "./user.interface";
import User from "./user.model";

export class UserServices {
  async addRegisteredUsers(newUserInfo: NewParamsUser) {
    const newUser = await User.addRegisteredUser(newUserInfo);
    return newUser;
  }
  async getUser(matchQuery: Object) {
    return await User.getUser(matchQuery);
  }
}
