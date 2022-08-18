import {Injectable} from "@angular/core";


@Injectable()
export class UserService{
  private _user:any

  getUser(): any {
    return this._user;
  }

  setUser(value: any) {
    this._user = value;
  }
}
