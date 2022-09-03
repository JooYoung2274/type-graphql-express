import { Arg, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { UserRepository } from './User.repository';
import { User } from './User.typeDef';

@Service()
@Resolver(User)
export class UserResolver {
    constructor(private dependencies: UserRepository) {}

    @Query(returns => [User])
    async getUsers(@Arg('userId') userId: string) {
        const rows = await this.dependencies.getUsers(userId);
        return rows;
    }
}
