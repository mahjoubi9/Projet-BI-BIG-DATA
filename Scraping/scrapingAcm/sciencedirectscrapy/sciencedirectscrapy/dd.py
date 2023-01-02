from datetime import date
from os import system
from time import time
import pandas as pd
from time import sleep
import time
from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
options_chrom = Options()
options_chrom.add_argument("--no-sandbox")
options_chrom.add_argument("--headless")
options_chrom.add_argument("--disable-gpu")
options_chrom.add_argument("--window-size=1920,1080")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()),options=options_chrom)
driver.get("https://www.sciencedirect.com/search?qs=blockchain&show=100")
print("gggggggg")
print(driver.page_source)
