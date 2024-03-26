import TodoContainer from "@/components/todo/todo-container"
import TodoForm from "@/components/todo/todo-form"
import { useTodo } from "@/hooks"
import { useAuthStore } from "@/store/store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const HomePage = () =>
{
    const { data: todoData, isLoading } = useTodo()
    const navigate = useNavigate()
    const authStore = useAuthStore().userData


    useEffect(() =>
    {
        if (!authStore)
        {
            navigate('/login')
        }
    }, [])

    console.log(todoData)
    return (
        <>
            <main className=" min-h-screen flex justify-center flex-col items-center">
                {isLoading && <h1>...</h1>}
                <TodoForm />
                <div className=" todoContainer w-[450px] h-[300px]   ">
                    {todoData && todoData.map((i) =>
                    (
                        <TodoContainer data={i} />
                    )
                    )}
                </div>

            </main>
        </>
    )
}

export default HomePage