const URL = "https://www.coingecko.com/en/api";

const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");


const getcur = async() => {
  let response = await fetch (URL);
  console.log(response);
  let data = await response.json();
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;

}

getcur();
/*



 const URL ="https://cat-fact.herokuapp.com/facts";
const factPara=document.querySelector("#facts");
const btn=document.querySelector("#btn");


const getFacts= async () => {
  console.log ("getting data....")
  let response = await fetch (URL);
  console.log(response);
let data = await response.json();

factPara.innerText=data[1].text;

};
btn.addEventListener("click",getFacts);

*/