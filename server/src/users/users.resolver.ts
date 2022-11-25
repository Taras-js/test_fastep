import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {UserType} from "./models/user";
import {UsersService} from "./users.service";
import {GetUserArgs} from "./dto/args/get-user.args";
import {createUserInput} from "./dto/input/create-user.input";
import {updateUserInput} from "./dto/input/update-user.input";
import {deleteUserInput} from "./dto/input/delete-user.input";

@Resolver(() => UserType)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Query(() => UserType, {name: 'getUser', nullable: true})
    async getUser(@Args() getUserArgs: GetUserArgs): Promise<UserType> {
        return this.usersService.getUser(getUserArgs)
    }

    @Query(() => [UserType], {name: 'getUsers', nullable: 'items'})
    async getUsers(): Promise<UserType[]> {
        return this.usersService.getUsers()
    }

    @Mutation(() => UserType)
    async createUser(@Args('input') createUserData: createUserInput): Promise<UserType> {
        return this.usersService.createUser(createUserData)
    }

    @Mutation(() => UserType)
    async updateUser(@Args('input') updateUserData: updateUserInput): Promise<UserType> {
        return this.usersService.updateUser(updateUserData.id, updateUserData)
    }

    @Mutation(() => UserType)
    async removeUser(@Args('input') deleteUserData: deleteUserInput): Promise<UserType> {
        return this.usersService.removeUser(deleteUserData.id)
    }


}