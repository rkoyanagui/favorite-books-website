import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  editable = false;

  @Input() book!: Book;
  @Input() newBook!: string;
  @Output() remove = new EventEmitter<Book>();

  saveBook(title: string, author: string, language: string) {
    if (!title) return;
    this.editable = false;
    this.book.title = title;
    this.book.author = author;
    this.book.language = language;
  }
}
