var btc = document.getElementById("bitcoin")
var eth = document.getElementById("ethereum")
var doge = document.getElementById("dogecoin")

var settings = {
    "async" : true,
    "scrossdomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2CEthereum%2CDogecoin&vs_currencies=usd",
    "method": "Get",
    "headers":{}
}
$.ajax(settings).don(function (response){
  btc . innerHTML = response.bitcoin.usd;
  eth . innerHTML = response.ethereum.usd;
  doge . innerHTML = response.dogecoin.usd;
});


