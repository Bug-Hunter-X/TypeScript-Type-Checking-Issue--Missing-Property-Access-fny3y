function printCoord(pt: { x: number; y: number }) {
    if (pt.x === undefined || pt.y === undefined) {
        console.error('x or y property is missing');
        return; //Or throw an error
    }
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

//Example of missing property:
//printCoord({ x:3}); //This will now print an error message instead of throwing runtime error.