//grocery.ts


//class that defines the name of an item, the quantity of an item, and if the item is a perishable
class Grocery {
    name: string;
    quan: number;
    perish: boolean;

    constructor(theName: string, theQuan: number, thePerish: boolean) {
        this.name = theName;
        this.quan = theQuan;
        this.perish = thePerish;
    }
}
//creating items in a grocery store
let bread = new Grocery("bread", 1, true);

//creating an array for the grocery items
let list: Array<string | number | boolean> = [bread.name, bread.quan, bread.perish];

//displaying list of grocery items
console.log(list);

//creating more grocery items
let milk = new Grocery("milk", 2, true);
let soda = new Grocery("soda", 6, false);
let meat = new Grocery("meat", 10, true);
let rice = new Grocery("rice", 5, false);
let potatoes = new Grocery("potatoes", 5, true);

//adding to the list
list.push(milk.name, milk.quan, milk.perish);
list.push(soda.name, soda.quan, soda.perish);
list.push(meat.name, meat.quan, meat.perish);
list.push(rice.name, rice.quan, rice.perish);
list.push(potatoes.name, potatoes.quan, potatoes.perish);

//displaying final list
console.log(list);

//displaying the list for html output
//called by groceries.html to display list
document.write("Food, Quantity, Perishable: <br>");
document.write("[");
for (const element of list) {
    document.write(element.toString());
    document.write(", ");
}
document.write("]");
