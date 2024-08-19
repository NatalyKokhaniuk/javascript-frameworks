function IceCream(big: boolean=false, chocolate: boolean=false,caramel:boolean=false,berries:boolean=false, marshmallow: boolean=false): number {
    const sizeCost = big == true ? 25 : 10;
    let str:string= big==true? "велике морозиво (25грн)":"маленьке морозиво (10грн)";
    let toppingsCost = 0;
    if(chocolate) {
        toppingsCost+=5;
        str +=", з шоколадом (+5грн)";
    }
    if(caramel) {
        toppingsCost+=6;
        str +=", з карамеллю (+6грн)";
    }
    if(berries) {
        toppingsCost+=10;
        str +=", з ягодами (+10грн)";
    }
    if(marshmallow) {
        toppingsCost+=5;
        str +=" додатково посипане маршмеллоу (+5грн)";
    }
    str +=".";
    console.log("Ви замовили "+str);
    return sizeCost + toppingsCost;
  }
  

  function getFromPrompt(message: string): boolean {
    let numb: number;
    while (true) {
        const input = prompt(message);
        numb = parseFloat(input || '');
        if  (numb === 0 || numb === 1) break; 
        else alert('Invalid input. Please enter 0 or 1.');
    }
    return (numb==1);
}
  
  function main() {
    const size:boolean = getFromPrompt('Enter the size of the ice cream (for small enter "0", for large enter "1"):');
    const  chocolate:boolean= getFromPrompt('Add chocolate topping? ("1" for yes/"0" for no)');
    const  caramel:boolean= getFromPrompt('Add caramel topping? ("1" for yes/"0" for no)');
    const  berries:boolean= getFromPrompt('Add berries topping? ("1" for yes/"0" for no)');
    const withMarshmallow:boolean = getFromPrompt('Add marshmallow topping? ("1" for yes/"0" for no)');
  
    const totalCost = IceCream(size, chocolate, caramel,berries, withMarshmallow);
    console.log(`Всього: ${totalCost} грн`);
  }
  
  main();
  