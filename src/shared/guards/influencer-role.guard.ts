import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { config } from '../config/authConfig';
import { TypeUsers } from '../enums/type-users.enum';
interface DecodedJwt {
    id: string;
    type: TypeUsers;
    state: string;
    level_subscriber: string;
    email: string;
}

@Injectable()
export class InfluencerRole implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        if (
            !request.headers.authorization ||
            request.headers.authorization === undefined
        ) {
            throw new UnauthorizedException('não autorizado');
        }

        const authorization =
            (request.headers.authorization || '').split(' ')[1] || '';

        const decoded = jwt.verify(
            authorization as string,
            config.JWT.SECRET,
        ) as DecodedJwt;

        if (decoded.type !== TypeUsers.INFLUENCER) {
            throw new UnauthorizedException(
                'não autorizado permitido apenas para influencers',
            );
        }
        return true;
    }
}
