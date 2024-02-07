import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {

    constructor (private taskService: TasksService){}

    @Get()
    getAllTasks(){
            return this.taskService.getAllTasks();
        }
    

    @Post()
    createTasks(@Body() newTasks: CreateTaskDto){
       return this.taskService.createTask(newTasks.title, newTasks.description)
    }    


    @Delete(':id')
     deleteTask(@Param('id') id: string){
        this.taskService.deleteTask(id);
     }
    

     @Patch(':id')
     updateTask(@Param('id') id: string, @Body() updateTask: UpdateTaskDto){
        return this.taskService.updateTask(id, updateTask);
     }
    
}
