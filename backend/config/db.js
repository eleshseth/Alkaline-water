import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://eleshseth:Eleshseth@cluster0.i2z8vu5.mongodb.net/AlkalineWater'
    )
    .then(() => console.log('db connected'));
};
