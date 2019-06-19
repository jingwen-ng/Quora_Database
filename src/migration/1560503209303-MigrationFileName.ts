import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560503209303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "answer"`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "description" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "question_id" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "question" ADD "description" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "question_id"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "answer" ADD "answer" nvarchar(255) NOT NULL`);
    }

}
