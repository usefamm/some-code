
import { Schema, model, Document } from 'mongoose';

export interface IOrder extends Document {
    user: Schema.Types.ObjectId;  // Reference to the User
    product: string;               // Example field for the product
    quantity: number;              // Example field for the quantity
}

// Create a Mongoose schema
const OrderSchema = new Schema<IOrder>({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
});

// 5b-Index on user field for optimization
OrderSchema.index({ user: 1 });

const Order = model<IOrder>('Order', OrderSchema);

export default Order;
