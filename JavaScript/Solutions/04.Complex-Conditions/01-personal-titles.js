function personalTitles([arg1, arg2]){
    let age = Number(arg1);
    let gender = arg2;
    if (age < 16)
    {
        if (gender == "m") console.log("Master");
        else if (gender == "f") console.log("Miss");
    }
    else
    {
        if (gender == "m") console.log("Mr.");
        else if (gender == "f") console.log("Ms.");
    }
}

personalTitles([12, "f"]);
personalTitles([17, "m"]);
personalTitles([25, "f"]);
personalTitles([13.5, "m"]);