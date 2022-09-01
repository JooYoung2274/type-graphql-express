import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import * as CONFIG from './config/index';

const app = express();
app.use(express.json());

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { connect } from './schemas/index';
import { ObjectType, Field, Int, ID, buildSchema, Resolver, Query } from 'type-graphql';
import { Service, Container } from 'typedi';
import { Users } from './schemas/user';

connect();

@Service()
class UserRepository {
    async getUsers() {
        const users = await Users.find({});
        console.log('111');
        return users;
    }
}

@ObjectType()
class User {
    @Field(() => ID)
    userId: string;
    @Field()
    name: string;
    @Field({ nullable: true })
    email: string;
    @Field()
    department?: string;
    @Field(() => Int)
    userRank?: number;
    @Field()
    joinDate: string;
    @Field()
    company: string;
    @Field()
    createdAt: string;
}

@Service()
@Resolver()
class UserResolver {
    constructor(private dependencies: UserRepository) {}

    @Query(() => [User])
    async getUsers() {
        const rows = await this.dependencies.getUsers();
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
