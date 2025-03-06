//your JS code here. If required.
document.getElementById("userform").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();

    if (name === "" || age === "") {
        alert("Please enter valid details");
        return;
    }

    age = Number(age);

    // ✅ Ensure correct variable name: `checkVoteEligibility`
    let checkVoteEligibility = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    });

    checkVoteEligibility
        .then(message => alert(message))
        .catch(message => alert(message));
});
