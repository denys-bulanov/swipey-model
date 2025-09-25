import axios from 'axios'

type SignUpApi = {
  email: string
  password: string
}

type ResetPasswordApi = {
  email: string
}
type OtpApi = {
  email: string
  otp: string
}
type NewPasswordApi = {
  newPassword: string
  token: string
}

export const signUpApi = async ({ email, password }: SignUpApi) => {
  try {
    const { data } = await axios.post(
      'https://ud824.com/api/v1/auth/pre-lander',
      { email, password },
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          'Content-Type': 'application/json',
        },
      },
    )

    return { data }
  } catch (err: any) {
    return { err }
  }
}

export const signInApi = async ({ email, password }: SignUpApi) => {
  try {
    const { data } = await axios.post(
      'https://ud824.com/api/v1/auth/pre-lander/login',
      { email, password },
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          'Content-Type': 'application/json',
        },
      },
    )

    return { data }
  } catch (err: any) {
    return { err }
  }
}

export const resetPasswordApi = async ({ email }: ResetPasswordApi) => {
  try {
    const { data } = await axios.post(
      'https://ud824.com/api/v1/auth/reset-password',
      { email },
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          'Content-Type': 'application/json',
        },
      },
    )

    return { data }
  } catch (err: any) {
    return { err }
  }
}

export const otpApi = async ({ email, otp }: OtpApi) => {
  try {
    const { data } = await axios.post(
      'https://ud824.com/api/v1/auth/verify-reset-password-otp',
      { email, otp: +otp },
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          'Content-Type': 'application/json',
        },
      },
    )

    return { data }
  } catch (err: any) {
    return { err }
  }
}

export const newPasswordApi = async ({ newPassword, token }: NewPasswordApi) => {
  try {
    const { data } = await axios.post(
      'https://ud824.com/api/v1/auth/set-new-password',
      { newPassword },
      {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          'Content-Type': 'application/json',
        },
        params: { token },
      },
    )

    return { data }
  } catch (err: any) {
    return { err }
  }
}
