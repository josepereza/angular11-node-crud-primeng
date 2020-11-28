import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../services/usuarios.service'
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {
  usuarios:[]=[];
  first = 0;

    rows = 10;
  constructor(public us:UsuariosService) { }

  ngOnInit(): void {
    this.us.getAll().subscribe((data:any)=>{
      this.usuarios=data;
      console.log(this.usuarios)
    })
   }
   next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.usuarios ? this.first === (this.usuarios.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.usuarios ? this.first === 0 : true;
}

}
