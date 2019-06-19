import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560858069009 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "answersId" int`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "user_id" int`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_5e1cdc5dd3b58a82d9e0a8b198c" FOREIGN KEY ("answersId") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_add8ab72aec4ce5eb87fdc2740d" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_add8ab72aec4ce5eb87fdc2740d"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_5e1cdc5dd3b58a82d9e0a8b198c"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "answersId"`);
    }

}
