import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async register({ request, auth }: HttpContextContract) {
    // Validate the request data
    const newUserSchema = schema.create({
      name: schema.string(),
      email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
      phone: schema.string(),
      password: schema.string({}, [rules.minLength(8)]),
    })

    const payload = await request.validate({ schema: newUserSchema })

    // Hash the password
    // const hashedPassword = await Hash.make(payload.password)

    // Create a new user
    const newUser = await User.create({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      password: payload.password,
    })

    // Generate a JWT token for the user
    // const token = await auth.use('api').generate(newUser)

    // return { user: newUser, token }
    return { user: newUser }
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    // const hashedPassword = await Hash.make(password)
    // return hashedPassword
    // Find the user by email
    const user = await User.findBy('email', email)

    // If the user doesn't exist, return an error
    if (!user) {
      return response.status(401).send({ message: 'Invalid login credentials' })
    }

    // Verify the password
    const isPasswordValid = await Hash.verify(user.password, password)

    // If the password is invalid, return an error
    if (!isPasswordValid) {
      return response.status(401).send({ message: 'Invalid login credentials' })
    }

    // Generate a new token for the user
    const token = await auth.use('api').generate(user)

    return response.status(200).send({ user: user, token })
  }
}
