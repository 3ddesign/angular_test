import { NgModule } from '@angular/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import {
  ServerModule,
  ServerTransferStateModule
} from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
