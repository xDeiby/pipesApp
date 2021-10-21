import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { SortComponent } from './sales/pages/sort/sort.component';
import { NoCommonComponent } from './sales/pages/no-common/no-common.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full',
  },

  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'sort',
    component: SortComponent,
  },
  { path: 'no_common', component: NoCommonComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
