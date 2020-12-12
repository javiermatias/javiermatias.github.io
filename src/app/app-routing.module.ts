import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { EducationComponent } from './views/education/education.component';
import { WorkComponent } from './views/work/work.component';



const routes: Routes = [
  { path: 'about', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'work', component: WorkComponent },
  {path:'',redirectTo:'work', pathMatch: 'full' },
  { path: '*', component: WorkComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
