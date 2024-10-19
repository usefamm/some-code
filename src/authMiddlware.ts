import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  exp: any;
  id: string;
}

export const authMiddleware = (
  req: any,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    res.status(401).send("Access Denied. No token provided.");
    return;
  }

  try {
    const decoded = jwt.verify(token, "secretKey") as UserPayload;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};

// 1b - Handle tokens that are about to expire
export const handleTokenExpiration = (
  req: any,
  res: Response,
  next: NextFunction,
): void => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    res.status(401).send("Access Denied. No token provided.");
    return;
  }

  try {
    const decoded = jwt.verify(token, "secretKey", {
      ignoreExpiration: true,
    }) as UserPayload;
    if (Date.now() >= decoded.exp! * 1000) {
      const newToken = jwt.sign({ id: decoded.id }, "secretKey", {
        expiresIn: "1h",
      });
      res.setHeader("Authorization", `Bearer ${newToken}`);
    }
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("Invalid token.");
  }
};
