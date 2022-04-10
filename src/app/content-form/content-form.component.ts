import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.sass'],
  interpolation: ['{{','}}']
})
export class ContentFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logo:string = "assets/images/account_logo.png"
  video1:string = "assets/images/video1.png"
  video2:string ="assets/images/video2.png"
  video3:string ="assets/images/video3.png"
  video4:string ="assets/images/video4.png"
  video5:string ="assets/images/video5.png"
  video6:string ="assets/images/video6.png"
  video7:string ="assets/images/video7.png"
  video8:string ="assets/images/video8.png"
  video9:string ="assets/images/video9.png"
  video10:string ="assets/images/video10.png"
}
