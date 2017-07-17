/**
 * Created by Administrator on 2017/6/24.
 */
$(function () {
  var str=location.href;
  var strArr=str.split("?");
  var id=(strArr[1].split("="))[1];
  $.ajax({
    url:"http://localhost:9090/api/getproduct",
    data:{productid :id},
    success:function (data) {
      //console.log(data);
      var html=template("goodsTpl",data);
      $(".goods").html(html);
      var ohtml=template("lastMenu",data);
      $(".lastMenu").html(ohtml);
    }
  })
  $.ajax({
    url:"http://localhost:9090/api/getproductcom",
    data:{productid :id},
    success:function (data) {
      console.log(data);
      var html=template("discussTpl",data);
      $(".discuss").html(html);
    }
  })

})