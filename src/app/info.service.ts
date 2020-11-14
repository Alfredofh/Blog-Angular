import { Injectable } from '@angular/core';



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

  constructor() {
    this.arrPost = [];
  }

  addReceta(pPost): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPost.push(pPost);
      console.log(this.arrPost);

      resolve(this.arrPost)
    });

  }
}
