import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { Question } from "./Question";
import { Answer } from "./Answer";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Question, question => question.users)
    questions: Question[]

    // @ManyToOne(type => Answer, answer => answer.questions)
    // answers: Answer[] //answerid

}
