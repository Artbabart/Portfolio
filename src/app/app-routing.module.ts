import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BackendComponent } from './backend/backend.component';
import { DemoComponent } from './demo/demo.component';
import { FrontendComponent } from './frontend/frontend.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "backend", component: BackendComponent},
  {path: "demo", component: DemoComponent},
  {path: "frontend", component: FrontendComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
