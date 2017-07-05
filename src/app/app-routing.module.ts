import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';
import { ListInfoComponent } from './component/list-info/list-info.component';

import { OrderComponent } from './component/order/order.component';
import { CollectionComponent } from './component/collection/collection.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { Tab1Component } from './component/tabs/tab1/tab1.component';
import { Tab2Component } from './component/tabs/tab2/tab2.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'listinfo/:name/:code', component: ListInfoComponent },
  { path: 'order', component: OrderComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'tabs', component: TabsComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
