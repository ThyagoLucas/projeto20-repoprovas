import Joi from "joi";

const testSchema = Joi.object({
    name: Joi.string().min(3).required(),
    pdfUrl: Joi.string().uri().required(),
    categoryId:Joi.string().min(1).required(),
    teacherDiscipline:Joi.string().min(1).required()
})

export default testSchema;