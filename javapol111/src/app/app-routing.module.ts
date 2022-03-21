import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path:'item1', component: Item1Component },
  {path:'item2', component: Item2Component },
  {path:'item3', component: Item3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
