import { Injectable } from '@angular/core';

@Injectable()
export class LoginAuthenticatorProvider {

  constructor() {
  }

  login(email: string, password: string) {
    // currently just simulating login, in actual app here we had proper check from backend service
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  }

}
