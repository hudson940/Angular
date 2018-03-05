import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CvModule } from "./cv/cv.module";
import { Router } from "@angular/router";
import { AppRoutingModule } from "./app-routing/app-routing.module";
// components
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
// firebase
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";

// services
import { TodoService } from "./services/todo.service";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    CvModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
