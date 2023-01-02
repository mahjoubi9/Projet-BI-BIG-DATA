import {Roles} from './Roles';

export class AppUser {
  id: number;
  username: string;
  password: string;
  actived: boolean;
  confirmedPassword: string;

  constructor() {
    this.username = "";
    this.actived = true;
    this.password = "";
    this.id = 0;
    this.confirmedPassword = "";
  }
}
