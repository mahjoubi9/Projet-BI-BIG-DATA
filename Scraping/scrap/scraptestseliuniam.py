
import time
from selenium import webdriver
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver import FirefoxOptions


options = FirefoxOptions()
options.add_argument("--no-sandbox")
options.add_argument("--headless")
options.add_argument("--disable-gpu")
options.add_argument("--window-size=1920,1080")
options.log.level = "trace"
website = 'https://www.adamchoi.co.uk/teamgoals/detailed'


try:
   print("dddddd")
   driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()),options=options)
   print("sssssss")
# from selenium import webdriver
# driver = webdriver.Chrome('geckodriver')
except KeyboardInterrupt:
    print("Quitting")
    print("Done")
print("After loop and stuff")

driver.get(website) 

time.sleep(5)
driver.close()
driver.quit()
