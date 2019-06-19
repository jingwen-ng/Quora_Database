import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { Question } from "./Question";
import { User } from "./User";
import { Answer } from "./Answer";

@Entity()
export class Answer_Votes {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   vote_value: number;

   // @Column()
   // upvote_count: number;

   // @Column()
   // downvote_count: number;

   @ManyToOne(type => Answer, asnwer => asnwer.users)
   @JoinColumn({name: "answer_id"})
   answer: Answer

   @ManyToOne(type => Answer, answer => answer.questions)
   @JoinColumn({name: "user_id"})
   users: User

}