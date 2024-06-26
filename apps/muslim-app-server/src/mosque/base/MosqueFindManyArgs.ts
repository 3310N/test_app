/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MosqueWhereInput } from "./MosqueWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MosqueOrderByInput } from "./MosqueOrderByInput";

@ArgsType()
class MosqueFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MosqueWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MosqueWhereInput, { nullable: true })
  @Type(() => MosqueWhereInput)
  where?: MosqueWhereInput;

  @ApiProperty({
    required: false,
    type: [MosqueOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MosqueOrderByInput], { nullable: true })
  @Type(() => MosqueOrderByInput)
  orderBy?: Array<MosqueOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MosqueFindManyArgs as MosqueFindManyArgs };
