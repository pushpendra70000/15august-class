//console.log('bharat mata ki jai');
class A {
    //1property

    //2constructor

    //3methods/function
    myfunction() {
        console.log("This is class A")

    }

}
let objA = new A();
objA.myfunction()
    ;
class B extends A {
    myfunction2() {
        console.log("This is class B")

    }

}
let objB = new B();
objB.myfunction2()
    ;


class C extends B {
    myfunction3() {
        console.log("This is class C")

    }

}
let objC = new C();
objC.myfunction3()
    ;
class D extends C {
    myfunction4() {
        console.log("this is class D")
    }
}
let objD = new D();
objD.myfunction4()
    ;
class E extends D {
    myfunction5() {
        console.log("this is class E")
    }
}
let objE = new E();
objE.myfunction5()
    ;
class F extends E {
    myfunction6() {
        console.log("this is class F")
    }
}
let objF = new F();
objF.myfunction6()
    ;
class G extends F {
    myfunction7() {
        console.log("this is class G")
    }
}
let objG = new G();
objG.myfunction7()
    ;
class H extends G {
    myfunction8() {
        console.log("this is class H")
    }
}
let objH = new H();
objH.myfunction8()
    ;
class I extends H {
    myfunction9() {
        console.log("this is class I")
    }
}
let objI = new I();
objI.myfunction9()
    ;
    class J extends I {
        myfunction10() {
            console.log("this is class J")
        }
    }
    let objJ = new J();
    objJ.myfunction10()
        ;                   