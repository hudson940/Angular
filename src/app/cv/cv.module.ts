import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CvComponent } from "./cv.component";
import { IntroComponent } from "./intro/intro.component";
// firebase
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../../environments/environment";
// services
import { CvService } from "../services/cv.service";
import { SidebarComponent } from "./sidebar/sidebar.component";
@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [CvComponent, IntroComponent, SidebarComponent],
  exports: [CvComponent],
  providers: [CvService]
})
export class CvModule {}
