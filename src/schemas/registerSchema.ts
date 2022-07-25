import Joi from "joi";


const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().min(5).required(),
    passwordConfirmation: Joi.ref('password')
})

export default registerSchema;