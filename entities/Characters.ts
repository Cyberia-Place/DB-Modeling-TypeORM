import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinTable,
  ManyToMany,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Characters extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  birth_year: string;

  @Column()
  gender: string;

  @Column()
  height: number;

  @Column()
  skin_color: string;

  @Column()
  eye_color: string;

  @ManyToMany(() => User)
  @JoinTable()
  character: User[];
}
