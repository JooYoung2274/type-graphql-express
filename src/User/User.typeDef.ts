import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
    @Field(() => ID, { nullable: true })
    userId: string;
    @Field({ nullable: true })
    name: string;
    @Field({ nullable: true })
    email: string;
    @Field({ nullable: true })
    department?: string;
    @Field(() => Int, { nullable: true })
    userRank?: number;
    @Field({ nullable: true })
    joinDate: string;
    @Field({ nullable: true })
    company: string;
    @Field({ nullable: true })
    createdAt: string;

    // @Field(() => [User])
    // getUsers: (userId: string) => User;
}
