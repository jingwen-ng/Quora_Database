import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560859323814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_5e1cdc5dd3b58a82d9e0a8b198c"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_f1b67d4da59103d99b697747d3a"`);
        await queryRunner.query(`EXEC sp_rename "question.usersId", "user_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "answersId"`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_82c53e1db067ff3d6ef17dfd5c4" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_82c53e1db067ff3d6ef17dfd5c4"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "answersId" int`);
        await queryRunner.query(`EXEC sp_rename "question.user_id", "usersId"`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_f1b67d4da59103d99b697747d3a" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_5e1cdc5dd3b58a82d9e0a8b198c" FOREIGN KEY ("answersId") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
