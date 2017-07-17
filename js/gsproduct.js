/**
 * Created by Administrator on 2017/6/26.
 */
$(function () {
  //全局两个id
  var sid=null;
  var aid=null;
  $.ajax({
    url:"http://localhost:9090/api/getgsshop",
    dataType:"json",
    success:function (data) {
      //console.log(data);
      var html=template("navTpl",data);

      $(".shopBox").html(html);
      //动态获取sid
      $(".shopBox select").on("change",function () {
        sid=$(".shopBox select").val();
      })
    }
  })
  $.ajax({
    url: "http://localhost:9090/api/getgsshoparea",
    dataType: "json",
    success: function (data) {

      var html=template("areaTpl",data);
      $(".areaBox").html(html);
      //两个select动态时候都需要加载
      $(".areaBox select").on("change",function () {
        //动态获取aid
        aid=$(".areaBox select").val();
        //动态加载
        $.ajax({
          url:"http://localhost:9090/api/getgsproduct",
          dataType: "json",
          //两个id进来为两个0
          data:{shopid:sid||0,areaid:aid||0},
          success:function (data) {
            //console.log(data);
            var html=template("goodsTpl",data);
            $(".goodsList").html(html);
          }
        })

      })

      $(".shopBox select").on("change",function () {
        //动态加载
        $.ajax({
          url:"http://localhost:9090/api/getgsproduct",
          dataType: "json",
          //两个id进来为两个0
          data:{shopid:sid||0,areaid:aid||0},
          success:function (data) {
            console.log(data);
            var html=template("goodsTpl",data);
            $(".goodsList").html(html);

          }
        })
      })
      $.ajax({
        url:"http://localhost:9090/api/getgsproduct",
        dataType: "json",
        //两个id进来为两个0
        data:{shopid:sid||0,areaid:aid||0},
        success:function (data) {
          //console.log(data);
          var html=template("goodsTpl",data);
          $(".goodsList").html(html);
        }
      })

    }
  })
})