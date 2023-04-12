import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Hash from '@ioc:Adonis/Core/Hash'

export const UserFactory = Factory.define(User, async ({ faker }) => {
  return {
    name: faker.name.firstName() + ' ' + faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number('###########'),
    password: await Hash.make('password'),
  }
}).build()
