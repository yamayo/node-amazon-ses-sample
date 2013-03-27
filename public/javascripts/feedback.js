$(function(){
  
  $('#send').click(function(){
    $.ajax({
      type: 'post',
      url: 'feedback',
      data: {
        text: $('#feedback').val()
      },
      success: function(data) {
        alert('success');
        $('#feedback').val('');
      },
      fail: function(err) {
        alert(err);
      }
    });

  });

});