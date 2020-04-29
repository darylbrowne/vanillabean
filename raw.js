
function slab(json) {
    //document.write "This granite slab(json) was given..." + json;
    throw new Error("Thrown from this granite slab()");
}

function slabExport() {
    try {
        return block();
    } catch (e) {
        // Maybe do something else here first.
        throw e;
    } finally {
        console.log('slabExport do cleanup here');
    }
}

async function block() {
    try {
        await slabExport();
    } catch (e) {
        console.error(e);
    }
}

block();
