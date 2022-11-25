import {Injectable} from "@nestjs/common";
import {createUserInput} from "./dto/input/create-user.input";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {updateUserInput} from "./dto/input/update-user.input";
import {deleteUserInput} from "./dto/input/delete-user.input";
import {UsersWeb, UsersWebDocument} from "./schemas/users.schemas";

@Injectable()
export class UsersService {

    constructor(@InjectModel(UsersWeb.name) private usersModel: Model<UsersWebDocument>,
    ) {
    }

    async createUser(createUserData: createUserInput): Promise<UsersWebDocument> {
        const createdUser = new this.usersModel(createUserData);
        return await createdUser.save();

    }


    async updateUser(id, updateUserData: updateUserInput): Promise<UsersWebDocument> {
        return this.usersModel.findOneAndUpdate(id, updateUserData, {new: true})
    }

    async getUser(input): Promise<UsersWebDocument> {
        const phone = input.phone
        return await this.usersModel.findOne({phone}).exec();

    }


    async getUsers(): Promise<UsersWebDocument[]> {
        const users = await this.usersModel.find({}).exec();
        const update = users.map(i => {
            if(i.id !== undefined){
                return i
            }
        })
        // console.log('users:', users)
        return update

    }

    async removeUser(id): Promise<UsersWebDocument> {
        await this.usersModel.deleteOne({id}).exec()
        console.log(`user ${id} removed`)
        return id
    }


}