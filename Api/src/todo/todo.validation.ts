import joi from "@hapi/joi";
import { Request, Response, NextFunction } from "express";

export const validateTODO = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const packet = {
    ...req.body,
  };

  const schema = joi.object({
    text: joi.string().required(),
  });

  try {
    const result = await schema.validateAsync(packet);
    if (result) {
      next();
    }
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return res.status(400).json({
      errorType: "VALIDATION_ERROR",
      message: error.details[0].message,
    });
  }
};
