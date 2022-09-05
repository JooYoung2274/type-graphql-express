import { getModelForClass, prop } from '@typegoose/typegoose';

class User {
    @prop()
    loginId: string;

    @prop()
    userId: string;

    @prop()
    name: string;

    @prop()
    email: string;

    @prop()
    department: string;

    @prop()
    userRank: number;

    @prop()
    joinDate: string;

    @prop()
    company: string;

    @prop()
    createAt: string;
}

export const Users = getModelForClass(User);
