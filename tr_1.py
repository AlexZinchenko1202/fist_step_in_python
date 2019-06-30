import os
from threading import Thread 
import urllib2

class DownloadThread(Thread):
	def __init__(self, name, url):
		Thread.__init__(self)
		self.name = name
		self.url = url

	def run(self):
		handle = os.path.basename(self.url)
		fname = urllib2.urlopen(self.url)

		with open(fname, "wb") as f_handle:
			while True:
				chunk = handle.read(1024)
				if not chunk:
					break
				f_handle.write(chunk)

		msg = "%s download is closed %s" % (name, url)
		print(msg)




def main(urls):

	for item, url in enumerate(urls):

		name='Thread %s is downloaded %s' %(item+1,url)
		print(name)
		thread = DownloadThread(name, url)
		thread.start()

	


if __name__=="__main__":
	urls = ["http://www.irs.gov/pub/irs-pdf/f1040.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040a.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040ez.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040es.pdf",
            "http://www.irs.gov/pub/irs-pdf/f1040sb.pdf"]
	
	main(urls)


