
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/

/* If the flower price is less than 2, add flower to the filteredFlowers array*/

const inexpensiveFlowers = () => {
    const filteredFlowers = []  // Do not modify
    for (const flower of flowers){
        if (flower.price < 2){
            filteredFlowers.push(flower)
        }
    }

    // Write your algorithm first, and then your code. Feel free to remove this comment



    return filteredFlowers  // Do not modify
}
/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
// If the flower USDA zone indluces 3 and 8, push those flowers to the filteredFlowers Array.
const zoneFlowers = () => {
    const filteredFlowers = []  // Do not modify

    for (const flower of flowers){
        if (flower.usdaZones.includes (3) && flower.usdaZones.includes(8)){
            filteredFlowers.push(flower)
        }
    }
    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
// If the flower includes the color orange, push the flower to the filteredFlowers array.
const orangeFlowers = () => {
    const filteredFlowers = []  // Do not modify
for (const flower of flowers){
    if (flower.colors.includes("Orange")){
        filteredFlowers.push(flower)
    }
}

    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
    let flowersHTMLString = ""  // Do not modify
    for(const flower of flowers){
        flowersHTMLString +=`<article>\n   <h1>${flower.type}</h1>\n\n   <h2>Colors</h2>\n`
        
        for (const color of flower.colors){
            flowersHTMLString += `   <section>${color}</section>\n`
        }
        flowersHTMLString += `\n   <h2>USDA Zones</h2>\n`
        for (const zone of flower.usdaZones){
            flowersHTMLString += `   <div>${zone}</div>\n`
        }
        flowersHTMLString += '</article>\n'
    } 

    
    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */
/*iterate through the flowers array. Add <article> to the beginning of the flowersHTMLString, new line, flower type wrapped in <h1> tag,
two new lines, colors wrapped in <h2>, iterate through flowers.colors, wrap color of each flower in <section> tags, 2 new lines, add <h2> wrap to 
USDA Zones, new line, iterate through flower USDA zones, wrap zones in <div> tag, new line, end with </article>*/

    return flowersHTMLString  // Do not modify
}

console.log(flowersAsHTML())












































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

