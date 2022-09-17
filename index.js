const axios = require('axios');
const cheerio = require('cheerio');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



axios.get('https://www.realmadrid.com/en/football/schedule').then(res => {
    const d = res.data;
    // console.log(d);
    const dom = new JSDOM(d);
   
    const team1 = (dom.window.document.querySelector('.teams .local').textContent);
    const team2 = (dom.window.document.querySelector('.teams .visitor').textContent);
    // const time = (dom.window.document.querySelector('.info_date .hour .confirmada').textContent);
    // const date = (dom.window.document.querySelector('.info_date .day').textContent);
   

    console.log("Teams : ", team1, " ", team2);
    // console.log("Time & Date : ", time, " ", day);



});

