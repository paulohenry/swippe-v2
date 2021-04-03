import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';

export class InfluencerSubjectsDto {
    @IsMongoId()
    @ApiProperty({
        required: true,
        example: '6067b66f4a2752bdb32e2bac',
    })
    @IsOptional()
    _id: string;

    @IsString()
    @ApiProperty({
        required: true,
        example: 'Sou influencer de Alimentação saudavel',
    })
    description: string;

    @IsMongoId()
    @ApiProperty({ required: true, example: '6067b66f4a2752bdb32e2bac' })
    subject: string;

    @IsNumber()
    @ApiProperty({ required: true, example: 0.2 })
    subject_value1: number;

    @IsMongoId()
    @ApiProperty({ required: false, example: '6067b66f4a2752bdb32e2bac' })
    @IsOptional()
    subject2: string;

    @IsNumber()
    @ApiProperty({ required: false, example: 0.2 })
    @IsOptional()
    subject_value2: number;

    @IsMongoId()
    @IsOptional()
    @ApiProperty({ required: false, example: '6067b66f4a2752bdb32e2bac' })
    subject3: string;

    @IsNumber()
    @ApiProperty({ required: false, example: 0.2 })
    @IsOptional()
    subject_value3: number;

    @IsMongoId()
    @IsOptional()
    @ApiProperty({ required: false, example: '6067b66f4a2752bdb32e2bac' })
    subject4: string;

    @IsNumber()
    @ApiProperty({ required: false, example: 0.2 })
    @IsOptional()
    subject_value4: number;

    @IsMongoId()
    @IsOptional()
    @ApiProperty({ required: false, example: '6067b66f4a2752bdb32e2bac' })
    subject5: string;

    @IsNumber()
    @ApiProperty({ required: false, example: 0.2 })
    @IsOptional()
    subject_value5: number;
}
