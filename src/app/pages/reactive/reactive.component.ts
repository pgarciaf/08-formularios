import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  theForm: FormGroup;
  constructor(private fb: FormBuilder ) {
    this.crearFormulario();
    this.cargarData();
   }

  ngOnInit(): void {
    
  }

  getCargas(){
    return this.theForm.get('cargas') as FormArray;
  }

  addCarga(){
    this.getCargas().push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
  }

  deleteCarga(i){
    this.getCargas().removeAt(i);
  }

  crearFormulario(){
    this.theForm = this.fb.group({
      nombre: ['Pablote', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      direccion: this.fb.group({
        ciudad: ['', [Validators.required, Validators.minLength(5)]],
        comuna: ['', [Validators.required, Validators.minLength(5)]]
      }),
      cargas: this.fb.array([])
    });
  }

  cargarData(){
    this.theForm.reset({
        nombre: 'Pablote',
        apellido: 'Garcia',
        email: 'pablo@mail.com',
        direccion: {
          ciudad: 'Santiago',
          comuna: ''
        }
    });
  }

  guardar(){
    if (!this.theForm.valid){
      return;
    }

    console.log(this.theForm);
      
  }

}
