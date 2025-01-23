import { FIELDS } from '@src/db/const-fields';
import { TABLE_NAMES } from '@src/db/const-tables';
import { FILE } from 'dns';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.user)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    ...FIELDS.TEXT_ROW,
    name: 'login',
  })
  login: string;

  @Column({
    ...FIELDS.TEXT_ROW,
    name: 'salt',
  })
  salt: string;

  @Column({
    ...FIELDS.TEXT_ROW,
    name: 'password',
  })
  password: string;

  @Column({ ...FIELDS.TEXT_ROW, name: 'username' })
  username: string;

  @Column({
    ...FIELDS.TEXT_ROW,
    name: 'jwt_first',
  })
  jw;
}
