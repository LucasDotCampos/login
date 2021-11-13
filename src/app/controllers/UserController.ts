import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../models/User";

class UserController {
  async store(request: Request, response: Response) {
    console.log("chegou no users");
    const repository = getRepository(User);

    const { email, password } = request.body;

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      return response.sendStatus(409);
    }

    const user = repository.create({ email, password });
    await repository.save(user);

    return response.json(user);
  }

  async get(request: Request, response: Response) {
    const repository = getRepository(User);
    const index = await repository.find({
      select: ["email"],
    });

    return response.json(index);
  }
}

export default new UserController();
