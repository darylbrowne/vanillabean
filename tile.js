
function tile_engine(json) {
    console.log("This granite slab(json) was given..." + json);
    //throw new Error("Thrown from this granite slab()");
}

function tile(json) {
    try {
        return tile_engine(json);
    } catch (e) {
        throw e;
    } finally {
        console.log('tiles cleanup');
    }
}

export {tile};
