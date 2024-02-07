export enum TaskStatus{
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
    PENDING = 'PENDING'
}


export class Task{
    id: string
    title: string;
    description: string;
    status: TaskStatus;
}


