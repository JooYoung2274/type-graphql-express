import mongoose from 'mongoose';

const { Schema } = mongoose;
const UsersSchema = new Schema({
    loginId: { type: String, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    department: { type: String, required: true },
    userRank: { type: Number, required: true },
    joinDate: { type: String, required: true },
    company: { type: String, required: true },
    createdAt: { type: String, required: true },
});

// id라는 이름으로 _id 사용
UsersSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

export const Users = mongoose.model('Users', UsersSchema);
