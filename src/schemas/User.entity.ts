import { Field, ID, Int, ObjectType } from 'type-graphql';
import { getModelForClass, prop } from '@typegoose/typegoose';

@ObjectType()
export class User {
    @Field(() => ID, { nullable: true })
    @prop()
    userId: string;

    @Field({ nullable: true })
    @prop()
    name: string;

    @Field({ nullable: true })
    @prop()
    email: string;

    @Field({ nullable: true })
    @prop()
    department?: string;

    @Field(() => Int, { nullable: true })
    @prop()
    userRank?: number;

    @Field({ nullable: true })
    @prop()
    joinDate: string;

    @Field({ nullable: true })
    @prop()
    company: string;

    @Field({ nullable: true })
    @prop()
    createdAt: string;

    // @Field(() => [User])
    // getUsers: (userId: string) => User;
}

export const Users = getModelForClass(User, {
    schemaOptions: {
        versionKey: false,
    },
});
