var ticker = prompt("Enter Ticker", "AAPL");

if (ticker != null & ticker.length > 0) {
    window.open("http://openinsider.com/screener?s=" + ticker + "&o=&pl=&ph=&ll=&lh=&fd=0&fdr=&td=0&tdr=&fdlyl=&fdlyh=&daysago=&xp=1&xs=1&vl=&vh=&ocl=&och=&sic1=-1&sicl=100&sich=9999&grp=0&nfl=&nfh=&nil=&nih=&nol=&noh=&v2l=&v2h=&oc2l=&oc2h=&sortcol=0&cnt=100&page=1#results");
    window.open("https://www.sec.gov/edgar/search/#/dateRange=all&category=form-cat1&entityName=%24"+ ticker);
    window.open("https://finviz.com/quote.ashx?t=" + ticker); //also good to find tickers
    window.open("https://www.google.com/search?hl=sv&q=moodys rating "+ ticker);
    window.open("https://www.google.com/search?q=" + ticker +"+investor+relations+press+release&sxsrf=ALeKk02JKP7Tm_ZSVI08bgZcNHb1bHWcrQ:1612027941969&ei=JZgVYPTTOtG_gQbfmbiQDQ&iflsig=AINFCbYAAAAAYBWmNrrXXsBskX2mIpCufOiVXmA_-8WE");
    window.open("https://finbox.com/" + ticker);
} 
else {
  window.confirm("Invalid ticker.");
}