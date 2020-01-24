import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/team.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {


  teamName:string;
  teamPlayers:PlayerDetails[]=[];
  constructor(private route:ActivatedRoute,private teamService:TeamService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
         this.teamName =  params.get("teamName");
         this.playerDetails();
    })
  }

  playerDetails(){
      this.teamService.getAllPlayers().subscribe(res=>{
            let players = res;
            this.teamPlayers = players.filter(p=>{
              if(p.label == "SRH" && this.teamName=="SH"){
                  return true;
              }else{
                return p.label == this.teamName
              }
    
            });
        })
  }

 

}
