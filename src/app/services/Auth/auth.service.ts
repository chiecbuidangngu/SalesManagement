import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  submitSignup(
    firstName: string,
    lastName: string,
    password: string,
    email: string
  ) {
    console.log(
      ' SMS application received: password: ${password}, email: ${email},firstName: ${firstName},lastName: ${lastName}'
    );
  }
  submitLogin(password: string, email: string) {
    console.log(
      ' SMS application received: password: ${password}, email: ${email}'
    );
  }
}
