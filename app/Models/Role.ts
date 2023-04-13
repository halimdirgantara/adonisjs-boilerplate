import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import PermissionRole from './PermissionRole'
import RoleUser from './RoleUser'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => RoleUser)
  public roleUser: HasOne<typeof RoleUser>

  @hasMany(() => PermissionRole)
  public permissionRole: HasMany<typeof PermissionRole>
}
