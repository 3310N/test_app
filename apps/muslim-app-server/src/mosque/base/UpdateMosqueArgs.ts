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
import { MosqueWhereUniqueInput } from "./MosqueWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MosqueUpdateInput } from "./MosqueUpdateInput";

@ArgsType()
class UpdateMosqueArgs {
  @ApiProperty({
    required: true,
    type: () => MosqueWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MosqueWhereUniqueInput)
  @Field(() => MosqueWhereUniqueInput, { nullable: false })
  where!: MosqueWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MosqueUpdateInput,
  })
  @ValidateNested()
  @Type(() => MosqueUpdateInput)
  @Field(() => MosqueUpdateInput, { nullable: false })
  data!: MosqueUpdateInput;
}

export { UpdateMosqueArgs as UpdateMosqueArgs };
