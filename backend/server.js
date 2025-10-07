import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import CartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import adminRouter from './routes/adminRoute.js';
import contactRouter from './routes/contactRoute.js';
import 'dotenv/config.js';

const app = express();
const PORT = 8012;

// ✅ Always put this before routes and JSON parsing
app.use(
  cors({
    origin: 'https://admin.driinkoxygen.com', // your admin frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// ✅ Handle preflight requests explicitly
app.options('*', cors());

// ✅ Then parse JSON and URL-encoded
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));

// ✅ Connect DB
connectDB();

// ✅ Routes
app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/cart', CartRouter);
app.use('/api/order', orderRouter);
app.use('/api/admin', adminRouter);
app.use('/api/contact', contactRouter);

app.get('/', (req, res) => {
  res.send('API working');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
