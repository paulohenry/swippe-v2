import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { config } from '../../../shared/config/authConfig';
import { checkIfUnencryptedPasswordIsValid } from '../../../shared/utils/passwordHook.util';
import { AdvertiserRepository } from '../../advertisers/repositories/advertiser.repository';
import { InfluencerRepository } from '../../influencers/repositories/influencer.repository';
import { AuthDto } from '../dtos/auth.dto';
import { JWTDto } from '../dtos/jwt.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly advertiserRepository: AdvertiserRepository,
        private readonly influencerRepository: InfluencerRepository,
    ) {}

    async Auth(dto: AuthDto): Promise<JWTDto> {
        const findOneAdvertiser = await this.advertiserRepository.findOneAdvertiserByEmail(
            dto.email,
        );

        const findOneInfluencer = await this.influencerRepository.findOneInfluencerByEmail(
            dto.email,
        );
        console.log(findOneInfluencer, findOneAdvertiser, dto);

        if (!findOneInfluencer && !findOneAdvertiser) {
            throw new BadRequestException('usuário não encontrado');
        }
        if (findOneInfluencer && findOneAdvertiser) {
            throw new BadRequestException(
                'email duplicado entrar em contato com suporte',
            );
        }

        if (findOneInfluencer && !findOneAdvertiser) {
            const encodingPassword = checkIfUnencryptedPasswordIsValid(
                findOneInfluencer.password,
                dto.password,
            );

            if (!encodingPassword) {
                throw new UnauthorizedException('Senha inválida');
            }
            const id = findOneInfluencer._id;
            const type = findOneInfluencer.type;
            const state = findOneInfluencer.state;
            const level_subscriber = findOneInfluencer.level_subscriber;
            const email = findOneInfluencer.email;
            const access = jwt.sign(
                { id, type, state, level_subscriber, email },
                config.JWT.SECRET,
            );
            return { jwt_access: access };
        }

        if (findOneAdvertiser && !findOneInfluencer) {
            const encodingPassword = checkIfUnencryptedPasswordIsValid(
                findOneAdvertiser.password,
                dto.password,
            );

            if (!encodingPassword) {
                throw new UnauthorizedException('Senha inválida');
            }
            const id = findOneAdvertiser._id;
            const type = findOneAdvertiser.type;
            const state = findOneAdvertiser.state;
            const level_subscriber = findOneAdvertiser.level_subscriber;
            const email = findOneAdvertiser.email;
            const access = jwt.sign(
                { id, type, state, level_subscriber, email },
                config.JWT.SECRET,
            );
            return { jwt_access: access };
        }
    }
}
