//your JS code here. If required.
document.getElementById("userform").addEventListener("submit",function(event) {
	event.preventDefault();

	let name = document.getElementById("name").value.trim();
	let age = document.getElementById("age").value.trim();

	if(name === "" || age=== ""){
		alert( "Please enter valid details");
		return;
	}

	age= Number(age);

	let checkVoteEligibilty = new Promise ((resolve,reject) =>{
		setTimeOut(() =>{
			if(age >18){
				resolve(`Welcome, ${name}. You can vote.`);
			}
			else{
				 reject(`Oh sorry ${name}. You aren't old enough.`);
			}
		},4000);
			
			
		});
	
checkVoteEloigibility
	.then(message=> alert(message))
	.catch(message => alert(message));	
	});
