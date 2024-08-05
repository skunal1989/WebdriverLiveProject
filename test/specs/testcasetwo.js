
import ApplicationLogin from '../pageobject/application.Login.page.js';
import ProductSelction from '../pageobject/productSelection.js';


describe('My Login application', async () => {



    it('should launch the application', async () =>
        
    {
        console.log ("Executing first test case")
        await ApplicationLogin.open();
        await browser.pause(3000);
        await browser.maximizeWindow();
        await console.log("Application has been launched")

        
    }

)


it('should be able to enter details and login to the application', async () =>
        
    {
        console.log ("Executing second test case")
        await ApplicationLogin.loginApplication()
        await browser.pause(3000);
       

        
    }

    
    
)

it('should be able to logout', async () =>
        
    {
        console.log ("Executing third test case")
        
        await ApplicationLogin.logOut();
        await browser.pause(3000);
        console.log("Logout succesfull")
        await browser.pause(3000);
       

        
    }
)


    it('should be able to navigate to thw women clothing and display', async () =>
        
        {
            console.log ("Executing third test case")
            await ProductSelction.viewProductDress();
            await browser.pause(3000);
            await ProductSelction.getProductName();
            await browser.pause(3000);
           
    
            
        }
    )

}
)