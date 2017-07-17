/**
 * Created by Administrator on 2017/6/23.
 */
$(function () {
  $.ajax({
    url: 'http://localhost:9090/api/getindexmenu',
    type: "get",
    dataType: "json",
    success: function (data) {
      var html = template("navTpl", data);
      $(".box").html(html);
      console.log(data.result);
      $(data.result).each(function (index, element) {

        console.log(element.name);

        if (element.name == "更多") {
          //注意下面注册委托事件时候第二个参数只能传选择器，而不是一个对象
          $(".box>div:nth-child(" + (index + 1) + ")").addClass("hhhh");
          var flag = 1;
          $(".box").on("click", ".hhhh", function () {
            if (flag == 1) {
              flag = 0;
              $(".hhhh").find("p").text("隐藏");
              $(".box>div:nth-last-child(-n+4)").fadeIn();
            } else {
              flag = 1;
              $(".hhhh").find("p").text("更多");
              $(".box>div:nth-last-child(-n+4)").fadeOut();
            }
          })
        }
      })
    }
  })
  $.ajax({
    url: 'http://localhost:9090/api/getmoneyctrl',
    type: "get",
    dataType: "json",
    success: function (data) {
      var html = template("goodsTpl", data);
      $(".goods").html(html);
    }
  })

})
