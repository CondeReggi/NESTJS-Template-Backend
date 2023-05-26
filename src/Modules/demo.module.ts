import { Module } from '@nestjs/common';
import { DemoController } from 'src/Controllers/demo.controller';
import { DemoService } from 'src/Services/demo.service';
import { DemoRepository } from 'src/Repositories/demo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from 'src/Entities/DemoEntity';

@Module({
  imports: [TypeOrmModule.forFeature([DemoEntity])],
  providers: [
    DemoService,
    {
      provide: 'DemoRepository',
      useClass: DemoRepository,
    },
  ],
  controllers: [DemoController],
})
export class DemoModule {}
