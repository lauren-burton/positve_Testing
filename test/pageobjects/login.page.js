import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
  
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

   
    async login (theUsername, somePassword) {
        await this.inputUsername.setValue(theUsername);
        await this.inputPassword.setValue(somePassword);
        await this.btnSubmit.click();
    }

  
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
