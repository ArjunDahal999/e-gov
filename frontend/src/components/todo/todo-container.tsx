
import { ITodoTask } from '@/types'


const TodoContainer = ({ data }: { data: ITodoTask }) =>
{
    return (
        <div className=" w-full px-6 py-3 border-slate-300/10 border-2">
            <h1 className=' text-2xl font-bold'>{data.title}</h1>
            <h1>{data.task}</h1>
        </div>
    )
}

export default TodoContainer