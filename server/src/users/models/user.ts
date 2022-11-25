import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class UserType {

    @Field({ nullable: true })
    public id?: number;

    @Field({ nullable: true })
    public first_name?: string;

    @Field({ nullable: true })
    public last_name?: string;

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

    @Field(  () => [Number],{ nullable: true } )
    public orders?: number[];

    @Field(  () => [Number], { nullable: true }  )
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

    @Field( () => [String], { nullable: true } )
    public phones?: string[];

    @Field( () => [String], { nullable: true } )
    public addresses?: string[];

    @Field({ nullable: true })
    public limited?: Date;

    @Field({ nullable: true })
    public five_weeks_limited?: Date;

    @Field({ nullable: true })
    public six_weeks_limited?: Date;

    @Field({ nullable: true })
    public seven_weeks_limited?: Date;

    @Field({ nullable: true })
    public new_profile?: boolean;

    @Field({ nullable: true })
    public use_safari?:  boolean;

    @Field({ nullable: true })
    public is_token_right?:  boolean;

    @Field({ nullable: true })
    public is_token_reverse?:  boolean;

    @Field({ nullable: true })
    public is_token_invalid?:  boolean;
}