import express, { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import * as CONFIG from './config/index';

const app = express();
app.use(express.json());

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { connect } from './schemas/index';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import { UserResolver } from './User/User.resolver';

connect();

// health check API
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world');
});
///////////////////////////////////////////////////////////////////

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
