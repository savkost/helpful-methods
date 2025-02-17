import { Component } from '@angular/core';
import {IsoCode} from 'sk-tel-input';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  public IsoCode = IsoCode;


  constructor() {}

}
