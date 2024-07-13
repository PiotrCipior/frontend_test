import { Injectable } from '@angular/core';
import * as TextData from '../assets/text-options.json';

@Injectable({
  providedIn: 'root'
})
export class GettingDataService {
  GetText(id: string): string
  {
    switch(id)
    {
      case 'first': return TextData["exampleTexts"][0];
      case 'second': return TextData["exampleTexts"][1];
      case 'random': return TextData["exampleTexts"][Math.floor(Math.random() * (6 - 2)) + 2];
      default: return "";
    }
  }
}
