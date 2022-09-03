import { Service } from 'typedi';
import { Users } from '../schemas/user';

@Service()
export class UserRepository {
    async getUsers(userId: string) {
        const users = await Users.find({ where: { userId: userId } });
        console.log('111');
        return users;
    }
}
