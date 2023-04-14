import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Permission from 'App/Models/Permission'

export default class extends BaseSeeder {
  public async run() {
    Permission.create({
      name: 'list user',
    })
    Permission.create({
      name: 'view user',
    })
    Permission.create({
      name: 'create user',
    })
    Permission.create({
      name: 'update user',
    })
    Permission.create({
      name: 'delete user',
    })
  }
}
