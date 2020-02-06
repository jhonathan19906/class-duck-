class VolarConCohetes{
    fly(){
        console.log(' al infinito y mas alla');
    }
}
//patos
class Duck {
    flyBehavior;
    quackBehavior;
    perFormQuack(){
        this.quackBehavior.quack();
    }
    setPerFormQuack(perFormQuack){
        this.perFormQuack=perFormQuack;
    }
    setFlyBehavoir(flyBehavoir){
        this.flyBehavior= flyBehavoir;
    }
    setQuackBehavior(qb){
        this.quackBehavior = qb;
    }

//lineas de otras clasas 
    /*quack(){
        console.log('quack');
    }*/
    swim(){
        console.log('estoy nadando');
    }
    display(){};

   /* fly(){
        console.log('vuela pato');
    };  */  
}
class MaltardDuck extends Duck {
    
    display(){
        console.log('quack');
    }
}
class RedheadDuck extends Duck {
  
    display(){
        console.log('quack');
    }
}
class CauchoDuck extends Duck{
    display(){
        console.log('pato de caucho solo nada');
    }
   /* fly(){
        console.log('no puedo volar');
    };*/
}
class CorchoDuck extends Duck{
    display(){
        console.log('solo puede nadar');
    };
    /*fly(){
        console.log(' solo nada');
    };*/
}
class FlyWithWing{
    fly(){
        console.log(' si vuela');
    }
}
class FlyNoWay{
    fly(){
        console.log(' pato no vuela');
    }
}
class Quack{
    quack(){
        console.log('quack-quack');
    }
}
class Squack{
    quack(){
        console.log('Squack-Squack-Squack');
    }
}
class MuteQuack{
    quack(){
        console.log('shh-shh ');
    }
}
