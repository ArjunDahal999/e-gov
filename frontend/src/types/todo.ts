

export interface IAddTodoTask 
{
    task: string;
    title: string;
}

export interface ITodoTask extends IAddTodoTask
{
    createdAt: string;
    _id: string;
}
