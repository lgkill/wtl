 //首页
 //图片阴影效果
$(function(){
    $('.contentImg').mouseover(function(){
        $(".mt1", $(this)).attr("src", "../images/dian33.JPG");
        $(".mt2", $(this)).attr("src", "../images/dian11.JPG");
        $(".mt3", $(this)).attr("src", "../images/dian22.JPG");
    });
     $('.contentImg').mouseout(function(){
        $(".mt1", $(this)).attr("src", "../images/dian3.JPG");
        $(".mt2", $(this)).attr("src", "../images/dian1.JPG");
        $(".mt3", $(this)).attr("src", "../images/dian2.JPG");
    });  
})


/*产品中心页面*/

/*列表隐藏显示*/
$(function(){
    $(".listhide li:eq(1)").click(function(){      
        if($(".custody").css("display")=="none"){
            $(".custody").show(100);

        }else{
            $(".custody").hide(100); 
        }   
    });
    $(".listhide li:eq(5)").click(function(){
        if($(".sport").css("display")=="none"){
            $(".sport").show(100);
        }else{
            $(".sport").hide(100);
        }   
    });
    $(".listhide li:eq(7)").click(function(){
        if($(".Sphygmomanometer").css("display")=="none"){
            $(".Sphygmomanometer").show(100);
        }else{
            $(".Sphygmomanometer").hide(100);
        }   
    });
    $(".listhide li:eq(9)").click(function(){
        if($(".jhmk").css("display")=="none"){
            $(".jhmk").show(100);
        }else{
            $(".jhmk").hide(100);
        }   
    });
    $(".listhide li:eq(18)").click(function(){
        if($(".electric").css("display")=="none"){
            $(".electric").show(100);
        }else{
            $(".electric").hide(100);
        }   
    });
});



