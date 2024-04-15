import Joi from "joi";

const objectSchema=Joi.object({
    title:Joi.string().required(),
    question:Joi.string().required(),
    exampleip:Joi.array(),
    exampleop:Joi.array().items(Joi.string()).min(1),
});

const contestSchema=Joi.object({
    url:Joi.string().required(),
    name:Joi.string().required(),
    questions:Joi.array().min(1).items(objectSchema),
    start:Joi.date(),
    end:Joi.date().greater(Joi.ref('start')),
    owner:Joi.string(),
});

export const validate_contest=(contest)=>{
    return contestSchema.validate(contest);
}

const question_schema = Joi.object({
    questions: Joi.array().items(objectSchema).min(1),
});
