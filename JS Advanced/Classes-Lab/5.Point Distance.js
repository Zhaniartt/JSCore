class Point{
    constructor(x,y){
        this.x =x;
        this.y =y;
    }
    static distance(a,b){
        let s = a;
        let d = b;
        let output = ((d.x-s.x)**2) + ((d.y-s.y)**2);
        return Math.sqrt(output);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(p1);
console.log(p2);
console.log(Point.distance(p1, p2));
