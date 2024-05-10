import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASnapListComponent } from "./a-snap-list/a-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleASnapComponent } from './single-a-snap/single-a-snap.component';

const routes: Routes = [
  { path:'asnaps/:id', component:SingleASnapComponent },
  { path:'asnaps', component: ASnapListComponent },
  { path:'', component: LandingPageComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule {}