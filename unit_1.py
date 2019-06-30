import unittest
import doctest
import itertools

#print('\n'.join(dir(doctest)))
#return [(i,arg.count(i)) for i in list(set(arg))]

def rie(iterable):
	"""
	list(rie())
	[]

	list(rie('mississippi'))
	[('m', 1), ('i', 1), ('s', 2), ('i', 1), 
	('s', 2), ('i', 1), ('p', 2), ('i', 1)]
	"""

	for item, g in itertools.groupby(iterable):
		yield item, sum(1 for _ in g)

def test_rie():
	print(list(rie("mississippi")))

test_rie()




if __name__ == '__main__':
	doctest.testmod()

