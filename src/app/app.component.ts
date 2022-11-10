import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'favorite-books-website';

  allLanguages = ['en', 'fr', 'pt'];
  allLanguageFilters = ['todas', 'en', 'fr', 'pt'];
  selectedLanguageFilter = 'todas';

  languageFilter: 'todas' | 'en' | 'pt' | 'fr' = 'todas';

  allBooks = [
    {
      title: 'Moby-Dick',
      author: 'Melville, Herman',
      language: 'en',
    },
    {
      title: 'Paradise Lost',
      author: 'Milton, John',
      language: 'en',
    },
    {
      title: 'Le Crime de Sylvestre Bonnard',
      author: 'France, Anatole',
      language: 'fr',
    },
    {
      title: 'Memorias posthumas de Brás Cubas',
      author: 'de Assis, Machado',
      language: 'pt',
    },
  ];

  get languages() {
    return this.allLanguages;
  }

  get languageFilters() {
    return this.allLanguageFilters;
  }

  get books() {
    if (this.languageFilter === 'todas') {
      return this.allBooks;
    }
    return this.allBooks.filter(
      (book) => book.language === this.languageFilter
    );
  }

  addBook(title: string, author: string, language: string) {
    this.allBooks.unshift({
      title,
      author,
      language,
    });
  }

  remove(book: Book) {
    this.allBooks.splice(this.allBooks.indexOf(book), 1);
  }
}
