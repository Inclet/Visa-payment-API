import Validator from "./validator";

const validatePayment=(req,res,next)=>{
 const errors={};
 if(Validator.isEmpty(req.body.cardNumber)){
  errors.cardNumber="card number is required.";
 }
 //
 if(!Validator.isLength(req.body.cardNumber,{min:16, max:16})){
   errors.cardNumber="card number must be 16 digits.";
 }
 //@check if is integer
 if(!Validator.isInteger(req.body.cardNumber)){
 errors.cardNumber="card number must be an integer";
 }
 //security code
 if(Validator.isEmpty(req.body.securityCode)){
     errors.securityCode = "Security Code is Required"
 }

 if(!Validator.isLength(req.body.securityCode,{min:3, max:3})){
    errors.securityCode="Security Code must be 3 digits.";
  }


 //@
 if(typeof(errors)==="object" && Object.keys(errors).length!==0){
    return res.status(400).json({errors});
 }
 next();
}

export{
validatePayment
}