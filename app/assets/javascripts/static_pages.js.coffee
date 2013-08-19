jQuery ->
  sequence = []
  duration = 1000
  wait = 500
  buttons = $('button')
  index = 0

  initialize = () ->
    sequence = []
    index = 0

  # Computer goes for its turn
  comp_turn = () -> 
    random_number = Math.floor(Math.random()*4)   
    sequence.push(random_number)
    # Flash each button based on it's position in the sequence
    flash_button value, key for value, key in sequence

  # Small fucntion to flash button on and off
  flash_button = (button_index, counter) -> 
    setTimeout (->
      button = buttons.eq(button_index)
      button.addClass 'active'
      setTimeout (->
        button.removeClass 'active'
      ), duration
    ), counter * (duration + wait)


  # Human turn and he clicks a button
  clicked_button = buttons.on "click", (event) ->
    clicked_button = $(event.target).attr('class')
    switch clicked_button
      when "green"
        clicked_button = 0
      when "red"
        clicked_button = 1
      when "yellow"
        clicked_button = 2
      when "blue"
        clicked_button = 3
      else
        console.log "Bad Click"

    if clicked_button == sequence[index]
      ++index
      # Following is if we get them all right
      if index == sequence.length 
        index = 0
        comp_turn()
    else 
      alert "You Loose"
      start_game()

  start_game = () ->
    initialize()
    comp_turn()

  start_game()
