<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'repos/:name',
    component: RepositoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent} from './user/user.component';
import { RepositoryComponent} from './repository/repository.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'repo,/:name',
    component: RepositoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 191f76285d3ae20f13849f53cc137e1446a4fb07
