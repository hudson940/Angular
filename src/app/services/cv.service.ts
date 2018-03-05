import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
@Injectable()
export class CvService {
  cv: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) {}

  getCv() {
    this.cv = this.firebasedb.list("cv");
    return this.cv;
  }
  getProfesions() {
    return {
      es: ["Economista", "Administrador de Empresas", "Desarrolador Web"],
      en: ["Economist", "Bussines Management", "Web Developer"]
    };
  }
  getTitle() {
    return {
      es: "Mucho gusto, soy",
      en: "Hello, I am"
    };
  }
  getIam() {
    return {
      es: "Soy un",
      en: "I am a"
    };
  }
}
