import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-form',
  templateUrl: './footer-form.component.html',
  styleUrls: ['./footer-form.component.sass'],
  interpolation: ['{{','}}']
})
export class FooterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
