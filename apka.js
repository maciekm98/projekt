let userScore =0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board")
const result_div=document.querySelector(".result > p");
const dziecko_div=document.getElementById("dziecko");
const babcia_div=document.getElementById("babcia");
const pies_div=document.getElementById("pies");
const ty_div=document.getElementById("yourchoice");
const bot_div=document.getElementById("botchoice");

function getComputerChoice()
{
	const choices = ['babcia','dziecko','pies'];
	const randomNumer=Math.floor(Math.random() *3);
	return choices [randomNumer];

}
function win(userChoice, computerChoice)
{
	ty_div.innerHTML="Twój wybór to : " +userChoice+ " ";
	bot_div.innerHTML="Bot wybrał : " +computerChoice+ " ";
	userScore++;
	userScore_span.innerHTML=userScore;
	if(computerChoice==['pies'])computerChoice='psa';
	if(computerChoice==['babcia'])computerChoice='babcię';
	if(userChoice==['pies'])userChoice='Pies';
	if(userChoice==['babcia'])userChoice='Babcia';
	if(userChoice==['dziecko'])userChoice='Dziecko';
	result_div.innerHTML=userChoice+" pokonuje "+computerChoice+". WYGRAŁEŚ!";

}
function lose(userChoice,computerChoice)
{
	ty_div.innerHTML="Twój wybór to : " +userChoice+ " ";
	bot_div.innerHTML="Bot wybrał : " +computerChoice+ " ";
	if(userChoice==['pies'])userChoice='Pies';
	if(userChoice==['babcia'])userChoice='Babcia';
	if(userChoice==['dziecko'])userChoice='Dziecko';

	if(computerChoice==['dziecko'])computerChoice='dzieckiem';
	if(computerChoice==['babcia'])computerChoice='babcią';
	computerScore++;
	computerScore_span.innerHTML=computerScore;
	if(computerChoice==['pies'])computerChoice='psem';
	result_div.innerHTML=userChoice+" przegrywa z "+computerChoice+". PRZEGRAŁEŚ!";
}
function draw(userChoice,computerChoice)
{
	result_div.innerHTML=" REMIS!";
		ty_div.innerHTML="Twój wybór to : " +userChoice+ " ";
	bot_div.innerHTML="Bot wybrał : " +computerChoice+ " ";
}

function game(userChoice)
{
const computerChoice=getComputerChoice();
switch(userChoice + computerChoice)
{
	case "dzieckobabcia":
	case "babciapies":
	case "piesdziecko":
	win(userChoice,computerChoice);

	break;
	case "babciadziecko":
	case "piesbabcia":
	case "dzieckopies":
	lose(userChoice,computerChoice);
	break;
	case "babciababcia":
	case "piespies":
	case "dzieckodziecko":
	draw(userChoice,computerChoice);
	break;
}

}
function main () {
babcia_div.addEventListener('click',function(){
	game("babcia");
})
dziecko_div.addEventListener('click',function(){
	game("dziecko");
})
pies_div.addEventListener('click',function(){
	game("pies");
})
}
main();