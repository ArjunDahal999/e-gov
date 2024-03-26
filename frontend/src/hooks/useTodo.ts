
import { TODO_QUERY_KEY } from "@/constants";
import { addTodoTask, getTodoTask } from "@/services";
import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

// const queryClient = useQueryClient()

export const useTodo = () => useQuery({
    queryKey: TODO_QUERY_KEY,
    queryFn: getTodoTask
})

// export const useAddTodo = useMutation({
//     mutationFn: addTodoTask,
//     onSuccess: () =>
//     {
//         queryClient.invalidateQueries({ queryKey: TODO_QUERY_KEY })
//     },
// })