import express from 'express'
import Payment from '../controllers/paymentController';

const router = express.Router();

//@middleware
import {validatePayment} from "../helpers/payment";

router.post('/VISA/payment', validatePayment, Payment.makePayment);

export default router;