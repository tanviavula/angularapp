import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-iplhome',
  templateUrl: './iplhome.component.html',
  styleUrls: ['./iplhome.component.css']
})
export class IplhomeComponent implements OnInit {

  teamDetails:TeamDetails[];
  constructor(private teamService:TeamService) { }

  ngOnInit() {
      this.teamService.getTeamDetails().subscribe(res=>{
          this.teamDetails = res;
      })
  }

}
