import { browser } from '@wdio/globals';
import {createRequire} from 'module';
const require = createRequire (import.meta.url);
const config =  require("../config/environment/" + process.env.NODE_ENV + "config.json");
console.log("\n *** ENV to be tested in: " +process.env.NODE_ENV +"\n");

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    openMyPage () 
    
    {
        console.log("Opening URL")
        return  browser.url(config.applicationurlsit);
    }
}
