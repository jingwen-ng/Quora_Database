import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560505021324 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" nvarchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "age" int NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" nvarchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" nvarchar(255) NOT NULL`);
    }

}
