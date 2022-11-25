import {Field, InputType} from "@nestjs/graphql";
import {IsNotEmpty} from "class-validator";


@InputType()
export class createUserInput {

    @Field({ nullable: true })
    @IsNotEmpty()
    id: number;

    @Field({ nullable: true })
    first_name: string;

    @Field({ nullable: true })
    last_name: string;

    @Field({ nullable: true })
    public phone?: string;

    @Field({ nullable: true })
    public username?: string;

    @Field({ nullable: true })
    public role?: string;

    @Field({ nullable: true })
    public first_order?: boolean;

    @Field({ nullable: true })
    public is_vip?: boolean;

    @Field({ nullable: true })
    public points?: number;

    @Field({ nullable: true })
    public created?: Date;

    @Field({ nullable: true })
    public updated?: Date;

    @Field({ nullable: true })
    public referral_code?: string;

    @Field(  () => [Number],{ nullable: 'items' } )
    public orders?: number[];

    @Field(  () => [Number], { nullable: 'items' }  )
    public tokens?: number[];

    @Field({ nullable: true })
    public token?: number;

    @Field( () => [Number], { nullable: 'items' } )
    public profiles?: number[];

    @Field({ nullable: true })
    public inventory?: string;

    @Field({ nullable: true })
    public route?: string;

    @Field({ nullable: true })
    public last_profile?: number;

    @Field({ nullable: true })
    public profile_confirmed?: boolean;

    @Field( () => [String], { nullable: 'items' } )
    public phones?: string[];

    @Field( () => [String], { nullable: 'items' } )
    public addresses?: string[];

    @Field({ nullable: true })
    public limited?: Date;

    @Field()
    public new_profile?: boolean;
}