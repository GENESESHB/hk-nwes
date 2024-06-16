import { UserService } from './user.service';
import { User } from './user.model';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDto: {
        name: string;
        age: number;
    }): Promise<User>;
    findAll(): Promise<User[]>;
}
