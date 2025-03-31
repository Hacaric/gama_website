import tkinter as tk
from tkinter import Label, Text
import os

# Create the main window
root = tk.Tk()
root.attributes('-fullscreen', True)  # Fullscreen mode
root.configure(bg='#0078D7')  # Windows blue color

# Hide cursor (important for realism)
root.config(cursor="none")

# Fake BSOD text
bsod_text = """
:(

Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.

0% complete

For more information about this issue and possible fixes, visit https://www.windows.com/stopcode

If you call a support person, give them this info:
Stop Code: CRITICAL_PROCESS_DIED
"""

# Display the text with wrapping
label = Label(root, text=bsod_text, font=("Consolas", 20), fg='white', bg='#0078D7', justify='left', wraplength=1000)
label.pack(expand=True, padx=20, pady=20)

# Prevent closing with Alt+F4
def disable_close():
    pass
root.protocol("WM_DELETE_WINDOW", disable_close)

root.attributes('-topmost', True)

# Start the fake BSOD
root.mainloop()