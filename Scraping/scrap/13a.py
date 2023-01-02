import time
from selenium import webdriver

from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
import pandas as pd
from selenium.webdriver.common.by import By
options_chrom = Options()
options_chrom.add_argument("--no-sandbox")
options_chrom.add_argument("--headless")
options_chrom.add_argument("--disable-gpu")
options_chrom.add_argument("--window-size=1920,1080")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()),options=options_chrom)
website = 'https://www.adamchoi.co.uk/teamgoals/detailed'
driver.get(website)
#driver.switch_to.new_window('window')
driver.find_element(By.XPATH, '//label[@analytics-event="All matches"]').click()
box = driver.find_element(By.CLASS_NAME,'panel-body')
dropdown = Select(box.find_element(By.ID,'country'))
dropdown.select_by_visible_text('Spain')
time.sleep(5)
matches = driver.find_elements(By.CSS_SELECTOR,'tr')

all_matches = [match.text for match in matches]

df = pd.DataFrame({'goals': all_matches})
print(df)
df.to_csv('tutorial.csv', index=False)
time.sleep(6)
driver.close()
driver.quit()