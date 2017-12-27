function solve([x, w, m]) {
    x = Number(x);
    w = Number(w);
    m = Number(m);

    let bricksInOneCourse = w * m;

    let totalCourses = Math.ceil(x / bricksInOneCourse);

    console.log(totalCourses);
}

solve([120, 2, 30]);
solve([355, 3, 10]);
solve([5, 12, 30]);