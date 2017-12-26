function numberOfSeats([arg1,arg2]) {
    let h = Number(arg1) * 100;
    let w = Number(arg2) * 100;   

    let tablesPerRow = Math.floor((w - 100) / 70);
    let tablesPerColumn = Math.floor(h / 120);
                                     
    let allTables = tablesPerRow * tablesPerColumn - 3;

    console.log(allTables);
}

numberOfSeats(["15", "8.9"]);
numberOfSeats(["8.4", "5.2"]);