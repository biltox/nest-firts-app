import { TaskStatus } from "../task.entity";
import{ IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'




export class CreateTaskDto {
  
    @IsString()
    @IsNotEmpty()
    @MinLength(3)  //minimum length of 3 characters
    title: string

    @IsString()
    description: string
}


export class UpdateTaskDto{

    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.IN_PROGRESS, TaskStatus.DONE, TaskStatus.PENDING])
    status?: TaskStatus
}