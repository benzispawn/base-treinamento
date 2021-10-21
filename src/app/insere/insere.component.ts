import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {pipe} from "rxjs";
import {scan, startWith, tap, filter, map} from "rxjs/operators";
import {DadosService} from "../dados.service";

@Component({
  selector: 'app-insere',
  templateUrl: './insere.component.html',
  styleUrls: ['./insere.component.css']
})
export class InsereComponent implements OnInit {
  public nome = new FormControl('');

  constructor(
    public _dataService: DadosService
  ) { }

  ngOnInit(): void {
  }

  public adiciona() {
    this._dataService.adicionaDado(this.nome.value);
    this.nome.setValue('');
  }

}
