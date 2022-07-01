import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  pokemons: any[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
      this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=500`)
        .subscribe((response: any) => {
          response.results.forEach((result: any) => {
            this.http.get(`https://pokeapi.co/api/v2/pokemon/${result.name}`) //wazne `` zamiast ''
              .subscribe((uniqResponse: any) => {
                this.pokemons.push(uniqResponse);
                this.pokemons.sort((a, b) => (a.id < b.id ? -1 : 1));
              });
          })
        });
  }
}
