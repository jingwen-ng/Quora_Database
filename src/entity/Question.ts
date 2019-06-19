import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn} from "typeorm";
import { Answer } from "./Answer";
import { User } from "./User";

@Entity()
export class Question {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   description: string;

//    @Column()
//    upvote_count: number;

//    @Column()
//    downvote_count: number;

   @OneToMany(type => Answer, answer => answer.questions)
   @JoinColumn({name: "question_id"})
   answers: Answer

//    @ManyToOne(type => User, user => user.answers)
//    users: User[]

   @ManyToOne(type => User, user => user.questions)
   @JoinColumn({name: "user_id"})
   users: User
   
}