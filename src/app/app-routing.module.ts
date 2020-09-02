import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatcomComponent } from './components/chatcom/chatcom.component';


const routes: Routes = [
  { path: '', component: ChatcomComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
