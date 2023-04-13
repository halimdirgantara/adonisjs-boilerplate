import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import PermissionRole from './PermissionRole'
import PermissionUser from './PermissionUser'

export default class Permission extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => PermissionUser)
  public permissionUser: HasMany<typeof PermissionUser>

  @hasMany(() => PermissionRole)
  public permissionRole: HasMany<typeof PermissionRole>
}
