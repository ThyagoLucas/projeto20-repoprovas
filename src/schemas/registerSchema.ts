import Joi from "joi";


const registerSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password:Joi.string().min(5).required(),
    passwordConf: Joi.ref('password'),
})

export default registerSchema;