import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: any[];

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

}
