import { Component, OnInit } from '@angular/core';
import {Dog} from '../modules/dog.module';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
