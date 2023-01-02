import scrapy
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
import zlib

options_chrom = Options()
options_chrom.add_argument("--no-sandbox")
options_chrom.add_argument("--headless")
options_chrom.add_argument("--disable-gpu")
options_chrom.add_argument("--window-size=1920,1080")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()),options=options_chrom)

nombrepub = 0



class SciencedirectscrapypageSpider(scrapy.Spider):
    name = 'sciencedirectscrapypage'
   # allowed_domains = ['gg']
    start_urls = ['https://www.sciencedirect.com/search?qs=blockchain&show=100']
    
    agent = {"User-Agent":'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'}
    
    def start_requests(self):
        #driver.get(self.start_urls)
        sleep(2)
        #print(driver.page_source)
        #box = driver.find_element(By.XPATH,'//*[@id="gh-main-cnt"]/div[1]/div/nav[1]/ul/li/a/span').text
        print("#####################################################11111111")
        # try:
        #   print("########################################")
        #   print( response.xpath('.//ol[@class="search-result-wrapper"]/li[@data-doi]//h2/span/a/@href'))
        # except:
        #   print("######################################## exption")
        # headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'}
        # cc = 0
        # for t in response.xpath('.//ol[@class="search-result-wrapper"]/li[@data-doi]//h2/span/a/@href'):
        #     #text= t.css('a::attr(href)').extract()[0]
        #     text= t.css('a::text').get()
        #     print('**************************************************************** ',text)
        #     sleep(2)
        #     yield{
        #         'link':text,
        #     }
        #     cc = cc + 1

            
        # next_page = response.xpath("//a[@data-aa-region='srp-pagination']/@href").extract_first()
        # if next_page is not None:
        #     sleep(3)
        #     #next_page = response.urljoin(next_page)
        #     print("**********************************",cc)
        
        
        # i add meta for not redicrete ver authontification
      #  yield scrapy.Request("https://www.sciencedirect.com/search?qs=blockchain&show=100",meta = {'dont_redirect': True,'handle_httpstatus_list': [302]},headers=self.agent, callback=self.parse)
        yield scrapy.Request("https://www.sciencedirect.com/search?qs=blockchain&show=100",headers=self.agent, callback=self.parse)
    
    def parse(self, response):
        print("###################################1")
        try :
            print(self.request)
            #zlib.decompress(request.body, 15+32)
        except:
            print("exption"+ "#########################2" )
        print("###################################3")
        bbb = response.xpath('.//ol[@class="search-result-wrapper"]/li[@data-doi]').extract_first()
        print(bbb)
        print("###################################123")
        
        
        




# import scrapy
# from datetime import date
# from os import system
# from time import time
# import pandas as pd
# from time import sleep
# import time
# from selenium import webdriver

# from selenium.webdriver.support.ui import Select
# from selenium.webdriver.chrome.service import Service as ChromeService
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.common.by import By
# options_chrom = Options()
# options_chrom.add_argument("--no-sandbox")
# options_chrom.add_argument("--headless")
# options_chrom.add_argument("--disable-gpu")
# options_chrom.add_argument("--window-size=1920,1080")
# driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()),options=options_chrom)

# nombrepub = 0



# class SciencedirectscrapypageSpider(scrapy.Spider):
#     name = 'sciencedirectscrapypage'
#    # allowed_domains = ['gg']
   
    


# def start_requests(self):
#         sleep(4)
#         nombrepub = 0
        
#         start_urls = ['https://www.sciencedirect.com/search?qs=blockchain&show=100']

        
#         #headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'}

#         #headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'}
#         #driver.get(start_urls)
#         sleep(4)
#         #.//ol[@class="search-result-wrapper"]/li[@data-doi]//h2/span/a/span/span//text()
#         #.//ol[@class="search-result-wrapper"]/li[@data-doi]   
#         # yield scrapy.Request(self.start_urls,headers=headers, callback=self.parse)
#         yield scrapy.Request(start_urls,callback=self.parse)
        
        
        
# def parse(self, response):
      
#         # try:
#         #  driver.find_element(By.XPATH, './/a[@class="publication-history-link w-slide__btn tab-link slide-active"]').click()
#         # except:
#         #  print('################################################################ driver.find_element failed')
#         print("^^^^^^^^^^^^^^^^lllllllllll^^^^^^^^^^^^^",response.request.url)

#         # driver.get(response.request.url)

#         # toutdivofpage = driver.find_element(By.XPATH, '//ol[@class="search-result-wrapper"]/li[@data-doi]//h2/span/a/span/span').text
#         # for url in toutdivofpage:
#         #     # try:
#         #     #  driver.get(url)
#         #     # except:
#         #     #  print('################################################################ driver.get failed')
#         #     #nombrepub=nombrepub+1
#         #     print("^^^^^^^^^^^^^^^")
#         #     #print('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',url)
#         #     print('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
#         #     sleep(4)
#         # # try:
#         # #     try:
#         # #      title = response.css('h1.citation__title::text').get()
#         # #     except:
#         # #      print("################################ title")
#         # #     try:
#         # #      date = response.css('span.CitationCoverDate::text').get()
#         # #     except:
#         # #      print("################################ date")
#         # #     try:
#         # #      abstract = response.css('div.abstractInFull p::text').get()
#         # #     except:
#         # #      print("################################ abstract")
#         # #     try:
#         # #      article_link = response.css('div.issue-item__detail a::text ').get()
#         # #     except:
#         # #      print("################################ article_link")
#         # #     try:
#         # #      Authors = response.css('div#sb-1 li.loa__item span.loa__author-name span::text').getall()
#         # #     except:
#         # #      print("################################ Authors")
#         # #     try:
#         # #      AuthorsFormation = response.xpath('.//div[@class="author-info__body"]//p//text()').getall()
#         # #     except:
#         # #      print("################################ AuthorsFormation")
#         # #     try:
#         # #      for author in Authors:
#         # #       print("********************************************************** "+author)
#         # #     except:
#         # #       print("################################ author")
#         # #     try:
#         # #      Publisher = response.xpath('.//p[@class="publisher__name"]//text()').get() 
#         # #     except:
#         # #      print("################################ Publisher")
#         # #     try:
#         # #      publisherAddress = response.xpath('.//p[@class="publisher__address"]//text()').get() 
#         # #     except:
#         # #      print("################################ publisherAddress")
#         # #     try:
#         # #      Qualifiers = response.xpath('.//ul[@class="qualifiers__list"]//li//text()').getall()
#         # #     except:
#         # #      print("################################ Qualifiers")
#         # #     try:
#         # #      ISBNPublication = response.xpath('..//div[@class="cover-image__details"]//div[@class="flex-container"][1]//span[2]//text()').get()
#         # #     except:
#         # #      print("################################ ISSNPublication")
#         # #     try:
#         # #      nombredePage = response.xpath('.//div[@class="cover-pages"]//text()').get()
#         # #     except:
#         # #      print("################################ nombredePage")
#         # #     try:
#         # #      Conference = response.css('span.epub-section__title::text').get()
#         # #     # Conference = response.css('span.event__code--text::text').get()#.//span[@class="event__code--text"]//text()
#         # #     except:
#         # #      print("################################ Conference")
#         # #     # try:
#         # #     #     Conference_title = response.xpath('.//a[@class="event__title"]//text()').get()
#         # #     # #   Conference_title = response.css('div.right--block a::taxt').get()#.//a[@class="event__title"]//text()
#         # #     # # #  for t in response.css('div.right--block'):
#         # #     # # #      Conference_title = t.css('a::text').get()
#         # #     # # #      print("dddddddddddddddddddddddddddddddddddddddddddd"+Conference_title)
            
#         # #     # except:
#         # #     #    print("################################ Conference_title")
#         # #     try:
#         # #      doi = response.xpath('.//div[@class="cover-image__details"]//div[@class="flex-container"][2]//span[2]//text()').get()
#         # #     except:
#         # #      print("################################ doi")
#         # #   #   try:
#         # #   #    city_country = response.xpath('.//div[@class="event__content"]//*[contains(@class,"map")]//span//text()').get()
#         # #   # #   city_country = response.css('div.map span::text').get()#.//div[@class="info map"]//span//text()
#         # #   #   except:
#         # #   #    print("################################ city_country")
#         # #     sleep(4)
#         # #     yield{
#         # #     'title': title,
#         # #     'date': date,
#         # #     'abstract': abstract,
#         # #     'article_link': article_link,
#         # #     'Authors' : Authors,
#         # #     'Publisher' : Publisher,
#         # #     'publisherAddress' : publisherAddress,
#         # #     'Qualifiers' : Qualifiers,
#         # #     'ISBN' : ISBNPublication,
#         # #     'nombredePage' : nombredePage,
#         # #     'AuthorsFormation' : AuthorsFormation,
#         # #     'Conference': Conference,
#         # #   #  'Conference_title' : Conference_title,
#         # #     'doi': doi,
#         # #     #'city_country': city_country,
#         # #     }
#         # # except:
#         # #    print("######################################################## Exception")
#         # # sleep(2)
        
        
        
#         import scrapy
# from datetime import date
# from os import system
# from time import time
# import pandas as pd
# from time import sleep
# import time
# from selenium import webdriver

# from selenium.webdriver.support.ui import Select
# from selenium.webdriver.chrome.service import Service as ChromeService
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.common.by import By
# options_chrom = Options()
# options_chrom.add_argument("--no-sandbox")
# options_chrom.add_argument("--headless")
# options_chrom.add_argument("--disable-gpu")
# options_chrom.add_argument("--window-size=1920,1080")
# driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()),options=options_chrom)

# nombrepub = 0



# class SciencedirectscrapypageSpider(scrapy.Spider):
#     name = 'sciencedirectscrapypage'
#    # allowed_domains = ['gg']
#     start_urls = ['https://dl.acm.org/action/doSearch?AllField=blockchain&startPage=0&pageSize=50']
    
 
    
#     def parse(self, response):
#         headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'}
#         cc = 0
#         for t in response.css('div.issue-item__detail'):
#             #text= t.css('a::attr(href)').extract()[0]
#             text= t.css('a::text').get()
#             nombreDownload = response.xpath('.//li/span[@class="metric"]/span//text()').get()
#             #nombreDownload=t.css('span.metric span::text').get()
#             print('**************************************************************** ',nombreDownload)
#             yield{
#                 'link':text,
#                 'nombreDownload':nombreDownload
#             }
#             cc = cc + 1

            
#         next_page = response.xpath("//a[@class='pagination__btn--next']/@href").extract_first()
#         if next_page is not None:
#             #next_page = response.urljoin(next_page)
#             print("**********************************",cc)
#             yield scrapy.Request(next_page,headers=headers, callback=self.parse)
