import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1560931062427 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question__votes" ADD "question_id" int`);
        await queryRunner.query(`ALTER TABLE "question__votes" ADD "user_id" int`);
        await queryRunner.query(`ALTER TABLE "question__votes" ADD CONSTRAINT "FK_5636979765043cb6541fc54f763" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question__votes" ADD CONSTRAINT "FK_fc4dfc6e6ddbe9345c11be5227b" FOREIGN KEY ("user_id") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "question__votes" DROP CONSTRAINT "FK_fc4dfc6e6ddbe9345c11be5227b"`);
        await queryRunner.query(`ALTER TABLE "question__votes" DROP CONSTRAINT "FK_5636979765043cb6541fc54f763"`);
        await queryRunner.query(`ALTER TABLE "question__votes" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "question__votes" DROP COLUMN "question_id"`);
    }

}
