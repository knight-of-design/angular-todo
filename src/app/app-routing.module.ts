import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './screens/landing-page/landing-page.component';
import {RegistrationComponent} from './screens/registration/registration.component';
import {TodoListComponent} from './screens/todo-list/todo-list.component';
import {AuthenticationGuard} from './guards/authentication.guard';


const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent, canActivate: [AuthenticationGuard] },
  { path: '', component: LandingPageComponent },
  { path: 'register', component: RegistrationComponent},
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
