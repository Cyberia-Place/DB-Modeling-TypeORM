import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  BaseEntity,
  JoinTable,
} from "typeorm";

// import {Planet} from "./Planet"
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  planet_id?: number;

  @Column()
  character_id?: number;

  // @ManyToMany(() => Planet)
  // @JoinTable()
  // planets: Planet[];
}
