import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private infoService: InfoService) {
    this.formulario = new FormGroup({
      titulo: new FormControl,
      texto: new FormControl,
      autor: new FormControl,
      imagen: new FormControl,
      fecha: new FormControl,
      categoria: new FormControl,

    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value);
    await this.infoService.addReceta(this.formulario.value);
  }
}
