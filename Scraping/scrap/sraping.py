from selenium import webdriver
from selenium.webdriver.support.ui import Select
import pandas as pd
import time
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

from selenium.webdriver.chrome.service import Service as ChromiumService
from webdriver_manager.core.utils import ChromeType

driver = webdriver.Chrome(service=ChromiumService(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install()))
#driver = webdriver.Chrome(ChromeDriverManager().install())
#driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
#driver = webdriver.Chrome(ChromeDriverManager().install())
chrome_options = Options()
#chrome_options.add_argument('--headless') sudo apt purge google-chrome-stable
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')

# Topics: Locate a button, select element within dropdown and extract data from a table

# define the website to scrape and path where the chromediver is located
website = 'https://www.adamchoi.co.uk/teamgoals/detailed'
path = '/home/mahjoubi/Documents/Scraping/chromedriver'
# write the path here

# define 'driver' variable
#driver = webdriver.Chrome(path,chrome_options=chrome_options)
# open Google Chrome with chromedriver
driver.get(website)

# locate a button
#all_matches_button = driver.find_element_by_xpath('//label[@analytics-event="All matches"]')
# click on a button
#all_matches_button.click()

# using the "box" section as a reference to help us locate an element inside
driver.find_element(By.XPATH, '//label[@analytics-event="All matches"]').click()
box = driver.find_element(By.CLASS_NAME,'panel-body')
# select dropdown and select element inside by visible text
dropdown = Select(box.find_element(By.ID,'country'))
dropdown.select_by_visible_text('Spain')
# implicit wait (useful in JavaScript driven websites when elements need seconds to load and avoid error "ElementNotVisibleException")
time.sleep(5)
# select elements in the table
matches = driver.find_elements(By.CSS_SELECTOR,'tr')

# storage in a list
all_matches = [match.text for match in matches]

#quit drive we opened in the beginning
#driver.quit()

# Bonus: Create Dataframe in Pandas and export to CSV (Excel)
df = pd.DataFrame({'goals': all_matches})
print(df)
df.to_csv('tutorial.csv', index=False)
