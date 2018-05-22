var $allImgs = $('.images > img');
var imgLength = $allImgs.length;
var n =0;
slideInit($allImgs.eq(n));

setInterval(()=>{
    makeLeave($allImgs.eq(n)).one('transitionend',(e)=>{
        makeEnter($(e.currentTarget));
    });
    makeCurrent($allImgs.eq((n+1)%imgLength));
    n += 1;
    n %= imgLength;
},1500)






function slideInit($node){
    $node.addClass('current').siblings().addClass('enter');
}

function makeCurrent($node){
    $node.removeClass('enter').addClass('current');
}

function makeEnter($node){
    $node.removeClass('leave').addClass('enter');
}

function makeLeave($node){
    return $node.removeClass('current').addClass('leave');
}