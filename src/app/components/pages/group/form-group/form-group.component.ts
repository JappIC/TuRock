import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

    forma!:FormGroup;

    constructor( private fb:FormBuilder ) {
        // Metodos
        this.crearFormulario();
        this.cargarGrupo();
    }

    ngOnInit(): void {
    }

    // Validacion reactiva
    get nombreNoValido(){
        return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
    }
    get imgNoValido(){
        return this.forma.get('img')?.invalid && this.forma.get('img')?.touched;
    }
    get bioNoValido(){
        return this.forma.get('bio')?.invalid && this.forma.get('bio')?.touched;
    }
    get videoNoValido(){
        return this.forma.get('video')?.invalid && this.forma.get('video')?.touched;
    }
    get wikiNoValido(){
        return this.forma.get('wiki')?.invalid && this.forma.get('wiki')?.touched;
    }
    get aparicionNoValido(){
        return this.forma.get('aparicion')?.invalid && this.forma.get('aparicion')?.touched;
    }

    // Metodo
    crearFormulario(){

        // Expreción regular para validar URL
        let reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"

        // Validación antes de guardar
        this.forma = this.fb.group({
            nombre:     ["", [Validators.required, Validators.minLength(5)]],
            bio:        ["", Validators.required],
            img:        ["", [Validators.required, Validators.pattern(reg)]],
            aparicion:  ["", Validators.required],
            video:      ["", [Validators.required, Validators.pattern(reg)]],
            wiki:       ["", [Validators.required, Validators.pattern(reg)]],
            idx:        ["", ],
        });
    }

    // Cargamos los datos del grupo que queremos editar
    cargarGrupo(){
        // .reset nos permite que nos falte información al rellenar el formulario
        //this.forma.setValue({
        this.forma.reset({
            nombre:     "",
            bio:        "",
            img:        "",
            aparicion:  "",
            video:      "",
            wiki:       "",
            idx:        "",
        });
    }

    guardar(){
        console.log(this.forma);

        //Comprobamos si los campor requeridos están validados
        if (this.forma.invalid) {
            return Object.values( this.forma.controls).forEach( control =>{
                control.markAsTouched();
            })
        }

        // Borra el estado del formulario
        this.forma.reset();
    }
}
