import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

//Este import v4 es para generar un id unico para cada tarea ( se instalo la dependecia -> npm i uuid -> npm i @types/uuid -D)
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';



@Injectable()
export class TasksService {

// Simula nuestra base de datos
    private tasks: Task[] = [
        {
           id: '1',
            title: 'First task',
            description: 'some task',
            status: TaskStatus.OPEN,
        },
    ];


getAllTasks(){
 return this.tasks;
}


createTask(title: string, description: string){

    const task = {
        id: v4(),
        title,
        description,
        status: TaskStatus.PENDING,
    }
    this.tasks.push(task);
    return task;
}


getTaskById(id: string): Task{
    return this.tasks.find(task => task.id === id)
}


updateTask(id: string, updatedFields: UpdateTaskDto): Task{
const task = this.getTaskById(id);
const newTask = Object.assign(task, updatedFields);
this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task));
return newTask;
}



deleteTask(id: string){
   this.tasks = this.tasks.filter(task => task.id !== id)
}

}