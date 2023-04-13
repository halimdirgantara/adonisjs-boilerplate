import { DateTime } from 'luxon'
import { BaseModel, HasOne, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Role from './Role'

export default class RoleUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Role)
  public role: HasOne<typeof Role>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
