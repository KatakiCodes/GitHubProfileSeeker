import { ChangeDetectorRef, Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { UserCard } from "../../components/user-card/user-card";
import { GitHubService } from '../../services/git-hub-service';
import { User } from '../../Models/User';
import { NgxSpinner, NgxSpinnerService, NgxSpinnerComponent } from "ngx-spinner";



@Component({
  selector: 'app-home',
  imports: [Header, UserCard, NgxSpinnerComponent],

  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  userResult?:User
  messageResult:string = '';
  constructor(
    private gitHubService: GitHubService,
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService)
    {
    }

  getUser(content: string){
    this.spinner.show();
    let getUser:User = this.getFromcheckInLocalStorage(content)

    if(getUser)
      this.userResult = getUser;
    else{
      this.gitHubService.getUser(content).subscribe((result) => {
        if(result.data)
          this.setInLocalStorage(result.data);
        
          this.userResult = result.data;
          this.messageResult = result.errorMessage;
          this.spinner.hide();
          this.cdr.detectChanges();
      });
    }
  }
  getFromcheckInLocalStorage(content:string) : User{
    const stored = sessionStorage.getItem(content);
    return JSON.parse(stored) as User;
  }
  setInLocalStorage(user:User){
      sessionStorage.setItem(user.name, JSON.stringify(user));
  }
}
