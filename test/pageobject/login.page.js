import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get homePagebutton()
    
    {
        return $("//a[contains(text(),'Home')]")

    }

    
    
}

export default new LoginPage();
