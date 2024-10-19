
import Order from './models/Order';

// Function to get orders with populated user information
export const getOrdersWithUserInfo = async () => {
    try {
        const orders = await Order.find().populate('user').exec();  // Populate the user field
        return orders;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};
