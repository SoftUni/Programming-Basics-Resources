function guessPassword([arg1]) {
    let input = arg1;
    if (input == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!");
    }
}

guessPassword(["qwerty"]);
guessPassword(["s3cr3t!P@ssw0rd"]);
guessPassword(["s3cr3t!p@ss"]);