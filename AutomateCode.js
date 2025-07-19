const startButton = document.getElementsByClassName("zb-button primary raised           ");

for (let i  = 0; i < startButton.length; i++)
    {
        startButton[i].click();
    }

if (startButton.length == 0)
{
	alert("NOT APPLICABLE");
}

codeWritingPrompt = document.getElementsByClassName("code-writing-prompt");

function copyInformation()
{
	navigator.clipboard.writeText(codeWritingPrompt[0].textContent);
	console.log("Copied Succesfully!");
}
//Give three seconds to click back onto the webpage 

setTimeout(() => copyInformation(), 3000);

//Successfully copied after this

