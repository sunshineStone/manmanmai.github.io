/**
 * Created by Administrator on 2017/6/26.
 */
$(function () {
  $.ajax({
    url:"http://localhost:9090/api/getbaicaijiatitle",
    dataType:"json",
    success:function (data) {
      console.log(data);
      var html=template("titTpl",data);
      $(".tit").html(html);
      $.ajax({
        url: "http://localhost:9090/api/getbaicaijiaproduct",
        dataType: "json",
        data:{titleid:0},
        success: function (data) {
          console.log(data);
          var html=template("contentTpl",data);
          $(".content").html(html);
        }
      })
      //点击事件
      $(".tit .list").on("click",function () {
        //获取自定义属性id的值
        var id=$(this).data("id");
        console.log(id);
        $.ajax({
          url: "http://localhost:9090/api/getbaicaijiaproduct",
          dataType: "json",
          data:{titleid:id},
          success: function (data) {
            console.log(data);
            var html=template("contentTpl",data);
            $(".content").html(html);

          }
        })
      })
    }
  })
})