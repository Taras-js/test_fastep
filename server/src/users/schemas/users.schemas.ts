import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersWebDocument = UsersWeb & Document;

@Schema()
export class UsersWeb {
    @Prop()
    public id?: number;

    @Prop()
    public first_name?: string;

    @Prop()
    public last_name?: string;

    @Prop({ required: true })
    public phone?: string;

    @Prop()
    public username?: string;

    @Prop({ required: true })
    public role?: string;

    @Prop({ required: true, default: false})
    public first_order?: boolean;

    @Prop()
    public is_vip?: boolean;

    @Prop()
    public points?: number;

    @Prop()
    public created?: Date;

    @Prop()
    public updated?: Date;

    @Prop()
    public referral_code?: string;

    @Prop({ type: () => [Number] })
    public orders?: number[];

    @Prop({ type: () => [Number] })
    public tokens?: number[];

    @Prop()
    public token?: number;

    @Prop({ type: () => [Number] })
    public profiles?: number[];

    @Prop()
    public inventory?: string;

    @Prop()
    public route?: string;

    @Prop()
    public last_profile?: number;

    @Prop()
    public profile_confirmed?: boolean;

    @Prop({ type: () => [String] })
    public phones?: string[];

    @Prop({ type: () => [String] })
    public addresses?: string[];

    @Prop()
    public limited?: Date;

    @Prop()
    public five_weeks_limited?: Date;

    @Prop()
    public six_weeks_limited?: Date;

    @Prop()
    public seven_weeks_limited?: Date;

    @Prop( {default: true})
    public new_profile?:  boolean;

    @Prop({default: false})
    public use_safari?:  boolean;

    @Prop({default: false})
    public is_token_right?:  boolean;

    @Prop({default: false})
    public is_token_reverse?:  boolean;

    @Prop({default: false})
    public is_token_invalid?:  boolean;
}


export const UsersWebSchemas = SchemaFactory.createForClass(UsersWeb)