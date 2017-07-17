/**
 * Created by Administrator on 2017/6/23.
 */
$(function () {
  function setPage(n) {
    $.ajax({
      url: 'http://localhost:9090/api/getmoneyctrl',
      type: "get",
      dataType: "json",
      data: {pageid:n},
      success: function (data) {
        var html=template("goodsTpl",data);
        $(".goods").html(html);
      }
    })
  }
  $.ajax({
    url:'http://localhost:9090/api/getmoneyctrl',
    type:"get",
    dataType:"json",
    success:function (data) {
      console.log(data);
      var html=template("goodsTpl",data);
      $(".goods").html(html);
      var count=Math.ceil(data.totalCount/data.pagesize);
      for(var i=0;i<count;i++){
        $("#changeSel").append('<option value='+(i+1)+'>'+(i+1)+"/"+count+'</option>');
      }
      var num=1;
      $("#changeSel").on("change",function () {
          var index=$(this).val();
          setPage(index);
          num=+index;
        console.log(num);
      })

      $(".upPage").on("click",function () {
          num--;
          num=num==0?count:num;
        setPage(num);
        $("#changeSel option").eq(num-1).prop("selected",true);
      })
      $(".nextPage").on("click",function () {
        num++;
        num=num==(count+1)?1:num;
        setPage(num);
        $("#changeSel option").eq(num-1).prop("selected",true);
      })
    }
  })

})