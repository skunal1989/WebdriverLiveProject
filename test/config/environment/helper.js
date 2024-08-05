import { $ } from '@wdio/globals';
import Page from './page.js';
import {createRequire} from 'module';
const require = createRequire (import.meta.url);
const config =require("../config/environment/" + process.env.NODE_ENV + "config.json");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


class HelperPage extends Page


{
    async createCSV_writer(records)

    {

        const headers_CSV =[
            {id:'DressName', title:'DressNameDisplay'},
            {id:'DressPrice', title:'DressPriceDisplay'}

        ]



        const csvWriter = createCsvWriter
        
        ({

            path:'AutoTestData.csv',
            header: headers_CSV,
            append:true


        })

        await csvWriter.writeRecods(records).then(() => {

            console.log('-----Done-----')
        })

    


    }

    async createCsv ()


    {

        let recordDressName ="";
        let recodrDressPrice ="";




    }


}










