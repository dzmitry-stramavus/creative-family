(function () {

  $(document).ready(function(e) {
    var response = [],
        testBlockHtml = '',
        testBlock = $('#test-block');

    $.getJSON('random.json?id=5', function (data) {
      response = data;

      activateBlock();
    });

    function activateBlock() {
      response.forEach(function (item) {
        testBlockHtml += '<li>' + item.company + ' ' + item.phone + '</li>';
      });
      testBlock.html(testBlockHtml);
    }

  });

})();

