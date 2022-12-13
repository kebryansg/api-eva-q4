import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogoModule } from './catalogo/catalogo.module';
import { EstadoModule } from './estados/estado.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [CatalogoModule, EstadoModule, RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
