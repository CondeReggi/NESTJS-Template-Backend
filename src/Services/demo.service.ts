import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DemoEntity } from 'src/Entities/DemoEntity';
import { Repository } from 'typeorm';

@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(DemoEntity)
    private demoRepository: Repository<DemoEntity>,
  ) {}

  async getAll(): Promise<DemoEntity[]> {
    return await this.demoRepository.find();
  }
}
