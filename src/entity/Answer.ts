import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { Question } from "./Question";
import { User } from "./User";

@Entity()
export class Answer {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   description: string;

   // @Column()
   // upvote_count: number;

   // @Column()
   // downvote_count: number;

   @ManyToOne(type => Question, question => question.answers)
   @JoinColumn({name: "question_id"})
   questions: Question

   @ManyToOne(type => Answer, answer => answer.questions)
   @JoinColumn({name: "user_id"})
   users: User

}