import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2BRPipesModule } from 'ng2-brpipes';
import { ToastModule } from 'primeng/toast';

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    ToastModule
  ],
  exports: [Ng2BRPipesModule, ToastModule],

  declarations: [
  
  ]
})
export class CoreModule { }
