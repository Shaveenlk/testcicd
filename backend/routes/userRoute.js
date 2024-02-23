import express, { Router } from "express";
import { createUser, getAll, getOne, userDelete, userUpdate } from "../controller/userController.js";

const route =express.Router();

route.post("/create", createUser);
route.get("/fetch", getAll);
route.get("/fetchone/:id", getOne);
route.put("/updateuser/:id",userUpdate);
route.delete("/deleteuser/:id",userDelete);

export default route;