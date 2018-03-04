import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedNewServer = false;
  serverCreationStatus = "No server created!";
  serverName = 'TestServer';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowedNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created, Name is ' + this.serverName;
  }

  updateServerStatus(e){
    this.serverName = e.target.value;
  }

}
