import { Request, Response } from "express";
import { GetDockerImage } from "../repositories/docker.repositories";

export const handelGetDockerImage = async (req: Request, res: Response) => {
  const result = await GetDockerImage();

  res.status(200).json(result);
};
