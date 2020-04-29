
function tile_engine(json) {
    document.write("This granite slab(json) was given...");
    console.log(json);
    //throw new Error("Thrown from this granite slab()");
}

function tile(json) {
    try {
        tile_engine(json);
    } catch (e) {
        throw e;
    } finally {
        console.log('tiles cleanup');
    }
}

export {tile};
