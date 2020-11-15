import { Injectable } from '@angular/core';

export enum Categorias {
  carnes,
  pescados,
  postres,
  verduras
}


export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  arrPost: Post[];
  categorias: Post[];

  constructor() {
    this.arrPost = [];
    this.categorias = [];
  }

  addReceta(pPost): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPost.push(pPost);
      console.log(this.arrPost);

      resolve(this.arrPost)
    });
  }



  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost);
      console.log(this.arrPost);

    })
  }

  getPostByCategory(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const listaFiltrada = this.arrPost.filter(post => {
        return post.categoria === pCategoria
      });
      resolve(listaFiltrada);
    });
  }
}
