import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn} from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";
import { Question } from "./Question";

@Entity()
export class Question_Votes {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   vote_value: number;

   @ManyToOne(type => Question, question => question.users)
   @JoinColumn({name: "question_id"})
   questions: Question

   @ManyToOne(type => Answer, answer => answer.questions)
   @JoinColumn({name: "user_id"})
   users: User
   
}