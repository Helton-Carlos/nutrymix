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

export interface IColumn {
  name: string
  cpf: string
  dieta: string
  peso: string
}

export interface ITable {
  row: string[]
  column: IColumn[]
}

export interface IUser {
  name: string,
  email?: string,
  age: number | undefined,
  size: number | undefined,
  phone: number | undefined,
  height: number | undefined,
  pressure: number| undefined,
}