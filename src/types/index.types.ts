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


export interface ISignIn {
  email: string,
  password: string
}

export interface ISignUp {
  name: string,
  email: string,
  password: string,
  confirmPassword: string
}