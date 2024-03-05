import pyautogui
import pytesseract
import os
from datetime import datetime

# Configure Tesseract path
TesseractPath = r'F:\tesseract.exe' 
try:
    pytesseract.pytesseract.tesseract_cmd = TesseractPath
except Exception as e:
    print(f"Error setting Tesseract path: {e}")
    exit()

def element_name_to_abbreviation(element_name):
    element_dict = {
'Hydrogen': 'H',
'Helium': 'He',
'Lithium': 'Li',
'Beryllium': 'Be',
'Boron': 'B',
'Carbon': 'C',
'Nitrogen': 'N',
'Oxygen': 'O',
'Fluorine': 'F',
'Neon': 'Ne',
'Sodium': 'Na',
'Magnesium': 'Mg',
'Aluminum': 'Al',
'Silicon': 'Si',
'Phosphorus': 'P',
'Sulfur': 'S',
'Chlorine': 'Cl',
'Argon': 'Ar',
'Potassium': 'K',
'Calcium': 'Ca',
'Scandium': 'Sc',
'Titanium': 'Ti',
'Vanadium': 'V',
'Chromium': 'Cr',
'Manganese': 'Mn',
'Iron': 'Fe',
'Nickel': 'Ni',
'Copper': 'Cu',
'Zinc': 'Zn',
'Gallium': 'Ga',
'Germanium': 'Ge',
'Arsenic': 'As',
'Selenium': 'Se',
'Bromine': 'Br',
'Krypton': 'Kr',
'Rubidium': 'Rb',
'Strontium': 'Sr',
'Yttrium': 'Y',
'Zirconium': 'Zr',
'Niobium': 'Nb',
'Molybdenum': 'Mo',
'Technetium': 'Tc',
'Ruthenium': 'Ru',
'Rhodium': 'Rh',
'Palladium': 'Pd',
'Silver': 'Ag',
'Cadmium': 'Cd',
'Indium': 'In',
'Tin': 'Sn',
'Antimony': 'Sb',
'Tellurium': 'Te',
'Iodine': 'I',
'Xenon': 'Xe',
'Cesium': 'Cs',
'Barium': 'Ba',
'Lanthanum': 'La',
'Cerium': 'Ce',
'Praseodymium': 'Pr',
'Neodymium': 'Nd',
'Promethium': 'Pm',
'Samarium': 'Sm',
'Europium': 'Eu',
'Gadolinium': 'Gd',
'Terbium': 'Tb',
'Dysprosium': 'Dy',
'Holmium': 'Ho',
'Erbium': 'Er',
'Thulium': 'Tm',
'Ytterbium': 'Yb',
'Lutetium': 'Lu',
'Hafnium': 'Hf',
'Tantalum': 'Ta',
'Tungsten': 'W',
'Rhenium': 'Re',
'Osmium': 'Os',
'Iridium': 'Ir',
'Platinum': 'Pt',
'Gold': 'Au',
'Mercury': 'Hg',
'Thallium': 'Tl',
'Lead': 'Pb',
'Bismuth': 'Bi',
'Polonium': 'Po',
'Astatine': 'At',
'Radon': 'Rn',
'Francium': 'Fr',
'Radium': 'Ra',
'Actinium': 'Ac',
'Thorium': 'Th',
'Protactinium': 'Pa',
'Uranium': 'U',
'Neptunium': 'Np',
'Plutonium': 'Pu',
'Americium': 'Am',
'Curium': 'Cm',
'Berkelium': 'Bk',
'Californium': 'Cf',
'Einsteinium': 'Es',
'Fermium': 'Fm',
'Mendelevium': 'Md',
'Nobelium': 'No',
'Lawrencium': 'Lr',
'Rutherfordium': 'Rf',
'Dubnium': 'Db',
'Seaborgium': 'Sg',
'Bohrium': 'Bh',
'Hassium': 'Hs',
'Meitnerium': 'Mt',
'Darmstadtium': 'Ds',
'Roentgenium': 'Rg',
'Copernicium': 'Cn',
'Nihonium': 'Nh',
'Flerovium': 'Fl',
'Moscovium': 'Mc',
'Livermorium': 'Lv',
'Tennessine': 'Ts',
'Oganesson': 'Og'
        # ... Add other elements as needed
    }
    return element_dict.get(element_name, '')

def capture_and_save_screenshot(region, save_dir):
    try:
        screenshot = pyautogui.screenshot(region=region)
        
        counter = 0
        while True:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            screenshot_path = os.path.join(save_dir, f"screenshot_{timestamp}_{counter}.png")
            
            if not os.path.exists(screenshot_path):
                screenshot.save(screenshot_path)
                break
            counter += 1
        
        return screenshot_path
    except Exception as e:
        print(f"Error capturing and saving screenshot: {e}")
        return ""

def extract_text_from_saved_screenshot(screenshot_path):
    try:
        return pytesseract.image_to_string(screenshot_path).strip()
    except Exception as e:
        print(f"Error extracting text from screenshot: {e}")
        return ""

def click_on_location(text, region):
    try:
        locations = pyautogui.locateAllOnScreen(text, region=region, confidence=0.8)  
        for location in locations:
            pyautogui.click(location)
            break  
    except Exception as e:
        print(f"Error clicking on location: {e}")

prompt_region = (1421, 468, 150, 32)  # Coordinates for "Click on ___" text
table_region = (1239, 531, 946, 528)  # Coordinates for the entire periodic table

# Directory to save screenshots
save_dir = r"F:\images" 
try:
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)
except Exception as e:
    print(f"Error creating save directory: {e}")
    exit()


last_prompt_text = ""
repetition_count = 0
MAX_REPETITIONS = 5 

error_count = 0
MAX_ERRORS = 5  

while True:
    try:
        screenshot_path = capture_and_save_screenshot(prompt_region, save_dir)
        

        prompt_text = extract_text_from_saved_screenshot(screenshot_path)
        

        if prompt_text == last_prompt_text:
            repetition_count += 1
            if repetition_count > MAX_REPETITIONS:
                print("Periodic table seems to be blocked. Exiting...")
                break
        else:
            repetition_count = 0
        
        last_prompt_text = prompt_text

        element_name = prompt_text.split(" ")[-1]  

        # Get the abbreviation
        abbreviation = element_name_to_abbreviation(element_name)


        click_on_location(abbreviation, table_region)
        
    except Exception as e:
        error_count += 1
        print(f"Error in main loop: {e}")
        if error_count > MAX_ERRORS:
            print("Too many errors. Exiting...")
            break
