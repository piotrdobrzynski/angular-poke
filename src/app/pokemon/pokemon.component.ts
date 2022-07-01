import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() id: string="";
  @Input() name: string="";
  @Input() image: string="";
  @Input() type: string="";
  constructor(){}
}
