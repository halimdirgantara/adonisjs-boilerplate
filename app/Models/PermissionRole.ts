import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Permission from './Permission'
import Role from './Role'

export default class PermissionRole extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>

  @belongsTo(() => Permission)
  public permissions: BelongsTo<typeof Permission>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
