const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const dgc = document.getElementById("dogecoin");

let settings = {
  async: "true",
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done((response) => {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  dgc.innerHTML = response.dogecoin.usd;
});
