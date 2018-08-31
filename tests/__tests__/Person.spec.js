const { itBehavesLike } = require('../../shared_examples');

describe("Person", () => {
    debugger;
    const person = {
      name: 'dwalleck',
      alive: true
    };
    const args = {target: person}
    itBehavesLike("aLiveBeing")(args)
})

