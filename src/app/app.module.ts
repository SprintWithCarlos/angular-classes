import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CustomersModule } from "./customers/customers.module";
//Hemos importado un módulo compartido y lo hemos incluido en el decorador en la sección "imports". De lo contrario no tendremos disponibles las funcionalidades del módulo en la aplicación
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CustomersModule, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
