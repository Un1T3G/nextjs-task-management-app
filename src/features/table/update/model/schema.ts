import { array, object, string } from 'yup'

export const createTableFormSchema = object().shape({
  title: string().required().min(5, 'Min length is 5'),
  columns: array().of(
    object().shape({
      title: string().required().min(3, 'Min length is 3'),
    })
  ),
})
