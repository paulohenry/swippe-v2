import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { config } from '../config/authConfig';
import { IUserLogged } from '../interfaces/user-logged.interface';

export const UserLogged = createParamDecorator(
    (data: unknown, context: ExecutionContext): IUserLogged => {
        const request = context.switchToHttp().getRequest();
        const authorization =
            (request.headers.authorization || '').split(' ')[1] || '';

        const decoded = jwt.verify(
            authorization as string,
            config.JWT.SECRET,
        ) as IUserLogged;

        return decoded;
    },
);
