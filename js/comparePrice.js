/**
 * Created by Administrator on 2017/6/23.
 */
$(function () {
  $.ajax({
    url: 'http://localhost:9090/api/getcategorytitle',
    type: "get",
    dataType: "json",
    success: function (data) {
      console.log(data);
     var html= template("contentTpl",data);
      $(".content").html(html);
      //循环注册
      $(".listBox>.title").each(function (index,element) {
          var flag=1;
          $(element).on("click",function () {
            $(".listBox ul").remove();
            $.ajax({
              url: 'http://localhost:9090/api/getcategory',
              type: "get",
              data:{titleid:$(element).data("id")},
              dataType: "json",
              success: function (data) {
                console.log(data);
                var html=template("listTpl",data);
                //console.log(html);
                $(".listBox").eq(index).append(html);
                if(flag){
                  flag=0;
                  $(".listBox ul").css("display","block");
                }else{
                  flag=1;
                  $(".listBox ul").css("display","none");
                }
              }

            })
          })
      })
    }
  })



})
