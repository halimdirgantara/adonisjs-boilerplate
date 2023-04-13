import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Permission from './Permission'
import User from './User'

export default class PermissionUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Permission)
  public permissions: HasMany<typeof Permission>

  @hasMany(() => User)
  public users: HasMany<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
