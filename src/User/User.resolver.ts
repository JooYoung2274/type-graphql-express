import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { PostUserDto } from './dto/PostUserDto';
import { UserRepository } from './User.repository';
import { User } from '../schemas/User.entity';

@Service()
@Resolver(User)
export class UserResolver {
    constructor(private dependencies: UserRepository) {}

    @Query(() => [User])
    async getUsers(@Arg('userId') userId: string) {
        const rows = await this.dependencies.getUsers(userId);
        console.log(userId);
        return rows;
    }

    @Mutation(() => User)
    async addUser(@Arg('data') data: PostUserDto) {
        const result = await this.dependencies.addUser(data);
        return result;
    }
}
