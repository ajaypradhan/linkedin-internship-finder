const link =
  "https://www.linkedin.com/jobs/view/2564123511/?eBP=CwEAAAF5yRmS6o_TFGnpbaDvlko28RdKZNv0ySqo_1zs_grzFMCBulZQBa-lcgzDvCTgsPzxagHFYvOgvsqnezzdApCWYRPiwrc_UsQlnlhyPemL30imtsUpC_m9EQDZsu_CGEy2ZQ2hA6cad8PD8w3EfuVWeETJXnV_YJvSp15JqGreHHrT_mxwDRg6MnzOXx3Yv9JyaN0IOrQgd0GRgJ9sM3atHo_lIundVP2syin8hhbcKnyxBmFvRHuTEHT7j4RGjj-B_gk392J6pSg1BiYrTy42zeivDDIQwV_lTBf_pA1SUqpr7cHOn7efCMMXkJ5KTJFabzsuet0J0tppRmjxsiSo13D-ZFPeZ5IaEd_LzgDfz3RnfVk75CQ4S34wO6w&recommendedFlavor=ACTIVELY_HIRING_COMPANY&refId=gN6xGeUdZCIO76cUo5TrVA%3D%3D&trackingId=wLReMo1QO6FoH1mvT1dwkg%3D%3D&trk=flagship3_search_srp_jobs";

const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");

request(link, function (error, response, data) {
    getInfo(data);
})

function getInfo(html) {
    let myDocument = cheerio.load(html);
    let imgLink = myDocument('img.lazy-image.ember-view.EntityPhoto-square-3.mb3');
    console.log(imgLink);
}

// request( link , cb );
// function cb(error , response , data){
//     console.log("got the data !!!");
//     console.log(data);
//     fs.writeFileSync("./match.html" , data);
//     // getHighestWicketTaker(data);
// }
