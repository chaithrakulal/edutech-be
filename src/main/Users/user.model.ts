import { Schema, model } from "mongoose";
import { IUser, IUserFunctionalities } from "./user.interface";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.statics = {
  addRegisteredUser: async function (matchQuery) {
    const newUser = new User(matchQuery);
    const data = await newUser.save();
    return data;
  },
  getUser: async function (matchQuery) {
    const data = await this.find(matchQuery);
    return data;
  },
};
const User = model<IUser, IUserFunctionalities>("User", UserSchema);
export default User;
