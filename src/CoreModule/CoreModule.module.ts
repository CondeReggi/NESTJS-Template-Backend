import { Module } from '@nestjs/common';
import { DemoModule } from '../Modules/demo.module';

@Module({
  imports: [DemoModule],
  exports: [DemoModule],
})
export class CoreModule {}
