import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  options: any = {
    'sort_by':'name',
    'sort_by_order':'desc',
    'gender_filter':'Male'
  };
  error: boolean = false;
  characterData: any;

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.characterService.getCharacters(this.options).subscribe(data=>{
      
      if(data.success){
        this.characterData = data.data;
      }else{
        this.error = true;
      }
    });
  }
}
