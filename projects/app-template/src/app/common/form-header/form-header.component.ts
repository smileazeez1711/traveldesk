import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'es-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.css']
})
export class FormHeaderComponent implements OnInit {

  @Input() caption: string;
  @Input() iconClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
