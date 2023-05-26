import { Controller, Get } from '@nestjs/common';
import { DemoService } from '../Services/demo.service';
import { DemoEntity } from 'src/Entities/DemoEntity';

@Controller('demo')
export class DemoController {
  constructor(private demoService: DemoService) {}

  @Get()
  async getAll(): Promise<DemoEntity[]> {
    return await this.demoService.getAll();
  }
}
