import { User } from './models/User';

const user = new User({ name: 'Elaine', age: 40 });
user.save();
