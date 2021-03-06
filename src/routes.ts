import { Router } from "express";
import AuthController from "./app/controllers/AuthController";
import UserController from "./app/controllers/UserController";

const routes = Router(); // routes

routes.post("/users", UserController.store);
routes.post("/auth", AuthController.authenticate);
routes.get("/lista", UserController.get);
export default routes;
