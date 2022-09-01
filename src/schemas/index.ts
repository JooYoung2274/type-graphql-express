import mongoose, { ConnectOptions } from 'mongoose';
import * as CONFIG from '../config/index';
// 몽구스 연결 코드

export function connect() {
    mongoose
        .connect(
            CONFIG.JOO.DB_URL as string,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                ignoreUndefined: true,
            } as ConnectOptions,
        )
        .catch(err => console.log(err));
    console.log('DB connection');
}

// 몽고디비 연결 에러
mongoose.connection.on('error', err => {
    console.error('몽고디비 연결 에러', err);
});

// 몽고디비 연결이 끊겼을 때
mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊김. 연결을 재시도함');
    connect();
});
