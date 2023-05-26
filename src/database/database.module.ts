// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DemoEntity } from '../Entities/DemoEntity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mssql',
//       host: 'localhost',
//       port: 1433,
//       username: 'sa',
//       password: '<YourStrong@LucasConde!123>',
//       database: 'AppDataBase',
//       entities: [DemoEntity],
//       synchronize: false,
//       options: {
//         encrypt: false,
//       },
//     }),
//   ],
// })
// export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoEntity } from '../Entities/DemoEntity';
import * as dotenv from 'dotenv';

dotenv.config({ path: `environments/.env.${process.env.NODE_ENV}` });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [DemoEntity],
      synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
      options: {
        encrypt: process.env.TYPEORM_OPTIONS_ENCRYPT === 'true',
      },
    }),
  ],
})
export class DatabaseModule {}
