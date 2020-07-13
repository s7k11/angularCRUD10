import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  routeComp(){
    this.router.navigate(['component3'],{relativeTo:this.route})
  }
  routeC(){
    this.router.navigate(['userDashboard'],{relativeTo:this.route})
  }
}
