import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  name: string = 'puskar'
  shouldBeTrue = false
  message = 'Default message. Nothing here'
  isLoggedIn = false
  students: Array<string> = ["John", "Mary"]

  constructor(private router: Router) {}

 onButtonClick() {
  this.message = 'Message has been changed'
  this.isLoggedIn = !this.isLoggedIn
 }

 ngOnInit(): void {
   
 }

}
