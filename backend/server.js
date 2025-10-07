import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config.js';
import CartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import adminRouter from './routes/adminRoute.js';
import contactRouter from './routes/contactRoute.js';

//app config
const app = express();
const PORT = 8009;

app.use(express.json());

// Add CORS middleware FIRST - before other middlewares
app.use(
  cors({
    origin: [
      'https://admin.driinkoxygen.com',
      'https://driinkoxygen.com',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:5174',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token'],
  })
);

// Handle preflight requests
app.options('*', cors());

//middlewares
app.use(express.json({ limit: '100mb' })); // Increased limit
app.use(express.urlencoded({ limit: '100mb', extended: true })); // Increased limit

//db connection
connectDB();

//api endpoints
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', CartRouter);
app.use('/api/order', orderRouter);
app.use('/api/admin', adminRouter);
app.use('/api/contact', contactRouter);
app.get('/', (req, res) => {
  res.send('API working ');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
