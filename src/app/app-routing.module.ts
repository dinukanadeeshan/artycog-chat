import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatContainerComponent } from './chat-container/chat-container.component';

const routes: Routes = [
  { path: '', component: ChatContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
