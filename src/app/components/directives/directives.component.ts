import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  students = [
    {
      name: 'A',
      email: 'A@gmail.com',
      major: 'Cs',
      year: 'secondary',
    },
    {
      name: 'B',
      email: 'B@gmail.com',
      major: 'Cs',
      year: 'secondary',
    },
    {
      name: 'C',
      email: 'C@gmail.com',
      major: 'CS',
      year: 'secondary',
    },
    {
      name: 'D',
      email: 'D@gmail.com',
      major: 'CS',
      year: 'secondary',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
