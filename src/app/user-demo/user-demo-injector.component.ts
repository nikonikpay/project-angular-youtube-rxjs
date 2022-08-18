import {Component, Injector, ReflectiveInjector} from "@angular/core";
import {UserService} from "../services/user.service";


@Component({
  selector: 'user-demo-injector',
  templateUrl: './user-demo-component.html',
  styleUrls:['./user-demo-component.css']

})
export class UserDemoInjectorComponent{

  userName!: string;



  constructor(private userService:UserService) {
    // const injector:any = ReflectiveInjector.resolveAndCreate([UserService])
    // this.userService = injector.get(UserService)


  }
  signIn(): void {
    // when we sign in, set the user
    // this mimics filling out a login form
    this.userService.setUser({
      name: 'Nate Murray'
    });

    // now **read** the user name from the service
    this.userName = this.userService.getUser().name
    console.log('User name is: ', this.userName);
  }


}
