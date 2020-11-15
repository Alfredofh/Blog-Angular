import { Component, OnInit } from '@angular/core';
import { InfoService, Post } from '../info.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.infoService.getAllPosts()
      .then(posts => {
        this.posts = posts;
      })
      .catch(error => console.log(error)
      )
  }

  async onChange($event) {
    if ($event.target.value === 'selecciona') {
      this.posts = await this.infoService.getAllPosts();
    } else {
      this.posts = await this.infoService.getPostByCategory($event.target.value);
    }
  }

}
