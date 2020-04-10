import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Initial Value';
  userName = '';
  resetUserName = true;
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];
  displayParagraph = 'block';
  paragraphLog = [];
  paragraphCounter = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name of server is : ' + this.serverName;
  }

  onUpdateServerName(event){
    this.serverName = event.target.value;
  }

  onUpdateUserName(event){
    if (event.target.value.length > 0){
      this.resetUserName = false;
    }
  }

  clearUserName(){
    this.userName = '';
    this.resetUserName = true;
  }

  toggleParagraphDisplay(){
    this.paragraphLog.push(new Date());
    if (this.displayParagraph === 'block'){
      this.displayParagraph = 'none';
    } else {
      this.displayParagraph = 'block';
    }
  }

  getDisplayProperty(){
    return this.displayParagraph;
  }

  getColor(paragraph){
    if (paragraph > 3){
      return 'blue';
    } else {
      return 'transparent';
    }
  }
}
