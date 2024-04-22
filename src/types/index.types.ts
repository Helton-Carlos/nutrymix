export interface IInput {
  label?: string
  placeholder?: string
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
  bgGround?: boolean
}

export interface ITable {
  row: string[]
  column: IUser[]
}

export interface IUser {
  name: string,
  cpf: string,
  email?: string,
  phone: number | undefined,
  age: number | undefined,
  size: number | undefined,
  height: number | undefined,
  pressure: number| undefined,
  diet: string
}