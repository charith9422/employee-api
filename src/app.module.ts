import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
//import { MONGO_DB_CONNECTION } from './config/app.properties';
import { EmployeesModule } from './employees/employees.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION, {
      dbName: process.env.DB_NAME,
    }),
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
