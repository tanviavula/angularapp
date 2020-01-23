import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teamNames = ["CSK","MI","SH","RR","KKR","RCB","DC","KXIP"]
  team:any;
  constructor(private teamService:TeamService) { }

  ngOnInit() {
  }

  showTeamDetails(teamName:string){
      this.teamService.getTeamDetails().subscribe(res=>{
          let teams = res;
          this.team = teams.filter(ele=>ele.label === teamName)[0];
      })
    
  }


 
}
