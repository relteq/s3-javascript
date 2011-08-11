var S3Helper = {
  executeOnAmazon : function(functor) {
    var the_args = {};
    for(var i = 1; i < arguments.length; i++)
      the_args[i-1] = arguments[i];
    return functor(arguments);
  }
}
