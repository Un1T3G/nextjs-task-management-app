import { array, object, string } from 'yup'

export const updateTaskDialogSchema = object().shape({
  title: string().required('Title is required').min(5, 'Min length is 5'),
  description: string()
    .required('Description is required')
    .min(5, 'Min length is 5'),
  todos: array().of(
    object().shape({
      title: string().required('Title is required').min(3, 'Min length is 3'),
    })
  ),
  columnId: string().required('Column is required'),
})
