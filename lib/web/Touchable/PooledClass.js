








var invariant=require('invariant');








var twoArgumentPooler=function twoArgumentPooler(a1,a2){
var Klass=this;
if(Klass.instancePool.length){
var instance=Klass.instancePool.pop();
Klass.call(instance,a1,a2);
return instance;
}else{
return new Klass(a1,a2);
}
};

var standardReleaser=function standardReleaser(instance){
var Klass=this;
invariant(
instance instanceof Klass,
'Trying to release an instance into a pool of a different type.');

instance.destructor();
if(Klass.instancePool.length<Klass.poolSize){
Klass.instancePool.push(instance);
}
};

var DEFAULT_POOL_SIZE=10;
var DEFAULT_POOLER=twoArgumentPooler;










var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){
var NewKlass=CopyConstructor;
NewKlass.instancePool=[];
NewKlass.getPooled=pooler||DEFAULT_POOLER;
if(!NewKlass.poolSize){
NewKlass.poolSize=DEFAULT_POOL_SIZE;
}
NewKlass.release=standardReleaser;
return NewKlass;
};

var PooledClass={
addPoolingTo:addPoolingTo,
twoArgumentPooler:twoArgumentPooler};


module.exports=PooledClass;