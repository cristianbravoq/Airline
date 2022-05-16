import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  lenguages = [
    {  language: 'English',  abbreviation: 'EN'  },
    {  language: 'Русский',  abbreviation: 'RU'  },
    {  language: 'Deutsch',  abbreviation: 'DE'  },
    {  language: 'Français', abbreviation: 'FR'  }
  ]

  lenguageValue = new FormControl('');

  constructor() {}

  ngOnInit(): void {
  }

}
