var idiots = {
  name: "idiots",
  genre: "punk rock",
  members: {
    roto: {
      memberName: "roto",
      play: function () {
        console.log(`band ${this.name} ${this.memberName} play start`);
      },
    },
  },
};

idiots.members.roto.play();

function Sample() {
  let num = 0;

  function plus() {
    num += 1;
  }

  function print() {
    console.log(num);
  }

  return {
    plus,
    print,
  };
}

const test = new Sample();

test.plus();
console.log(test.print());
test.plus();
console.log(test.print());
test.plus();
console.log(test.print());

function Sample2() {
  let num = 0;

  return function () {
    console.log(num);
  };
}

Sample2()();
