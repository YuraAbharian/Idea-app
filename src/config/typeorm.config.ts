import { TypeOrmModuleOptions } from '@nestjs/typeorm'; 

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'ideas',
  synchronize: true,
  logging: true,
  // entities: [IdeaEntity],
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};
