# periodicsolve
An autosolver for a geogussr quiz I wanted to make when I was bored

---
## Tut.

1. Install the correct packages
   https://opencv.org/releases/ and
   https://tesseract-ocr.github.io/tessdoc/Installation.html

   then run these commands in cmd
 ```
pip install pyautogui
pip install pytesseract
pip install os
pip install datetime
 ```

2. Use coordinates.py to find the coordinates for the x, y and height, width of the periodic table and question prompt
   run this command in cmd
   ```
   python coordinates.py
   ```

3. Configure the script by replacing your directories for the tesseract.exe and your images folder
      This is needed because this script uses open cv and tesseract to recognize things in your screenshots that are saved in the folder to be able to make the choice where to choose

4. In theory now we are finished and you can run the script
      run this command in cmd

      ```
      python solver.py
      ```

      If something isn't working then run ```pip install pyscreeze``` but there also may be an error where it can't read the init.py file from the package and idk how to fix that yet




---
