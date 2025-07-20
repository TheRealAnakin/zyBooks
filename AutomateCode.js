const startButton = document.getElementsByClassName("zb-button primary raised           ");

for (let i  = 0; i < startButton.length; i++)
    {
        startButton[i].click();
    }

if (startButton.length == 0)
{
	alert("NOT APPLICABLE");
}

const codeWritingPrompt = document.getElementsByClassName("code-writing-prompt");

function copyInformation()
{
	navigator.clipboard.writeText("Solve and return back to me ONLY THE CODE. and please do not instantiate varables as they're already set" + codeWritingPrompt[0].textContent);
	console.log("Copied Succesfully!");
}
//Give three seconds to click back onto the webpage 

setTimeout(() => copyInformation(), 3000);

//Successfully copied after this
