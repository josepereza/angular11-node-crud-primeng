import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../services/usuarios.service'
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  display: boolean = false;
  display2: boolean = false;

  nombre={
    id:0,
    firstname: "",
    lastname: "",
  }
    showDialog() {
        this.display = true;
    }

    editUser(product:any) {
      this.nombre=product;
      this.display2 = true;

  }
usuarios:[]=[];
  constructor(public us:UsuariosService) { }

  ngOnInit(): void {
   this.listar();
     
   
  }
  update(){
    this.us.updateUser(this.nombre).subscribe();
    this.display2 = false;

  }
   deleteUser(user){
    this.nombre=user;
    console.log(this.nombre)
    this.us.deleteUser(this.nombre).subscribe(res=>{
      this.listar();
    });
  }
salir(){
  this.display=false;
  this.listar();
}
listar(){
  this.us.getAll().subscribe((data:any)=>{
    this.usuarios=data;
})
}
}
