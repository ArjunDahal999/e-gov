

import { NextFunction, Request, Response } from "express";
import { TaskModel } from "../../models/userModel/user-model";

export const getAllTodo = async (req: Request, res: Response, next: NextFunction) =>
{
    try
    {
        const { title, task } = req.body;
        const userId = res.locals.user
        const allTodo = await TaskModel.find({ user: userId })
        res.json({ success: true, message: "Task Added", data: allTodo })
    } catch (error)
    {
        next(error);
    }
};
