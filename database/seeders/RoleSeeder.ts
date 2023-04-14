import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    Role.create({
      name: 'Admin SKPD',
    })
    Role.create({
      name: 'User',
    })
    Role.create({
      name: 'Admin SKPD',
    })
  }
}
