import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './screens/landing-page/landing-page.component';
import {RegistrationComponent} from './screens/registration/registration.component';
import {TodoListComponent} from './screens/todo-list/todo-list.component';
import {AuthenticationGuard} from './guards/authentication.guard';
import {TodoKanbanComponent} from './screens/todo-kanban/todo-kanban.component';


const routes: Routes = [
  { path: 'checklist', component: TodoListComponent, canActivate: [AuthenticationGuard] },
  { path: 'kanban', component: TodoKanbanComponent, canActivate: [AuthenticationGuard] },
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegistrationComponent},
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
