import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: '',
    apellido: 'Garcia',
    email: 'pablocatuto@gmail.com',
    pais: 'PRY'
  };
  paises: { nombre: any; codigo: any; }[] = [];
  constructor(private paisesService: PaisService) { }

  ngOnInit(): void {
    this.paisesService.getPaises()
        .subscribe(arg => {
          this.paises = arg;
          this.paises.unshift({
            codigo: '',
            nombre: '[Seleccione Pais]'
          });
          
          console.log(this.paises);
        });
  }

  guardar(heroForm: NgForm){
    // this.forms.

    if (heroForm.invalid){
      Object.values(heroForm.controls).forEach(control => {
        // console.log(control);
        control.markAsTouched();
      });
      return;
    }
    console.log('Form enviado');
    console.log(heroForm.value);
  }

}
