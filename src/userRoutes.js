import { Router } from "express";
import { userLogin } from "./userController.js";

const userRouter = new Router();

userRouter.post('/signin', userLogin);

export default userRouter