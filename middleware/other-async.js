function other( ctx ) {
    console.log("other async")
}

module.exports = function () {
  return async function ( ctx, next ) {
    other(ctx);
    console.log("other1")
    await next()
    console.log("other2")

  }
}