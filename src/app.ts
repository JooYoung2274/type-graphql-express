import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import * as CONFIG from './config/index';

const app = express();
app.use(express.json());

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { connect } from './schemas/index';
import { ObjectType, Field, Int, ID, buildSchema, Resolver, Query, Root, Args, Arg } from 'type-graphql';
import { Service, Container } from 'typedi';
import { Users } from './schemas/user';

connect();

@Service()
class UserRepository {
    async getUsers(userId: string) {
        const users = await Users.find({ where: { userId: userId } });
        console.log('111');
        return users;
    }
}

@ObjectType()
class User {
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

@Service()
@Resolver(User)
class UserResolver {
    constructor(private dependencies: UserRepository) {}

    @Query(returns => [User])
    async getUsers(@Arg('userId') userId: string) {
        const rows = await this.dependencies.getUsers(userId);
        return rows;
    }
}

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world');
});

Promise.resolve()
    .then(() =>
        buildSchema({
            resolvers: [UserResolver],
            container: Container,
        }),
    )
    .then(schema => new ApolloServer({ schema }))
    .then(apolloServer => {
        apolloServer.start().then(res => {
            apolloServer.applyMiddleware({
                app,
                path: '/graphql',
            });

            app.listen(CONFIG.JOO.PORT, () => {
                console.log(`server listening on port ${CONFIG.JOO.PORT} `);
            });
        });
    });
