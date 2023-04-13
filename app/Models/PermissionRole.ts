import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Permission from './Permission'
import Role from './Role'

export default class PermissionRole extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Permission)
  public permissions: HasMany<typeof Permission>

  @hasMany(() => Role)
  public roles: HasMany<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
