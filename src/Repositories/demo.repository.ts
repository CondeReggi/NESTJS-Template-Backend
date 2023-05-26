import { DemoEntity } from 'src/Entities/DemoEntity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(DemoEntity)
export class DemoRepository extends Repository<DemoEntity> {
  // Tus métodos personalizados aquí
}
