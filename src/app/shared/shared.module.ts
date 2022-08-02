import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './layout-padrao/menu/menu.component';
import { HeaderComponent } from './layout-padrao/header/header.component';
import { FormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { FooterComponent } from './layout-padrao/footer/footer.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import { BrowserModule } from '@angular/platform-browser';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TooltipModule} from 'primeng/tooltip';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {MenuModule} from 'primeng/menu';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    MenuComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule, CommonModule,
    FormsModule,  HttpClientModule,
    MenuModule, AvatarModule,
    AvatarGroupModule, BadgeModule,
    OverlayPanelModule, InputTextModule,
    PanelModule, CardModule, DividerModule,
    ButtonModule, SelectButtonModule,
    CalendarModule, DropdownModule,
    MultiSelectModule, TagModule, TableModule,
    DialogModule, TooltipModule, CurrencyMaskModule,
    TableModule, FileUploadModule


  ],
  exports: [
    HeaderComponent, MenuComponent, FooterComponent,
    InputTextModule, PanelModule, CardModule, DividerModule,
    ButtonModule, SelectButtonModule, CalendarModule,
    DropdownModule, MultiSelectModule, TagModule, TableModule,
    DialogModule, AutoCompleteModule, TooltipModule, CurrencyMaskModule,
    MenuModule, TableModule, FileUploadModule
  ]
})
export class SharedModule { }
