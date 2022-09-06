import { Service } from 'typedi';
// import { Users } from '../schemas/userTypegoose';
import { Users } from '../schemas/User.entity';
import { PostUserDto } from './dto/PostUserDto';

@Service()
export class UserRepository {
    async getUsers(userId: string) {
        const users = await Users.find({ where: { userId: userId } });
        console.log('111');
        return users;
    }

    async addUser(data: PostUserDto) {
        const user = await Users.create({
            loginId: '2',
            userId: '2',
            name: 'kim',
            email: 'joo@naer.com',
            department: 'backend',
            userRank: 2,
            joinDate: '2022',
            company: 'qu',
            createAt: '2022',
        });

        return user;
    }
}
