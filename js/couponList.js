/**
 * Created by Administrator on 2017/6/26.
 */
$(function () {
  var id = +location.href.split("?")[1].split("=")[1];

  $.ajax({
    url:"http://localhost:9090/api/getcouponproduct",
    dataType:"json",
    data:{couponid:id},
    success:function (data) {
      //console.log(id);
      //console.log(data);
      var html=template("conTpl",data);
      //console.log(html);
      $(".goodsList").html(html);
    }
  })
  $(".goTop").on("click",function () {
    console.log(111);
    $(window).scrollTop(0);

  })

})