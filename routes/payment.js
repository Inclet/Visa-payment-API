import express from 'express'
import Payment from '../controllers/paymentController';

const router = express.Router();

//@middleware
import {validatePayment} from "../helpers/payment";

router.post('/VISA/payment/:amount', validatePayment, Payment.makePayment);
router.post('/VISA/register', Payment.createUser)

export default router;