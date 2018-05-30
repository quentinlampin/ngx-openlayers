import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClusterComponent } from './cluster/cluster.component';
import { BasicComponent } from './basic/basic.component';
import { RasterComponent } from './raster/raster.component';

const routes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'cluster', component: ClusterComponent },
  { path: 'raster', component: RasterComponent },
  { path: '**', redirectTo: '/basic' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
