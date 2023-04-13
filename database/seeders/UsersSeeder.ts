import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Hash from '@ioc:Adonis/Core/Hash'
import Role from 'App/Models/Role'
import User from 'App/Models/User'
import RoleUser from 'App/Models/RoleUser'

export default class extends BaseSeeder {
  public async run() {
    const superAdminRole = await Role.create({
      name: 'Super Admin',
    })

    const superAdmin = await User.create({
      name: 'Super Admin Man',
      email: 'superadmin@gmail.com',
      password: await Hash.make('password'),
    })

    await RoleUser.create({
      userId: superAdmin.id,
      roleId: superAdminRole.id,
    })
  }
}
