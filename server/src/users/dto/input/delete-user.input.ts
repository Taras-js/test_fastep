import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType ()
export class deleteUserInput {
    @Field()
    @IsNotEmpty()
    id: number;
}