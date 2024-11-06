export interface AuthenticatedUser {
  id: number
  role: string
  name: string
  email: string
  password: string
  avatar: string
  access_token: string
  refresh_token: string
}
