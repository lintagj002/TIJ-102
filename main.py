def on_button_pressed_a():
    global aPressed, bPressed, start
    aPressed = True
    bPressed = False
    if aPressed:
        basic.pause(randint(500, 5000))
        start = input.running_time()
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . # . #
                        # . . . #
                        # # # # #
        """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global bPressed, aPressed
    bPressed = True
    aPressed = False
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global elapsed
    if aPressed:
        elapsed = input.running_time() - start
        basic.clear_screen()
        basic.show_number(elapsed, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

start = 0
bPressed = False
aPressed = False
elapsed = 0