import { Model, Types } from "mongoose";
import { IObject } from "../../common/interfaces/object.interface";

interface IUserSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface IUser extends IUserSchema {}

export interface IUserFunctionalities extends Model<IUser> {
  addRegisteredUser(newUserInfo: NewParamsUser): Promise<IUser>;
  getUser(matchQuery: IObject): Promise<IUser>;
}

export interface NewParamsUser extends IUser {
  firstName: IUser["firstName"];
  lastName: IUser["lastName"];
  email: IUser["email"];
  password: IUser["password"];
}
