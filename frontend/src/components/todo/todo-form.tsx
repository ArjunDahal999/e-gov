
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import
{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { todoFormSchema } from "@/schema/todo/todo-schema"
import { PlusIcon } from "lucide-react"
import { LoadingSpinner } from "../ui/spinner"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addTodoTask } from "@/services"
import { TODO_QUERY_KEY } from "@/constants"

const TodoForm = () =>
{
    const queryClient = useQueryClient()

    const form = useForm<z.infer<typeof todoFormSchema>>({
        resolver: zodResolver(todoFormSchema),
        defaultValues: {
            task: "",
            title: ""
        },
    })

    const useAddTodo = useMutation({
        mutationFn: addTodoTask,
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY })
        ,
    })
    function onSubmit(values: z.infer<typeof todoFormSchema>)
    {
        useAddTodo.mutate({ ...values })
    }

    return (
        < Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" flex gap-x-2">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="task"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Task" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={useAddTodo.isPending} variant={"outline"} type="submit">
                    {useAddTodo.isPending ? <LoadingSpinner /> : <PlusIcon />}
                </Button>
            </form>
        </Form >
    )
}

export default TodoForm