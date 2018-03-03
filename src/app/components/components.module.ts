import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IndexComponent } from './index.component';
import { SlideComponent } from './slide/slide.component';
import { NavComponent } from './nav/nav.component';
import { ItemsComponent } from './nav/items/items.component';

import { BparallaxComponent } from './bparallax/bparallax.component';
import { TodoComponent } from './todo/todo.component';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
// services
import { TodoService } from '../services/todo.service';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [
    IndexComponent,
    SlideComponent,
    NavComponent,
    ItemsComponent,
    BparallaxComponent,
    TodoComponent
  ],
  exports: [
    CommonModule,
    SlideComponent,
    NavComponent,
    ItemsComponent,
    IndexComponent
  ],
  providers: [TodoService]
})
export class ComponentsModule {}
