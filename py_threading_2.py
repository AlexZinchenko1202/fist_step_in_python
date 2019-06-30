
import time 
import random
from threading import Thread

class MyThread(Thread):
	def __init__(self, name):
		Thread.__init__(self)
		self.name = name

	def run(self):
		amount = random.randint(3,7)
		time.sleep(amount)
		msg = "%s is running" % self.name
		print(msg)


def start_threads():
	for i in xrange(5):
		name = "Thread #%s" %(i+1)
		my_thread = MyThread(name)
		my_thread.start()

if __name__=="__main__":
	start_threads()

	exit(0)
