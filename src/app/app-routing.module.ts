import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=> import("./auth/auth.module").then(x=>x.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=> import("./home/home.module").then(x=>x.HomeModule)
  },
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
