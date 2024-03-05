import random
import os
import tkinter as tk
from tkinter import messagebox

def create_targets(names):
    if len(names) % 2 != 0:
        names.append("Eve")

    random.shuffle(names)
    targets = {}

    for i in range(len(names)):
        current_name = names[i]
        next_index = (i + 1) % len(names)
        while names[next_index] == current_name or names[next_index] in targets.values() or (names[next_index] in targets and targets[names[next_index]] == current_name):
            next_index = (next_index + 1) % len(names)
        targets[current_name] = names[next_index]

    for name, target in targets.items():
        file_path = os.path.join(os.getcwd(), f"{name}_target.txt")
        with open(file_path, "w") as file:
            file.write(f"{name}'s target is {target}")

def generate_targets():
    names = name_entry.get().split(",")
    num_names = len(names)
    if num_names < 2:
        messagebox.showerror("Error", "Please enter at least two names.")
        return
    create_targets(names)
    messagebox.showinfo("Success", "Targets generated successfully!")
  
window = tk.Tk()
window.title("Target Generator")
name_label = tk.Label(window, text="Enter names (separated by comma):")
name_label.grid(row=0, column=0, padx=10, pady=5, sticky="e")
name_entry = tk.Entry(window)
name_entry.grid(row=0, column=1, padx=10, pady=5, sticky="ew")
generate_button = tk.Button(window, text="Generate Targets", command=generate_targets)
generate_button.grid(row=1, column=0, columnspan=2, padx=10, pady=5)
window.mainloop()
