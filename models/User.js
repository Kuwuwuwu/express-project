import bcrypt from 'bcrypt';

const users = [];

export default {
  async create({ email, password }) {
    const hashed = await bcrypt.hash(password, 10);
    const user = { id: Date.now().toString(), email, password: hashed };
    users.push(user);
    return user;
  },
  findByEmail(email) {
    return users.find(u => u.email === email);
  },
  findById(id) {
    return users.find(u => u.id === id);
  }
};