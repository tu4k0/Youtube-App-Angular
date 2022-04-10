import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-form',
  templateUrl: 'menu-form.component.html',
  styleUrls: ['menu-form.component.sass'],
  interpolation: ['{{','}}']
})
export class MenuFormComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  textColor = ''
  disabled = false
  title = 'YouTube navbar'
  logo: string = 'assets\\images\\logo-removebg-preview.png'
  account_logo: string = 'assets\\images\\account_logo.png'
}

