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

  // @ManyToMany(() => Planet)
  // @JoinTable()
  // planets: Planet[];
}
