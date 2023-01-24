function ris1() 
{
document.getElementById('ris').style.height = '110vh';
document.getElementById('ris').style.marginTop = '0vh';
document.getElementById('ris').style.transition = '5ms';
}

function ris2() 
{
document.getElementById('ris').style.marginTop = '-15vh';
document.getElementById('ris').style.transition = '5ms';
}

function ris3() 
{
document.getElementById('slide1').style.marginTop = '-110vh';
document.getElementById('slide1').style.transition = '1s';
}

function magia() 
{
var styles = getComputedStyle(document.getElementById('golub'));

if (styles.top == '650px') 
{
document.getElementById('golub').style.top = '560px';
document.getElementById('golub').style.transition = '5ms';
document.getElementById('crol').style.top = '650px';
document.getElementById('crol').style.transition = '5ms';
}

else 
{
document.getElementById('golub').style.top = '650px';
document.getElementById('golub').style.transition = '5ms';
document.getElementById('crol').style.top = '560px';
document.getElementById('crol').style.transition = '5ms';
}}

function lamp() 
{
var styles = getComputedStyle(document.getElementById('crol'));
	
if (styles.display == 'none') 
{
document.getElementById('t').style.display = 'block';
document.getElementById('t').style.transition = '5ms';
document.getElementById('crol').style.display = 'block';
document.getElementById('hat').style.display = 'block';
document.getElementById('mag').style.display = 'block';
document.getElementById('golub').style.display = 'block';
}
	
else 
{
document.getElementById('t').style.display = 'none';
document.getElementById('t').style.transition = '5ms';
document.getElementById('crol').style.display = 'none';
document.getElementById('hat').style.display = 'none';
document.getElementById('mag').style.display = 'none';
document.getElementById('golub').style.display = 'none';
document.getElementById('lamp').style.transition = '1s';
}}