from itertools import count
import scrapy


class AcmSpider(scrapy.Spider):
    name = 'acm'
    #allowed_domains = ['gg']
    start_urls = ['https://dl.acm.org/action/doSearch?AllField=blockchain&startPage=0&pageSize=50']

    
    
    def parse(self, response):
        headers = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:48.0) Gecko/20100101 Firefox/48.0'}
        cc = 0
        for t in response.css('div.issue-item__detail'):
            #text= t.css('a::attr(href)').extract()[0]
            text= t.css('a::text').get()
            nombreDownload = response.xpath('.//li/span[@class="metric"]/span//text()').get()
            #nombreDownload=t.css('span.metric span::text').get()
            print('**************************************************************** ',nombreDownload)
            yield{
                'link':text,
                'nombreDownload':nombreDownload
            }
            cc = cc + 1

            
        next_page = response.xpath("//a[@class='pagination__btn--next']/@href").extract_first()
        if next_page is not None:
            #next_page = response.urljoin(next_page)
            print("**********************************",cc)
            yield scrapy.Request(next_page,headers=headers, callback=self.parse)
    
    
