import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be at least 2 characters'),
    size: yup.string(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    chicken: yup.boolean(),
    cheese: yup.boolean(),
    pineapple: yup.boolean(),
    mushroom: yup.boolean(),
    sauce: yup.string(),
    special: yup.string(),
    glutenfree: yup.string(),
})

export default schema
