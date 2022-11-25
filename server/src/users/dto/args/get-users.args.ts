import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class GetUsersArgs {
    @Field()
    id: number;
}