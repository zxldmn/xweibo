// Generated by CoffeeScript 1.7.1
$(function() {
  $.ajax({
    'type': 'get',
    'contentType': 'application/json',
    'url': '/sina/getinfluence',
    'success': function(data) {
      var stander_Ia, tmp, tmpdata, tmpdatas, _i, _j, _len, _len1;
      alert(data);
      data = data.replace(/u'/g, '\'');
      data = data.replace(/\'/g, '"');
      alert(data);
      data = JSON.parse(data);
      alert(data);
      tmp = '';
      tmpdatas = data['data'];
      stander_Ia = 0;
      for (_i = 0, _len = tmpdatas.length; _i < _len; _i++) {
        tmpdata = tmpdatas[_i];
        if (tmpdata.screen_name === '喵晓琳') {
          stander_Ia = tmpdata.Ia;
        }
      }
      alert(stander_Ia);
      for (_j = 0, _len1 = tmpdatas.length; _j < _len1; _j++) {
        tmpdata = tmpdatas[_j];
        if (tmpdata.screen_name === '喵晓琳') {
          tmp += '<tr> <th id="screen_name">' + tmpdata.screen_name + '</th> <th id="Ie">' + tmpdata.Ie + '</th> <th id="Ic">' + tmpdata.Ic + '</th> <th id="Ia">' + tmpdata.Ia + '</th> <th id="I">' + 1 + '</th> </tr>';
        } else {
          tmp += '<tr> <th id="screen_name">' + tmpdata.screen_name + '</th> <th id="Ie">' + tmpdata.Ie + '</th> <th id="Ic">' + tmpdata.Ic + '</th> <th id="Ia">' + tmpdata.Ia + '</th> <th id="I">' + ((1 / stander_Ia) * tmpdata.Ia).toFixed(4) + '</th> </tr>';
        }
      }
      $("#influence-table").html('<tr> <th >用户昵称</th> <th >用户直接影响力(Ie)</th> <th >用户级联影响力(Ic)</th> <th >用户绝对影响力(Ia)</th> <th>用户相对影响力(I)</th> </tr>' + tmp);
    }
  });
});
