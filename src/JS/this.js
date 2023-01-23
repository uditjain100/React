// !!!! this variations

console.log(this);

function fun() {
  console.log(this);
}

fun();

const fun2 = () => {
  console.log(this);
};

fun2();

const obj = {
  f: function () {
    console.log(this);
  },
  g: () => {
    console.log(this);
  },
};

obj.f();
obj.g();

const obj2 = {
  a: function () {
    function fun() {
      console.log(this);
    }
    fun();
  },
  b: function () {
    const fun = () => {
      console.log(this);
    };
    fun();
  },
  c: () => {
    function fun() {
      console.log(this);
    }
    fun();
  },
  d: () => {
    const fun = () => {
      console.log(this);
    };
    fun();
  },
};

obj2.a();
obj2.b();
obj2.c();
obj2.d();
