import Schema from '../helpers/payment-schema';
import models from '../models';
const { Financials } = models
class Payment {
    static async makePayment(req, res){
        const { cardNumber, holderName, expireAt, securityCode } = req.body;
        const { amount } = req.params;
        const errors = Schema.validate({holderName});
        if(errors.error)
            return res.status(400).send({
                status: 400,
                message: `${errors.error.details[0].message}`
            })

        const value = expireAt.split('/');
        if(value[0]< 19 || value[1] > 12 || value[0]===0)
            res.status(400).send({
                status:400,
                error: 'this Card has expired'
            })

        const result = await Financials.findRecord(cardNumber);
        if(!result)
          return res.status(401).send({
              status: 401,
              message: 'This card is not registered or not valid. Please contact your provider'
          })
        const { amount: balance } = result.dataValues;

        if(Number(amount) > Number(balance))
            return res.send({
                status:401,
                message: 'You have Insufficient Balance'
            })
        
        const newAmount = Number(balance) - Number(amount);

        const amountUpdate = await Financials.updateAmount({amount: newAmount}, cardNumber)
        return res.status(200).send({
            status:200,
            message: 'Transation was successful'

        })

    }

    static async createUser(req, res){
        const { cardNumber, amount } = req.body;
        const insertCard = await Financials.cardHolder({cardNumber, amount})
        return res.status(201).send({
            status:201,
            message: 'User Created Successfully'
        })
    }
}

export default Payment;