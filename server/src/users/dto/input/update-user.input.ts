import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";


@InputType()
export class updateUserInput {

    @Field({nullable: true})
    @IsNotEmpty()
    id: number;

    @Field({nullable: true})
    @IsNotEmpty()
    first_name: string;

    @Field({nullable: true})
    @IsNotEmpty()
    public phone?: string;

    @Field({nullable: true})
    @IsNotEmpty()
    public role?: string;
}