import { Component } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Author } from '../model/author.model'; 
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  authorId: number | null = null;
  author: Author | null = null;
  message: string | null = null;

  constructor(private booksService: BooksService) {}
  fetchAuthor() {
    if (this.authorId) {
      this.booksService.getAuthor(this.authorId).subscribe({
        next: (data: Author) => {
          this.author = data;
          this.message = null;
        },
        error: () => {
          this.author = null;
          this.message = 'Author not found';
        }
      });
    }
  }
}

