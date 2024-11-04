import { Component } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Author } from '../model/book'; 

@Component({
  selector: 'app-admin', 
  templateUrl: './admin.component.html', 
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
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

