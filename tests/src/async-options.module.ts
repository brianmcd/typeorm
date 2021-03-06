import { Module } from '@nestjs/common';
import { TypeOrmModule } from '../../lib';
import { Photo } from './photo/photo.entity';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [Photo],
        synchronize: true,
        keepConnectionAlive: true,
        retryAttempts: 2,
        retryDelay: 1000,
      }),
    }),
    TypeOrmModule.forRoot({
      name: 'connection_2',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Photo],
      synchronize: true,
      keepConnectionAlive: true,
      retryAttempts: 2,
      retryDelay: 1000,
    }),
    PhotoModule,
  ],
})
export class AsyncOptionsFactoryModule {}
