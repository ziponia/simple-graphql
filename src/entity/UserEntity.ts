import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  CreateDateColumn
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  username: string;

  @CreateDateColumn()
  createDate: Date;
}
