function func():void{
    let b:boolean=true;
    let n:number=11.5;
    let s:string="Hello, world!";
    let a:any=0;
    console.log("Boolean:  "+b);
    console.log("Number:  "+n);
    console.log("String:  "+s);
    console.log("Any"+a);

    let ar:Array<number>=[11, 2, 4.01, 0.0099];
    let ar2:string[]=["It is", "a", "new array"];
    console.log("Array of numbers: " + ar);
    console.log("Array of strings: " + ar2);
}

func.call(null);