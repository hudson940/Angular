import { Component, OnInit } from "@angular/core";
import { CvService } from "../../services/cv.service";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"]
})
export class IntroComponent implements OnInit {
  private cvData: Array<any>;
  private profesions: Array<any>;
  private IamA: string;
  private counterIam: number;
  private lang: string = "es";
  private title: string;
  private Iam: string;
  private name: string;
  constructor(private cv: CvService) {}

  ngOnInit() {
    this.profesions = this.cv.getProfesions()[this.lang];
    this.IamA = this.profesions[this.counterIam++];
    this.profesions = this.cv.getProfesions()[this.lang];
    this.title = this.cv.getTitle()[this.lang];
    this.Iam = this.cv.getIam()[this.lang];
    this.name = "Anderson";
    setInterval(() => {
      this.counterIam < this.profesions.length
        ? (this.IamA = this.profesions[this.counterIam++])
        : (this.counterIam = 0);
    }, 2000);
  }
  chageLang() {
    this.lang === "es" ? (this.lang = "en") : (this.lang = "es");
  }
}
