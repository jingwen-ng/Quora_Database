import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560860413808 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_5e1cdc5dd3b58a82d9e0a8b198c"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "answersId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "answersId" int`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_5e1cdc5dd3b58a82d9e0a8b198c" FOREIGN KEY ("answersId") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
