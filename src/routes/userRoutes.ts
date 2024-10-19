
import { Request, Response, Router } from "express";
import User from "../models/User";

const router = Router();

router.get("/user/:id", async (req: Request, res: any): Promise<void> => {
  try {
    const user = await User.findById(req.params.id);

    // Check if user was found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the user data
    res.json(user);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;

//3b

// import { Request, Response, Router } from 'express';
// import User from './models/User';

// // Custom Error Classes
// class UserNotFoundError extends Error {
//     constructor(message: string) {
//         super(message);
//         this.name = 'UserNotFoundError';
//     }
// }

// // Async handler wrapper to catch errors
// const asyncHandler = (fn: (req: Request, res: Response) => Promise<void>) =>
//     (req: Request, res: Response): void => {
//         fn(req, res).catch((error) => {
//             if (error instanceof UserNotFoundError) {
//                 return res.status(404).json({ message: error.message });
//             }
//             console.error(error); // Log unexpected errors
//             res.status(500).json({ message: 'Internal Server Error' });
//         });
//     };

// // Service layer for user retrieval
// const getUserById = async (id: string) => {
//     const user = await User.findById(id);
//     if (!user) throw new UserNotFoundError('User not found');
//     return user;
// };

// const router = Router();

// // User retrieval route
// router.get('/user/:id', asyncHandler(async (req: Request, res: Response): Promise<void> => {
//     const user = await getUserById(req.params.id);
//     res.json(user);
// }));

// export default router;
