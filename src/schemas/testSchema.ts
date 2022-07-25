import Joi from "joi";

const testSchema = Joi.object({
    name: Joi.string().min(3).required(),
    pdfUrl: Joi.string().uri().required(),
    category_id:Joi.string().min(1).required(),
    teacher_discipline:Joi.string().min(1).required()
})

export default testSchema;