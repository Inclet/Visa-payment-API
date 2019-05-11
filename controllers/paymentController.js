import Schema from '../helpers/payment-schema';
class Payment {
    static async makePayment(req, res){
        const { cardNumber, holderName, expireAt, securityCode } = req.body;
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

        
    }
}

export default Payment;