import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from './resources.component';
import { BlogComponent } from './comp/blog/blog.component';
import { ContactComponent } from './comp/contact/contact.component';

@NgModule({
  declarations: [
    ResourcesComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [CommonModule],
  exports: [
    ResourcesComponent,
    BlogComponent,
    ContactComponent
  ],
})
export class ResourcesModule {}
