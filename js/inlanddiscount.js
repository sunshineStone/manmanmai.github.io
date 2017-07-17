/**
 * Created by Administrator on 2017/6/25.
 */
$(function () {
  var html=null
    $.ajax({
      url:"http://localhost:9090/api/getinlanddiscount",
      dataType:"json",
      success:function (data) {
        console.log(data);
             html=template("liTpl",data);
            $(".goodsList").html(html);
      }
    })
  //$(window).on("scroll",function () {
  //  var liHeight=$(".goodsList li").height();
  //var scrollHeight=$(this).scrollTop();
  //  //console.log(liHeight);
  //  if(scrollHeight>=liHeight){
  //    console.log(111);
  //    $(".goodsList").html(html);
  //      //$.ajax({
  //      //  url:"http://localhost:9090/api/getinlanddiscount",
  //      //  dataType:"json",
  //      //  success:function (data) {
  //      //    console.log(data);
  //      //    //var html=template("liTpl",data);
  //      //    $(".goodsList").html(html);
  //      //  }
  //      //})
  //  }
  //
  //})

})
