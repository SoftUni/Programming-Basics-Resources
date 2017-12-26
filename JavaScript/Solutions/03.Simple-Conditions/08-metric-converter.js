function metricConverter([arg1, arg2, arg3]) {
    let size = Number(arg1);
    let sourceMetric = arg2.toLowerCase();
    let destMetric = arg3.toLowerCase();
    if (sourceMetric == "km")
        size = size * 1000;
    else if (sourceMetric == "mm")
        size = size * 0.001;

    else if (sourceMetric == "m")
        size = size;

    else if (sourceMetric == "cm")
        size = size * 0.01;

    else if (sourceMetric == "mi")
        size = size / 0.000621371192;

    else if (sourceMetric == "in")
        size = size / 39.3700787;

    else if (sourceMetric == "ft")
        size = size * 0.304799999;

    else if (sourceMetric == "yd")
        size = size / 1.0936133;                 
     

    if (destMetric == "km")
        size = size * 0.001;
    else if (destMetric == "m")
        size = size;
    else if (destMetric == "mm")
        size = size / 0.001;
    else if (destMetric == "cm")
        size = size * 100;
    else if (destMetric == "mi")
        size = size * 0.000621371192;
    else if (destMetric == "in")
        size = size * 39.3700787;
    else if (destMetric == "ft")
        size = size / 0.304799999;
    else if (destMetric == "yd")
        size = size * 1.0936133;                    
    console.log(size + " " + destMetric);
}

metricConverter([12, "km", "ft"]);
metricConverter([150, "mi", "in"]);
metricConverter([450, "yd", "km"]);