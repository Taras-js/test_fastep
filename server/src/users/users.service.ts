import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UsersWeb, UsersWebDocument} from "./schemas/users.schemas";

@Injectable()
export class UsersService {

    constructor(@InjectModel(UsersWeb.name) private usersModel: Model<UsersWebDocument>,
    ) {
    }

    async createUser(data): Promise<UsersWebDocument> {
        let id = 0;
        do {
            id = Math.floor(1000 + Math.random() * 9000);
        } while (await this.usersModel.findOne({id}).exec());
        const createdUser = new this.usersModel({
            id,
            phone: data.phone,
            first_name: data.first_name,
            role: data.role
        });
        console.log(createdUser)
        return await createdUser.save();

    }

    async updateUser(data): Promise<UsersWebDocument> {
        await this.usersModel.updateOne({id: data.id}, {
            $set: {
                first_name: data.first_name,
                phone: data.phone,
                role: data.role
            }
        }).exec()
        return await this.usersModel.findOne({id: data.id}).exec()
    }

    async getUser(input): Promise<UsersWebDocument> {
        const phone = input.phone
        return await this.usersModel.findOne({phone}).exec();

    }

    async getUsers(): Promise<UsersWebDocument[]> {
        const users = await this.usersModel.find({}).limit(20).exec();
        console.log('users length:', users.length)
        return users.map(i => {
            if (i.id !== undefined) {
                return i
            }
        })
    }

    async removeUser(id): Promise<UsersWebDocument> {
        await this.usersModel.deleteOne({id}).exec()
        console.log(`user ${id} removed`)
        return id
    }
}