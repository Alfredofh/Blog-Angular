import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InfoService, Post } from '../info.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  posts: Post[];

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

    this.infoService.getAllPosts()
      .then(posts => {
        this.posts = posts;
      })
      .catch(error => console.log(error)
      )
  }

  async onSubmit() {
    console.log(this.formulario.value);
    await this.infoService.addReceta(this.formulario.value);
    this.formulario.reset();
  }
}


