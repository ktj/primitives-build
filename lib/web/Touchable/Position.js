







var PooledClass=require('./PooledClass');









function Position(left,top){
this.left=left;
this.top=top;
}

Position.prototype.destructor=function(){
this.left=null;
this.top=null;
};

PooledClass.addPoolingTo(Position,PooledClass.twoArgumentPooler);

module.exports=Position;