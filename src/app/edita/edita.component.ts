import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {DadosService} from "../dados.service";
import {Observable, pipe, of, scan, tap} from "rxjs";
import {startWith} from "rxjs/operators";

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent {
  public formGroup: FormGroup;
  public elemForm: any;

  constructor(
    public _dadosService: DadosService,
  ) {
    let obj = {};
    for (let e of this._dadosService.dados) {
      console.log(e)
      Object.assign(obj, {[e]: new FormControl(e)});
    }
    this.formGroup = new FormGroup(obj);
    this.elemForm = of(Object.values(this.formGroup.controls));
    for (let el of this._dadosService.dados) {
      const elemento = this.formGroup.get(el);
      if (elemento) {

        elemento.valueChanges
          .pipe(
            startWith({prev: null, curr: elemento?.value}),
            scan((prev: any, curr) => ({prev: prev.curr, curr: curr})),
          )
          .subscribe(val => {
            console.log(`val`, val)
            this._dadosService.editaDado(val.prev, val.curr);
          })
      }

    }

  }

}
