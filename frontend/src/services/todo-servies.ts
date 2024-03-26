

import { IAddTodoTask, ITodoTask } from "@/types";
import axios from "axios";
//@ts-ignore
const API_URL = import.meta.env.VITE_API_URL

export const getTodoTask = async (): Promise<ITodoTask[]> =>
{
    try
    {
        const { data } = await axios.get(`${API_URL}/get-all-todo`, { withCredentials: true });
        return (data.data)
    } catch (error: any)
    {
        return error?.response?.data;
    }
};
export const addTodoTask = async (addData: IAddTodoTask) =>
{
    try
    {
        const { data } = await axios.post(`${API_URL}/add-todo`, addData, { withCredentials: true });
        console.log(data)
    } catch (error: any)
    {
        return error?.response?.data;
    }
};