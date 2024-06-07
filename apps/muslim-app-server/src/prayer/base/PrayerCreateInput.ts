/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumPrayerPrayerName } from "./EnumPrayerPrayerName";
import { IsEnum, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EnumPrayerStatus } from "./EnumPrayerStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class PrayerCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumPrayerPrayerName,
  })
  @IsEnum(EnumPrayerPrayerName)
  @IsOptional()
  @Field(() => EnumPrayerPrayerName, {
    nullable: true,
  })
  prayerName?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  prayerTime?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumPrayerStatus,
  })
  @IsEnum(EnumPrayerStatus)
  @IsOptional()
  @Field(() => EnumPrayerStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { PrayerCreateInput as PrayerCreateInput };
