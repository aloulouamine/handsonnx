import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { ComponentsModule } from '@handsonnx/components';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
