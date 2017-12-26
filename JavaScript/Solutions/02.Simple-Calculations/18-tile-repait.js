function tileRepair([arg1,arg2,arg3,arg4,arg5]){
    let n = Number(arg1);
    let w = Number(arg2);
    let l = Number(arg3);
    let m = Number(arg4);
    let o = Number(arg5);

    let area = n * n;
    let tileArea = w * l;
    let seatArea = m * o;
    let areaWithTiles = area - seatArea;

    let tilesCount = areaWithTiles / tileArea;

    let time = tilesCount * 0.2;
    console.log(tilesCount);
    console.log(time);
}