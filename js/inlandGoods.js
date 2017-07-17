/**
 * Created by Administrator on 2017/6/25.
 */
$(function () {
  //取地址栏id
  var id = +location.href.split("?")[1].split("=")[1];
  function setPage(n, fn) {
    console.log(id);
    $.ajax({
      url: n,
      dataType: "json",
      data: {productid: id},
      success: fn
    })
  }

  if (id>=20) {
    setPage("http://localhost:9090/api/getmoneyctrl", function (data) {
      console.log(data);
      for(var i=0;i<data.result.length;i++){
        if(data.result[i].productId==id){
          var dt=data.result[i];
        }
      }
        var array= $.makeArray(dt);
      var obj={};
      obj.result=array;
      console.log(obj);
      var html = template("contentTpl2", obj);
      $(".content").html(html);
      var ohtml = template("commentTpl2", obj);
      $(".comment").html(ohtml);
    });
  } else {
    setPage("http://localhost:9090/api/getdiscountproduct", function (data) {
      console.log(data);
      var html = template("contentTpl", data);
      $(".content").html(html);
      var ohtml = template("commentTpl", data);
      $(".comment").html(ohtml);
    });
  }
})

