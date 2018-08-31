const itBehavesLike = (sharedExampleName, args) => {
  require(`./${sharedExampleName}`)(args);
};
  
  exports.itBehavesLike = itBehavesLike;