
import { $ } from '@wdio/globals';
import Page from './page.js';
import {createRequire} from 'module';
const require = createRequire (import.meta.url);
const config =require("../config/environment/" + process.env.NODE_ENV + "config.json");


class applicationLogin extends Page

{

    get homePage()  

    {
        return $("//div[contains(text(),'Good Finds, Guides and Articles')]");
    }

    get login()  

    {
        return $("//a[contains(text(),' Signup / Login')]");

    }

    get loginemailID()
    {
        return $("//input[@data-qa ='login-email']");
    }

    get loginPassword()
    {
        return $("//input[@data-qa ='login-password']");

    }

    get loginButton()
    {

        return $("//button[@data-qa ='login-button']")


    }

    get logOutbutton()
    {

        return $("//i[@class='fa fa-lock']")
    }

   
 async loginApplication(Username,Password)  
 {
    await this.login.isDisplayed();
    console.log("Login button is displayed")
    await this.login.click()
    await browser.pause(3000)
    await this.loginemailID.setValue(config.userID)
    await this.loginPassword.setValue(config.password);
    await this.loginButton.click();
    await console.log("Login Successfull");
  
 } 

 async logOut()

    {

        await this.logOutbutton.click();
        console.log("Logout Done")
    }

    async open()
    {
        return super.openMyPage();
    }
    


} 

export default new applicationLogin();
