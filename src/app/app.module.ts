import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2BRPipesModule } from 'ng2-brpipes';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { MessageService } from 'primeng/api';
import { LogModule } from './log/log.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    Ng2BRPipesModule,

    CoreModule,
    HomeModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    LogModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  exports: [Ng2BRPipesModule]
})
export class AppModule { }
