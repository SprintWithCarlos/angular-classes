import { Component, OnInit } from "@angular/core";

//La interfaz me garantiza que los datos cumplen con unos requisitos. En este caso, que el id sea un número y que el nombre sea un string. En el caso de "OrderTotal" es opcional y por eso lleva un signo de interrogación al final.
import { ICustomer } from "../../shared/interfaces";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"]
})
export class CustomersListComponent implements OnInit {
  //Aquí hacemos uso de la interfaz, indicándola como tipo de filteredCustomers y además le asignamos un valor inicial(inicializamos) como un arreglo (array) vacío.
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: "USD";

  constructor() {}

  ngOnInit() {}
}
