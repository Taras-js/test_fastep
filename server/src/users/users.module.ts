import { Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersResolver } from "./users.resolver";
import { UsersService } from "./users.service";
import {UsersWeb,  UsersWebSchemas} from "./schemas/users.schemas";
@Module({
    providers: [UsersResolver, UsersService],
    imports: [
        MongooseModule.forFeature([
            {name: UsersWeb.name, schema: UsersWebSchemas},
        ]),
    ],
    exports: [
        UsersService,
        MongooseModule.forFeature([
            {name: UsersWeb.name, schema: UsersWebSchemas}
        ])
    ],
    controllers: []

})
export class UsersModule {}