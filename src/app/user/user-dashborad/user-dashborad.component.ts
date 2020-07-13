import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dashborad',
  templateUrl: './user-dashborad.component.html',
  styleUrls: ['./user-dashborad.component.css']
})
export class UserDashboradComponent implements OnInit {
  username:any;
  password:any;
  constructor(private route:ActivatedRoute) { 
    this.username=route.snapshot.params['username'];
    this.password=route.snapshot.params['password'];
  }

  ngOnInit(): void {
  }

}
