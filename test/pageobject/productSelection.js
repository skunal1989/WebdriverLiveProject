import {$} from '@wdio/globals';
import {createRequire} from "module";
import Page from './page.js';
const require = createRequire (import.meta.url);
const config =require("../config/environment/" + process.env.NODE_ENV + "config.json");





class ProductSetup extends Page

    {



        get homePageReturn()  

    {
        return $("//a/i[@class='fa fa-home']");
    }


        get categoryWomen()
        {
            return $("//a[@href ='#Women']");
        }

        get categoryMen()
        {
            return $("//a[@href ='#Men']");
        }

        get categoryKid()
        {
            return $("//a[@href ='#Kid']");
        }

        get womenDress()

        {
          return $("//div[@id ='Women']//li/a[contains(text(),'Dress')]")
        }

        get womenTop()
        {
            return $("//div[@id ='Women']//li/a[contains(text(),'Tops')]")

        }

        get productPrice()
        {

            return $$("//div[@class='single-products']/div/h2")

        }

        get productName()
        {
            return $$("//div[@class='single-products']/div/p")
        }

        get viewProductTag()

        {
            return $$("//div[@class='choose']/ul/li/a/i")
        }

        async viewProductDress()

        {
            console.log("Viewing Product and adding to cart")
            await this.homePageReturn.click();
            await browser.pause(3000);
            await this.categoryWomen.click();
            await browser.pause(3000);
            await this.womenDress.click();
            await browser.pause(3000);


        }

        async getProductName()

        {
            console.log(" Print the product name and price ")
            let productvalues = await this.productName;
            let productPrice =await this.productPrice;
            console.log(productvalues.length);
            for (let i=0;i<productvalues.length;i++)



                {
                    var prodname =await productvalues[i].getHTML(false)
                    console.log("The product name is " + prodname);
                    var prodprice =await productPrice[i].getHTML(false)
                    console.log("The product price is " + prodprice);

                }



        }

    }

export default  new ProductSetup();