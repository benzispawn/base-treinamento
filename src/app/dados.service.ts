import {ChangeDetectorRef, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, pipe} from "rxjs";
import {FormGroup} from "@angular/forms";
import {startWith, tap, scan} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  public dados: Array<string>;
  public _dados: BehaviorSubject<Array<string>>;
  public dados$: Observable<Array<string>>;

  constructor(
  ) {
    this.dados = ['elfo', 'maluquinho'];
    this._dados = new BehaviorSubject<Array<string>>(this.dados);
    this.dados$ = this._dados.asObservable();
    this.dados$.subscribe(val => {
      this.dados = val;
    });
  }

  public adicionaDado(nome: string): void {
    const idx = this._acharIdx(nome);
    if (idx == -1)
      this.dados.push(nome)
      this._dados.next(this.dados);
  }

  private _acharIdx(nome: string): number {
    return this.dados.findIndex(x => x == nome);
  }

  public editaDado(nome: string, novo: string): void {
    let idx = this._acharIdx(nome);

    if (idx !== -1) {
      if (nome.length > 0)
        this.dados[idx] = novo;
      else
        this.dados.splice(idx + 1, idx + 2);

      this._dados.next(this.dados);
    }

  }

}
