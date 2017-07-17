/**
 * Created by Administrator on 2017/6/26.
 */
$(function () {
  $.ajax({
    url:"http://localhost:9090/api/getsitenav",
    dataType:"json",
    success:function (data) {
      console.log(data);
      var html=template("navTpl",data);
      $(".nav").html(html);
    }
  })
})