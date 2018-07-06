import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { AuthorsService } from '../services/authorsService.service';
//import { of } from 'rxjs';
//import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {


    //@Input() editMode: boolean = false;
    //@Output() changeEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
