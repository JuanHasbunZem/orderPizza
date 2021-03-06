# Pizza Parlor

#### A website that allows the 'customer' to order a pizza and select the toppings they would wish to have on their pizza. The code will then determine the price of the pizza and inform the 'customer'. This code will use javascript objects to demonstrate what was learned in this segment of Epicodus.

#### By Juan Hasbun

### Last Updated: 3/6/2021

## Technologies Used

* Github
* Gitbash
* Visual Studio Code
* HTML
* CSS
* JQuery
* Javascript
* Chrome's Developer Tools debugger
* Markdown

## Description

The site will prompt the user to select a pizza size, which will store that info into a newly created entry for the Pizza object, then that page will hide and show a new page with a list of availiable toppings to choose from. As each topping is picked, that selection will be stored in the Pizza object and saved. Once done selecting the toppings, the user will click a Done button and the site will move to a page displaying the final cost of the pizza. Which is determined by a function that will review the Pizza object and adjust the price based on the pizza size and toppings.

## Setup/Installation Requirements

Using your Github account, go to your Gitbash terminal and use the: $git clone https://github.com/JuanHasZem/orderPizza command to download a copy of the files used for this project. Then open the file labeled index.html to open the website and test the page out.

Alternatively, follow this link: [Here](https://github.com/JuanHasZem/orderPizza)

## Known Bugs

Currently, when you reach the screen to confirm your pizza it'll list the price for the pizza. If you then cancel the order, and reorder a different price the screen will still display the previous pizza price and the new current pizzas price.    

*Did not fix in time for resubmission, but eventually will go back to fix it*

## License

Copyright 2021 Juan Hasbun

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Picture Sources
     Pizza.jpg:  Perfect Paleo Pizza, delish.com
     Delivery.jpg: https://www.akcrust.com/blog/12-tips-to-optimize-your-pizza-delivery-process

## Contact Information

Email at: [zemenarwow@gmail.com](zemenarwow@gmail.com)


## Plan

My initial blueprint of the site before creating tests/code.

 1. A window to greet the user with two buttons.
      * One button will be a "Create Pizza" to lead to the pizza creation.
      * One button will be a "Cancel" that leaves the page.
 2. Once the "Create Pizza" button is pushed, the greetings div will hide and a new div will show, prompting the user to select a pizza size.
      * (optional) include a crust type selection? thin, pan, stuffed?
 3. Once the size is selected and the user clicks the Next button, a new object will be created that will store the data for the pizza being ordered.
 4. A new toppings div will now show up in place of the pizza size div. Each topping will be its own button that once selected will hide and then store that data into the pizza object.
 5. After the user finishes selecting all the toppings they want, they'll click the Finish button to proceed. This will run the object through function(s) that will go through and add the cost of each selected option into a final total. 
 6. Then a new div to display the final total of the pizzas cost.  

## Tests
```
Describe: let pizza = new Pizza
     Test: "Will create a new Pizza object with default settings for keywords"
     Expect(new Pizza).toEqual(pizza { size: 0, style: 0, toppings: 0}

Describe: Pizza.prototype.sizeFinalCost()
     Test: "Will add a keyword "cost" to the Pizza object and then determine the cost based on the inputted size"
     Expect(pizza.sizeFinalCost(small)).toEqual(2)

Describe: Pizza.prototype.styleFinalCost
     Test: "Will update pizza.cost by adding the price of pizza style to pizza.cost"
     Expect(pizza.styleFinalCost(hand).toEqual(4))

Describe: Pizza.prototype.toppingsCost
     Test: "Will go through an array of values, based on toppings picked, and add them to pizza.cost"
     Expect(pizza.toppingsCost("cheese, olives, bell pepper").toEqual(7)
```

## Future Changes:

A few possible updates I'd like to add to this project would be:
     * I'd like to include a mini pizza down at the bottom (bottom right corner maybe?) that starts as one slice during the first page and increases in size as the pizza ordering process moves.

     * For the size and styles page, once I have a better understanding for event listeners, id like to convert the radio buttons into graphical buttons of images to present a visual size difference and how each style looks like.

     * Similar to previous, Id like to implement this to the Toppings menu as well. Or maybe a grid containing an image of each topping and underneath each topping a menu bar (or radio buttons) for amount of toppings (none, half serving, normal serving, double serving) then an "Add Toppings" button at the very bottom to process all of the above.