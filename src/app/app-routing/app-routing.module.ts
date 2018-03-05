import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SelectivePreloadingStrategy } from "./selective-preloading-strategy";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { AppComponent } from "../app.component";
import { CvComponent } from "../cv/cv.component";
import { IndexComponent } from "../components/index.component";
const appRoutes: Routes = [
  {
    path: "home",
    component: IndexComponent,
    outlet: "popup"
  },
  {
    path: "cv",
    component: CvComponent
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategy]
})
export class AppRoutingModule {}
