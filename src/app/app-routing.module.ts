import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesEnum } from './@shared/routes.enum';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: `${RoutesEnum.ABOUT}`  ,
    component: AboutComponent
  },
  { path: `${RoutesEnum.CONTACT}`,
    component : ContactComponent
  },
  { path: `${RoutesEnum.HOME}`,
    component : HomeComponent
  },
  { path: '', redirectTo: `${RoutesEnum.HOME}`,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: `${RoutesEnum.HOME}`,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

