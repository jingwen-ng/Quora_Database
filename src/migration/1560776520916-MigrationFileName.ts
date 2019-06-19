import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560776520916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" ADD "usersId" int`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_f1b67d4da59103d99b697747d3a" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_f1b67d4da59103d99b697747d3a"`);
        await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "usersId"`);
    }

}
