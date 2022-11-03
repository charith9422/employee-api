import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB_CONNECTION } from './config/app.properties';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_DB_CONNECTION, { dbName: 'employees' }),
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
