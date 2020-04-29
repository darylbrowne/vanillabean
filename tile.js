
function slab(json) {
    //document.write "This granite slab(json) was given..." + json;
    throw new Error("Thrown from this granite slab()");
}

function tile(json) {
    try {
        return slab(json);
    } catch (e) {
        throw e;
    } finally {
        console.log('tiles cleanup');
    }
}

export {tile};
