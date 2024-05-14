// Директива import импортирует функциональность модуля angular/core,
// предоставляя доступ к функции декоратора @Component.
import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

// Функция-декоратор @Component ассоциирует метаданные с классом компонента AppComponent.
// Декоратор @Component позволяет идентифицировать класс AppComponent как компонент.
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {
  movieTitle: string = '';
  movie: Movie | undefined;
  errorMessage: string | undefined;

  constructor(private http: HttpClient) {}

  search() {
    if (this.movieTitle.trim() !== '') {
      this.http.get<any>(`http://www.omdbapi.com/?apikey=7f827ad8&t=${this.movieTitle}`)
        .subscribe(data => {
          if (data.Response === "True") {
            this.movie = data;
            this.errorMessage = undefined;
          } else {
            this.errorMessage = 'Фільм не знайдено';
            this.movie = undefined;
          }
        }, error => {
          this.errorMessage = 'Помилка запиту до сервера';
          this.movie = undefined;
        });
    } else {
      this.errorMessage = 'Введіть назву фільму';
      this.movie = undefined;
    }
  }
}
