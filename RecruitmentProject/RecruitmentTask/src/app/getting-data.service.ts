import { Injectable } from '@angular/core';
import * as TextData from '../assets/text-options.json';

@Injectable({
  providedIn: 'root'
})
export class GettingDataService {

  getText(id: number): string{
    return TextData["exampleTexts"][id];
  }
}
