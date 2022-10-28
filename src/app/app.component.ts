import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'favorite-books-website';

  languageFilter: 'all' | 'en' | 'pt' | 'fr' = 'all';

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
      title: 'Star Maker',
      author: 'Stapledon, Olaf',
      language: 'en',
    },
  ];

  get books() {
    if (this.languageFilter === 'all') {
      return this.allBooks;
    }
    return this.allBooks.filter((book) => book.language === this.languageFilter);
  }
}
