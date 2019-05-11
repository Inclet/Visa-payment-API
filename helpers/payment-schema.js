import Joi from 'joi';

const Schema = Joi.object().keys({
    holderName: Joi.string().min(3).max(15).required()
})

export default Schema;