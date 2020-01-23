import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {


  teamName:string;
  constructor(private route:ActivatedRoute) {

   }

  ngOnInit() {
      this.route.paramMap.subscribe(params=>{
          this.teamName = params.get("teamName")
      })
    // this.teamName = this.route.snapshot.paramMap.get("teamName");
     console.log(this.teamName);
  }

}
