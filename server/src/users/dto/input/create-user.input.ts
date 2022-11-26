import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";


@InputType()
export class createUserInput {

    @Field({ nullable: true })
    @IsNotEmpty()
    public first_name: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    public phone?: string;

    @Field({ nullable: true })
    @IsNotEmpty()
    public role?: string;

}