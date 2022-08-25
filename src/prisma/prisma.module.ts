import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // make it globallly accessible without imports
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
