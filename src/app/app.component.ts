import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1>Hola Caracola</h1>
    <p>Saludos</p>
  `,
  styles: ["h1 { font-weight: normal;}", "p {color: purple;}"]
})
export class AppComponent {
  title = "app";
}
