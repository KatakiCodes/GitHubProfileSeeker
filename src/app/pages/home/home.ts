import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { UserCard } from "../../components/user-card/user-card";

@Component({
  selector: 'app-home',
  imports: [Header, UserCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  testeheaderOutput(content: string) {
    console.log(content);
  }
}
