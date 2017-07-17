/**
 * Created by Administrator on 2017/6/24.
 */
$(function () {
  var str=location.href;
  var strArr=str.split("?");
  var id=(strArr[1].split("="))[1];
  //方法简单封装
  function setPage(n) {
    $.ajax({
      url:'http://localhost:9090/api/getproductlist',
      data:{categoryid:id,
        pageid:n
      },
      success:function (data) {
        var html=template("goodsList",data);
        $(".goods").html(html);
      }
    })
  }
  $.ajax({
    url:'http://localhost:9090/api/getproductlist',
    data:{categoryid:id,
      pageid:1
    },
    success:function (data) {
      console.log(data);
      var html=template("goodsList",data);
      $(".goods").html(html);
      var totlePage=Math.ceil(data.totalCount/data.pagesize);
      //动态生成option标签
      for(var i=0;i<totlePage;i++){
        $(".changePage>select").append('<option value='+i+'>'+(i+1)+'/'+totlePage+'</option>');
      };
      //表单值发生改变时候
      var num=1;
      $(".changePage>select").on("change",function () {
        var optionid=+$(this).val()+1;
        //console.log(optionid);
        //请求数据
        setPage(optionid);
        num=+optionid;
      });


        $(".upPage").on("click",function () {
            num--;
          num=(num==0?totlePage:num);
          setPage(num);
          var option=$(".changePage select>option").eq(num-1);
          option.prop("selected",true);
        })

        $(".nextPage").on("click",function () {
          num++;
          num=(num==(totlePage+1)?1:num);
          setPage(num);
          $(".changePage select>option").eq(num-1).prop("selected",true);
        });
    }
  })
  $.ajax({
    url:'http://192.168.70.43:9090/api/getcategorybyid',
    data:{categoryid:id},
    success:function (data) {
      //console.log(data.result[0].categoryId);
      var html=template("lastMenu",data);
      $(".lastMenu").html(html);
      //console.log(str);
      $(".lastMenu a").css("href",str);
      $(".picId").css("href",str+"&&"+data.result[0].categoryId);
    }
  })

})

