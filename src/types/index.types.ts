export interface IInput {
  label?: string
  placeholder: string
  type: string
  modelValue: string | number
  error?: boolean
}

export interface ICards {
  client: string
  type: string
  hour: string
}

export interface INotify {
  title: string
  text: string
}
