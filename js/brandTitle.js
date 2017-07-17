/**
 * Created by Administrator on 2017/6/26.
 */
$(function () {
  $.ajax({
    url:"http://localhost:9090/api/getbrandtitle",
    dataType:"json",
    success:function (data) {
      console.log(data);
      var html=template("listTpl",data);
      $(".list").html(html);

    }
  })
})