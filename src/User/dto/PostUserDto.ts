import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
export class PostUserDto {
    @Field()
    loginId: string;
    @Field()
    userId: string;
    @Field()
    name: string;
    @Field()
    email: string;
    @Field()
    department: string;
    @Field(() => Number)
    userRank: number;
    @Field()
    joinDate: string;
    @Field()
    company: string;
    @Field()
    createAt: string;
}
