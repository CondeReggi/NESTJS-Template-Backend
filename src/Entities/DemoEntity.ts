import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK_DemoEntity', ['id'], { unique: true })
@Entity('DemoEntity', { schema: 'dbo' })
export class DemoEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'Id' })
  id: number;

  @Column('nchar', { name: 'Field1', nullable: true, length: 10 })
  field1: string | null;

  @Column('nchar', { name: 'Field2', nullable: true, length: 10 })
  field2: string | null;

  @Column('nchar', { name: 'Field3', nullable: true, length: 10 })
  field3: string | null;
}
