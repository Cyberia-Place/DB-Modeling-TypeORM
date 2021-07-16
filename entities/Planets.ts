import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  BaseEntity,
  JoinTable,
} from "typeorm";
import { User } from "./User";

// import {Planet} from "./Planet"
@Entity()
export class Planets extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  climate: string;

  @Column()
  population: number;

  @Column()
  orbital_period: number;

  @Column()
  rotation_period: number;

  @Column()
  diameter: number;

  @ManyToMany(() => User)
  @JoinTable()
  planet: User[];
}
