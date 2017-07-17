/**
 * Created by Administrator on 2017/6/26.
 */
$(function () {
  var id=+location.href.split("?")[1].split("=")[1];
  //console.log(id);
  //请求十大排名
  $.ajax({
    url:"http://localhost:9090/api/getbrand",
    dataType:"json",
    data:{brandtitleid:id},
    //成功部分
    success:function (data) {
      console.log(data);
      var html=template("electricTpl",data);
      $(".electric").html(html);
      //设置点击事件
      $(".electric>li").on("click",function () {
        //获取自定义属性id的值
        var titId=$(this).data("id");
        console.log(titId);
        //请求销量排行
        $.ajax({
          url:"http://localhost:9090/api/getbrandproductlist",
          dataType:"json",
          data:{brandtitleid:titId,
            pagesize:4
          },
          success:function (data) {
            console.log(data);
            var html=template("productTpl",data);
            $(".productGoods").html(html);
            //商品点击去看评论
            $(".content").on("click",function () {

                var proId=$(this).data("id");
              console.log(proId);
              $.ajax({
                url:"http://localhost:9090/api/getproductcom",
                dataType:"json",
                data:{productid :proId},
                success:function (data) {
                  console.log(data);
                  var html=template("discussTpl",data)
                  $(".goodsdiscuss").html(html);
                }
              })
            })
          }
        })
      })

    }
  })
})