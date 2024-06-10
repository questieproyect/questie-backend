import { MigrationInterface, QueryRunner } from "typeorm";

export class DeletePholimorfismInProducts1715216336551 implements MigrationInterface {
    name = 'DeletePholimorfismInProducts1715216336551'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "polymorphicEntityId"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "polymorphicEntityType"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "polymorphicEntityType" character varying`);
        await queryRunner.query(`ALTER TABLE "products" ADD "polymorphicEntityId" uuid`);
    }

}
