import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../resources/comp/blog/blog.component';
import { ContactComponent } from '../resources/comp/contact/contact.component';
import { ResourcesComponent } from '../resources/resources.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { NoCompFoundComponent } from './no-comp-found/no-comp-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index.html', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  //
  { path: '**', component: NoCompFoundComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
