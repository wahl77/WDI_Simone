(function() {
  jQuery(function() {
    var buttons, clicked_button, comp_turn, duration, flash_button, index, initialize, sequence, start_game, wait;
    sequence = [];
    duration = 1000;
    wait = 500;
    buttons = $('button');
    index = 0;
    initialize = function() {
      sequence = [];
      return index = 0;
    };
    comp_turn = function() {
      var key, random_number, value, _i, _len, _results;
      random_number = Math.floor(Math.random() * 4);
      sequence.push(random_number);
      _results = [];
      for (key = _i = 0, _len = sequence.length; _i < _len; key = ++_i) {
        value = sequence[key];
        _results.push(flash_button(value, key));
      }
      return _results;
    };
    flash_button = function(button_index, counter) {
      return setTimeout((function() {
        var button;
        button = buttons.eq(button_index);
        button.addClass('active');
        return setTimeout((function() {
          return button.removeClass('active');
        }), duration);
      }), counter * (duration + wait));
    };
    clicked_button = buttons.on("click", function(event) {
      clicked_button = $(event.target).attr('class');
      switch (clicked_button) {
        case "green":
          clicked_button = 0;
          break;
        case "red":
          clicked_button = 1;
          break;
        case "yellow":
          clicked_button = 2;
          break;
        case "blue":
          clicked_button = 3;
          break;
        default:
          console.log("Bad Click");
      }
      if (clicked_button === sequence[index]) {
        ++index;
        if (index === sequence.length) {
          index = 0;
          return comp_turn();
        }
      } else {
        alert("You Lose");
        return start_game();
      }
    });
    start_game = function() {
      initialize();
      return comp_turn();
    };
    return start_game();
  });

}).call(this);
