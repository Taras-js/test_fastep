import {Module} from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule} from "@nestjs/config";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import "dotenv/config";
import {UsersModule} from "./users/users.module";

const mongoUri = process.env.MONGODB_URI
console.log('Connect database:', mongoUri)

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
            driver: ApolloDriver,
            path: "/api/graphql",
            subscriptions: {
                'subscriptions-transport-ws': true,
                'path': '/subscriptions'
            },
        }),
        ConfigModule.forRoot({isGlobal: true, envFilePath: '.env'}),
        MongooseModule.forRoot(mongoUri),
        UsersModule
    ]
})
export class AppModule {
}
