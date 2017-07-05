import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
import { OnsenModule, OnsTab} from 'angular2-onsenui';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { OrderComponent } from './component/order/order.component';
import { CollectionComponent } from './component/collection/collection.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { Tab1Component } from './component/tabs/tab1/tab1.component';
import { Tab2Component } from './component/tabs/tab2/tab2.component';

//
import { MyServiceService } from './service/my-service.service';
import { CollDirective } from './directive/coll.directive';
import { ShareComponent } from './share/share/share.component';
import { WCheckboxComponent } from './share/w-checkbox/w-checkbox.component';
import { WRadioComponent } from './share/w-radio/w-radio.component';
import { ListInfoComponent } from './component/list-info/list-info.component';
import { MyPipePipe } from './pipe/my-pipe.pipe';
import { WTextComponent } from './share/w-text/w-text.component';
import { FormatePipe } from './pipe/formate.pipe';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    OnsenModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    OrderComponent,
    CollectionComponent,
    TabsComponent,
    Tab1Component,
    Tab2Component,
    CollDirective,
    ShareComponent,
    WCheckboxComponent,
    WRadioComponent,
    ListInfoComponent,
    MyPipePipe,
    WTextComponent,
    FormatePipe
  ],
  providers: [MyServiceService, OnsTab],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
