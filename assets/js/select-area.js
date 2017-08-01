//提交选择月份
var json =[{
  "id": "1",
  "name": "一个月",
},{
  "id": "2",
  "name": "二个月",
},{
  "id": "3",
  "name": "三个月",
},{
  "id": "4",
  "name": "四个月",
},{
  "id": "5",
  "name": "五个月",
},{
  "id": "6",
  "name": "六个月",
},{
  "id": "7",
  "name": "七个月",
},{
  "id": "8",
  "name": "八个月",
},{
  "id": "9",
  "name": "九个月",
},{
  "id": "10",
  "name": "十个月",
},{
  "id": "11",
  "name": "十一个月",
},{
  "id": "12",
  "name": "十二个月",
}];
var selectArea2 = new MobileSelectArea();
selectArea2.init({trigger:'#zfbtn',level:1,value:$('#zfbtn').data('value'),data:json,eventName:'click'});
