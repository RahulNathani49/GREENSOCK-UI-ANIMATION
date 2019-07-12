function start(){
    TweenMax.to('.anim',1.5,{scaleY:1,height:'100vh',ease: Circ.easeOut});
    TweenMax.to('.image',1,{opacity:1,y:42,delay:1.5,ease: Back.easeOut.config(1.7)});
    TweenMax.to('.para',1,{opacity:1,x:30,delay:1.6});
    TweenMax.to('.bord',2,{opacity:1,scale:1,ease: Bounce.easeOut,delay:2});
    
}