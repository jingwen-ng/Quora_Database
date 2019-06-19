import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560930829531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "answer__votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "answer_id" int, "user_id" int, CONSTRAINT "PK_1ae1dd595a3594c4381ec4db1e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question__votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, CONSTRAINT "PK_77ecb1e1e8fe44211feb7513d94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "answer__votes" ADD CONSTRAINT "FK_eb6c9c7140e87579af4ecb50d48" FOREIGN KEY ("answer_id") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer__votes" ADD CONSTRAINT "FK_02f4dd6d34627e8ba676baee10a" FOREIGN KEY ("user_id") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answer__votes" DROP CONSTRAINT "FK_02f4dd6d34627e8ba676baee10a"`);
        await queryRunner.query(`ALTER TABLE "answer__votes" DROP CONSTRAINT "FK_eb6c9c7140e87579af4ecb50d48"`);
        await queryRunner.query(`DROP TABLE "question__votes"`);
        await queryRunner.query(`DROP TABLE "answer__votes"`);
    }

}
