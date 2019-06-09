var rollValue;
var stepA1 = 0;
var stepA2 = 0;
var stepB1 = 0;
var stepB2 = 0;
var turn = 'A';
var term = 'A';
var A1 = -2;
var A2 = -2;
var B1 = -2;
var B2 = -2;
var finishA = 0;
var finishB = 0;
var LockerA = 2;
var LockerB = 2;
var Red1 = new Image();
var Blue1 = new Image();
var Red2 = new Image();
var Blue2 = new Image();
Red1.src= 'red1.png';
Blue1.src = 'blue1.png';
Red2.src= 'red2.png';
Blue2.src = 'blue2.png';
var status = 1;
var autoStatus = 1;

var myAud = new Audio("whoosh.mp3");

function initial(){
	document.getElementById('turns').innerHTML = "turn of: "+turn;
	document.getElementById('terms').innerHTML = "term of: "+term;
	var loc = document.getElementById('lockerB');
	loc.appendChild(Red1);
	var loc = document.getElementById('lockerB');
	loc.appendChild(Red2);
	var loc = document.getElementById('lockerA');
	loc.appendChild(Blue1);
	var loc = document.getElementById('lockerA');
	loc.appendChild(Blue2);
}

function myFunction(i)
{
	if(autoStatus == 0)
		isMovable(i);
}

function roll()
{
	rollValue = Math.floor(Math.random()*6)+1;
	document.getElementById('value').innerHTML=rollValue;
	document.getElementById('turns').innerHTML = "turn of: "+turn;
	document.getElementById('terms').innerHTML = "term of: "+term;
}

function rollCheck()
{
	rollValue = Number(document.getElementById('dice').value);
	document.getElementById('value').innerHTML = rollValue;
	document.getElementById('turns').innerHTML = "turn of: "+turn;
	document.getElementById('terms').innerHTML = "term of: "+term;
}

function check()
{
	if(status == 1)
	{
		rollCheck();
		if(rollValue!=6)
		{
			turnChanger();
			if(term == 'A')
			{
				if((LockerA + finishA) == 2)
				{
					if((LockerB + finishB) == 2)
						termChanger();
					else
					{
						setTimeout(function(){
							rollValue = 0;
							termChanger();
							document.getElementById('value').innerHTML = rollValue;
							document.getElementById('turns').innerHTML = "turn of: "+turn;
							document.getElementById('terms').innerHTML = "term of: "+term;},2000);
					}
				}
				else status = 0;
			}
			else if(term == 'B')
			{
				if((LockerB + finishB) == 2)
				{
					if((LockerA + finishA) == 2)
						termChanger();
					else
					{
						setTimeout(function(){
							rollValue = 0;
							termChanger();
							document.getElementById('value').innerHTML = rollValue;
							document.getElementById('turns').innerHTML = "turn of: "+turn;
							document.getElementById('terms').innerHTML = "term of: "+term;},2000);
					}
				}
				else status = 0;
			}
		}
	}
	if(rollValue == 6) status = 0;
	document.getElementById('turns').innerHTML = "turn of: "+turn;
	document.getElementById('terms').innerHTML = "term of: "+term;
	autoStatus = 1;
	autoFinish();
	setTimeout(auto,2000);
}

function rollRand()
{
	if(status == 1)
	{
		roll();
		if(rollValue!=6)
		{
			turnChanger();
			//option checker
			if(term == 'A')
			{
				if((LockerA + finishA) == 2)
				{
					if((LockerB + finishB) == 2)
						termChanger();
					else
					{
						setTimeout(function(){
							rollValue = 0;
							termChanger();
							document.getElementById('value').innerHTML = rollValue;
							document.getElementById('turns').innerHTML = "turn of: "+turn;
							document.getElementById('terms').innerHTML = "term of: "+term;},2000);
					}
				}
				else status = 0;
			}
			else if(term == 'B')
			{
				if((LockerB + finishB) == 2)
				{
					if((LockerA + finishA) == 2)
						termChanger();
					else
					{
						setTimeout(function(){
							rollValue = 0;
							termChanger();
							document.getElementById('value').innerHTML = rollValue;
							document.getElementById('turns').innerHTML = "turn of: "+turn;
							document.getElementById('terms').innerHTML = "term of: "+term;},2000);
					}
				}
				else status = 0;
			}
		}
	}
	if(rollValue == 6) status = 0;
	document.getElementById('value').innerHTML = rollValue;
	document.getElementById('turns').innerHTML = "turn of: "+turn;
	document.getElementById('terms').innerHTML = "term of: "+term;
	autoStatus = 1;
	autoFinish();
	setTimeout(auto,2000);
}

function autoFinish()
{
	if(term == 'A')
	{
		if((rollValue+stepA1) > 27)
		{
			if((LockerA + finishA) == 1)
			{
				status = 1;
				termChanger();
				if(rollValue != 6)
					rollValue = 0;
				else
				{
					if(LockerA == 1)
						startA();
					else 
					{
						rollValue = 0;
					}
				}
			}
			else if((LockerA+finishA) == 0)
				setTimeout(isMovable(A2),1500);
		}
		else if((rollValue+stepA2) > 27)
		{
			if((LockerA+finishA) == 1)
			{
				status = 1;
				termChanger();
				if(rollValue != 6)
					rollValue = 0;
				else
				{
					if(LockerA == 1)
						startA();
					else 
					{
						rollValue = 0;
					}
				}
			}
			else if((LockerA+finishA) == 0)
				setTimeout(isMovable(A1),1500);
		}
		if((rollValue+stepA1) > 27 && (rollValue+stepA2) > 27)
		{
			rollValue = 0;
			status = 1;
			termChanger();
			setTimeout(function(){document.getElementById('value').innerHTML = rollValue;},2000);
		}
	}
	if(term == 'B')
	{
		if((rollValue+stepB1) > 27)
		{
			if((LockerB+finishB) == 1)
			{
				status = 1;
				termChanger();
				if(rollValue != 6)
					rollValue = 0;
				else
				{
					if(LockerB == 1)
						startB();
					else 
					{
						rollValue = 0;
					}
				}
			}
			else if((LockerB+finishB) == 0)
				setTimeout(isMovable(B2),1500);
		}
		else if((rollValue+stepB2) > 27)
		{
			if((LockerB+finishB) == 1)
			{
				status = 1;
				termChanger();
				if(rollValue != 6)
					rollValue = 0;
				else
				{
					if(LockerB == 1)
						startB();
					else 
					{
						rollValue = 0;
					}
				}
			}
			else if((LockerB+finishB) == 0)
				setTimeout(isMovable(B1),1500);
		}
		if((rollValue+stepB1) > 27 && (rollValue+stepB2) > 27)
		{
			rollValue = 0;
			status = 1;
			termChanger();
			setTimeout(function(){document.getElementById('value').innerHTML = rollValue;},2000);
		}
	}
	setTimeout(function(){
		document.getElementById('value').innerHTML = rollValue;
		document.getElementById('turns').innerHTML = "turn of: "+turn;
		document.getElementById('terms').innerHTML = "term of: "+term;
	},2000);
	autoStatus = 0;
}

function auto()
{
	if(rollValue == 6)
	{
		if(term == "A")
		{
			if((LockerA + finishA) == 2)
				startA();
			else if(finishA == 1)
			{
				if(A1>=0)
					isMovable(A1);
				else if(A2>=0)
					isMovable(A2);
			}
		}
		if(term == "B")
		{
			if((LockerB + finishB) == 2)
				startB();
			else if(finishB == 1)
			{
				if(B1>=0)
					isMovable(B1);
				else if(B2>=0)
					isMovable(B2);
			}
		}
	}
	else if(rollValue != 6)
	{
		if(term == "A" && (LockerA + finishA) == 1)
		{
			if(A1>=0)
				isMovable(A1);
			else if(A2>=0)
				isMovable(A2);
		}
		else if(term == "B" && (LockerB + finishB) == 1)
		{
			if(B1>=0)
				isMovable(B1);
			else if(B2>=0)
				isMovable(B2);
		}
	}
	if(term == 'A')
	{
		if(A1 == A2 && A1>0)
			isMovable(A1);
	}
	else if(term == 'B')
	{
		if(B1 == B2 && B1>0)
			isMovable(B1);
	}
	autoStatus = 0;
}

function turnChanger(){
	if(turn == 'A')
		turn = 'B';
	else
		turn = 'A';
}

function termChanger()
{
	if(term == 'A')
		term = 'B';
	else
		term = 'A';
}


function startA(){
	if(rollValue==6 && term == 'A')
	{
		rollValue=0;
		if(LockerA == 2)
		{   
			myAud.play();
			setTimeout(function(){var src = document.getElementById("1");
    		src.appendChild(Blue1);
			A1=1;
			document.getElementById('value').innerHTML= '';
			LockerA--;},1000)
		}
		else if(LockerA == 1)
		{
			if(A1 == -2)
			{
				myAud.play();
				setTimeout(function(){
					var src = document.getElementById("1");
		    		src.appendChild(Blue1);
					A1=1;
					document.getElementById('value').innerHTML= '';
					LockerA--;},1000)
			}
			else if(A2 == -2)
			{
				myAud.play();
				setTimeout(function(){
					var src = document.getElementById("1");
		    		src.appendChild(Blue2);
					A2=1;
					document.getElementById('value').innerHTML= '';	
					LockerA--;},1000)
			}
		}
		else if(LockerA == 0)
			alert('Locker A is empty');
		status = 1;
	}
}

function startB(){
	if(rollValue==6 && term == 'B')
	{
		if(LockerB == 2)
		{
			myAud.play();
			setTimeout(function(){
				var src = document.getElementById("15");
	    		src.appendChild(Red1);
				B1=15;
				rollValue=0;
				document.getElementById('value').innerHTML= '';
				LockerB--;},1000)
		}
		else if(LockerB == 1)
		{
			if(B1 == -2)
			{
				myAud.play();
				setTimeout(function(){
					var src = document.getElementById("15");
		    		src.appendChild(Red1);
					B1=15;
					rollValue=0;
					document.getElementById('value').innerHTML= '';
					LockerB--;},1000)
			}
			else if(B2 == -2)
			{
				myAud.play();
				setTimeout(function(){
					var src = document.getElementById("15");
		    		src.appendChild(Red2);
					B2=15;
					rollValue=0;
					document.getElementById('value').innerHTML= '';
					LockerB--;},1000)
			}
		}
		else if(LockerB == 0)
			alert('Locker B is empty');
		status = 1;
	}
}


function isMovable(p){
	if(rollValue>0)
	{
		if(term == 'A')
		{
			if(A1 == p && (stepA1 + rollValue)<=27)
				move(1,A1);			
			else if(A2 == p && (stepA2+rollValue)<=27)
				move(2,A2);
		}
		else if(term == 'B')
		{
			if(B1 == p && (stepB1+rollValue)<=27)
				move(1,B1);
			else if(B2 == p && (stepB2+rollValue)<=27)
				move(2,B2);
		}
	}
}

function move(n,p){
	myAud.play();
	if(term == 'A')
	{
		if(n == 1)
		{
			tokenEraser(1);
			A1 = (A1+rollValue)%28;
			tokenMover(1);
			stepA1 += rollValue;
		}
		else if(n == 2)
		{
			tokenEraser(2);
			A2 = (A2+rollValue)%28;
			tokenMover(2);
			stepA2 += rollValue;		
		}
	}
	if(term == 'B')
	{
		if(n == 1)
		{
			tokenEraser(1);
			B1 = (B1+rollValue)%28;
			tokenMover(1);
			stepB1 += rollValue;
		}
		else if(n == 2)
		{
			tokenEraser(2);
			B2 = (B2+rollValue)%28;
			tokenMover(2);
			stepB2 += rollValue;
		}
	}
	eatCheck(n);
	if(rollValue !=6)
		termChanger();
	
	document.getElementById('turns').innerHTML = "turn of : "+turn;
	document.getElementById('terms').innerHTML = "term of : "+term;
	finishCheck();
	winCheck();
	status = 1;
	document.getElementById('value').innerHTML = '';
	rollValue = 0;
}

function tokenEraser(n)
{
	if(term =='A')
	{
		if(n == 1)
		{
			var str = A1.toString();
			var src = document.getElementById(str);
			src.removeChild(Blue1);
		}
		if(n == 2)
		{
			var str = A2.toString();
			var src = document.getElementById(str);
			src.removeChild(Blue2);
		}
	}
	if(term == 'B')
	{
		if(n == 1)
		{
			var str = B1.toString();
			var src = document.getElementById(str);
			src.removeChild(Red1);
		}
		if(n == 2)
		{
			var str = B2.toString();
			var src = document.getElementById(str);
			src.removeChild(Red2);
		}
	}
}

function tokenMover(n)
{
	if(term == 'A')
	{
		if(n == 1)
		{
			var str = A1.toString();
			var src = document.getElementById(str);
			src.appendChild(Blue1);
		}
		if(n == 2)
		{
			var str = A2.toString();
			var src = document.getElementById(str);
			src.appendChild(Blue2);
		}
	}
	if(term == 'B')
	{
		if(n == 1)
		{
			var str = B1.toString();
			var src = document.getElementById(str);
			src.appendChild(Red1);
		}
		if(n == 2)
		{
			var str = B2.toString();
			var src = document.getElementById(str);
			src.appendChild(Red2);
		}
	}
}

function eatCheck(n)
{
	var x;
	if(term == 'A')
	{
		if(n==1)
			x=A1;
		else if(n == 2)
			x=A2;
	}
	else if(term == 'B')
	{
		if(n==1)
			x=B1;
		else if(n == 2)
			x=B2;
	}

	if(term == 'A')
	{
		if(B1 == x)
		{
			var str = x.toString();
			var src = document.getElementById(str);
			src.removeChild(Red1);
			LockerB++;
			var loc = document.getElementById('lockerB');
			loc.appendChild(Red1);
			B1 = -2;
			stepB1 = 0;
		}
		else if(B2 == x)
		{
			var str = x.toString();
			var src = document.getElementById(str);
			src.removeChild(Red2);
			LockerB++;
			var loc = document.getElementById('lockerB');
			loc.appendChild(Red2);
			B2 = -2;
			stepB2 = 0;
		}
	}
	else if(term == 'B')
	{
		if(A1 == x)
		{
			var str = x.toString();
			var src = document.getElementById(str);
			src.removeChild(Blue1);
			LockerA++;
			var loc = document.getElementById('lockerA');
			loc.appendChild(Blue1);
			A1 = -2;
			stepA1 = 0;
		}
		else if(A2 == x)
		{
			var str = x.toString();
			var src = document.getElementById(str);
			src.removeChild(Blue2);
			LockerA++;
			var loc = document.getElementById('lockerA');
			loc.appendChild(Blue2);
			A2 = -2;
			stepA2 = 0;
		}
	}
}


function finishCheck()
{
	if(A1 == 0)
	{
		var src = document.getElementById('0');
		src.removeChild(Blue1);
		finishA++;
		A1 = -1;
		stepA1 = 0;
	}
	if(A2 == 0)
	{
		var src = document.getElementById('0');
		src.removeChild(Blue2);
		finishA++;
		A2 = -1;
		stepA2 = 0;
	}
	if(B1 == 14)
	{
		var src = document.getElementById('14');
		src.removeChild(Red1);
		finishB++;
		B1 = -1;
		stepB1 = 0;
	}
	if(B2 == 14)
	{
		var src = document.getElementById('14');
		src.removeChild(Red2);
		finishB++;
		B2 = -1;
		stepB2 = 0;
	}
}

function winCheck()
{
	if(finishA == 2)
		alert("Winner is A !!!!");
	else if(finishB == 2)
		alert("Winner is B !!!!")
}


