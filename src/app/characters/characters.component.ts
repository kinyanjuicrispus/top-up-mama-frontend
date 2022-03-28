import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  options: any = {
    'sort_by':'',
    'sort_by_order':'',
    'gender_filter':''
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

  setFilterOptions(gender: string){
    this.options.gender_filter = gender;
    this.getCharacters();
  }

  setSortOptions(sort_by: string, sort_by_order: string){
    console.log(sort_by);
    console.log(sort_by_order);
    this.options.sort_by = sort_by;
    this.options.sort_by = sort_by_order;
    this.getCharacters();
  }

}
