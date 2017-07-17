/**
 * Created by Administrator on 2017/6/26.
 */
$(function () {
  $.ajax({
    url:"http://localhost:9090/api/getcoupon",
    dataType:"json",
    success:function (data) {
      console.log(data);
      var html=template("conTpl",data);
      console.log(html);
      $(".content").html(html);
    }
  })
})