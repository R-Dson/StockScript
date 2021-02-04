var ticker = prompt("Enter Ticker", "AAPL");

if (ticker != null & ticker.length > 0) {
    window.open("https://www.tradingview.com/symbols/" + ticker);
    window.open("https://seekingalpha.com/symbol/" + ticker);
    window.open("https://www.gurufocus.com/stock/" + ticker + "/summary");
    window.open("https://www.dataroma.com/m/stock.php?sym=" + ticker);
    window.open("https://www.di.se/bors/aktier/" + ticker);
    window.open("https://whalewisdom.com/stock/" + ticker);
    window.open("https://www.marketwatch.com/investing/stock/" + ticker + "/analystestimates?mod=mw_quote_tab#cx-banner");
    window.open("https://www.morningstar.com/search?query=" + ticker);
} 
else {
  window.confirm("Invalid ticker.");
}