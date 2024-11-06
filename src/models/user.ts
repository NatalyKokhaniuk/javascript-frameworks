export interface CreateUserRequest {
  name: string
  email: string
  password: string
  avatar: string
  role: string
}

export interface User {
  id: number
  role: string
  name: string
  email: string
  password: string
  avatar: string
}
