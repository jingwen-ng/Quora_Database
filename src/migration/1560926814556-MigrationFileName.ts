import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560926814556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "downvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "upvote_count"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "downvote_count"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "upvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD "downvote_count" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD "upvote_count" int NOT NULL`);
    }

}
