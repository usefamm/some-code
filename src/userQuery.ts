import User from "./models/User";

// 2 - Function to get users with populated profiles
export const getUsersWithProfile = async () => {
  try {
    const users = await User.find().populate("profile").exec();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
