import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';

const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'dragdrop', component: DragdropComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
