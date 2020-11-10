import { Injectable } from '@angular/core';
import { Post } from './Post.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [];
  }
}
