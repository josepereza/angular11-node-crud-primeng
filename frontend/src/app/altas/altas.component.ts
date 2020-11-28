import { Component, ElementRef, OnInit , ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UsuariosService} from '../services/usuarios.service'

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  nombre={
    firstname: "",
    lastname: "",
  }
  @ViewChild('miinput')
  miinput: ElementRef;
  constructor(public us:UsuariosService) { }

  ngOnInit(): void {
  }
misave(){
    
this.us.saveUser(this.nombre).subscribe();
this.nombre={
  firstname: "",
  lastname: "",
}
this.miinput.nativeElement.focus()
}
}
