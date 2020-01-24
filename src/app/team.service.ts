import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient) { }

  getTeamDetails():Observable<TeamDetails[]>{
    return this.http.get<TeamDetails[]>("./assets/teams.json");
  }
  getAllPlayers():Observable<PlayerDetails[]>{
    return this.http.get<PlayerDetails[]>("./assets/all_players.json");
  }
}
