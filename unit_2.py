# -*- coding: utf-8 -*-

NAME = 'torch'
exec('import '+NAME)

A1 = [i for i in dir(eval(NAME)) if "" in i and "__" not in i]

import math

A2 = [i for i in dir(math) if '__' not in i]
#print A2

A3 = list(set([NAME+'.'+i for i in A1 if i not in A2]))[:]

#dir(eval('torch.'+i))

#print A3

def lib(a):
	return [a+'.'+i for i in dir(eval(a)) if "__" not in i]

#print(lib(NAME))

# def lib2(a):


		
# 	A = [lib(b) for b in lib(a) if lib(b)]
# 	# simple A
	
# 	for i in A:
# 		if lib(i):
# 			lib2(i)
# 	A = [lib2(i) for ii in A for i in ii if lib(i)]
# 	return A
# print (lib2(NAME)[:100])

word = 'lib'

print [i+'.'+ii for i in  A3 for ii in dir(eval(i)) if '__' not in ii if i!=[]  if word in ii.split('.')[-1]]


'''
import pymysql
from pymysql.cursors import DictCursor
connection = pymysql.connect(
    host='localhost',
    user='user',
    password='password',
    db='iata',
    charset='utf8mb4',
    cursorclass=DictCursor)

  	
connection.close()
'''

def matrix_product(X,Y):
	n_xrows, n_xcols = X.shape
	n_yrows, n_ycols = Y.shape
	Z = Matrix.zeros((n_xrows, n_ycols))
	for i in range(n_xrows):

		#Xi, Zi = X[i], Z[i]
		for j in range(n_xcols):
			for k in range(n_ycols):
				#2 acc = 0
				Z[i][k]  += X[i][j]*Y[i][k]
				#2 for j in range(n_xcols): 	acc+=Xi[j]*Y[i][k]
				#2 Zi[k] = acc

				#1 Z[i][k] = sum(Xi[j]*Y[j][k] )

		return Z



#import tiimeit 

setup = '''
shape = 64, 64
X = matrix.random(shape)
Y = matrix.random(shape)
'''
#tiimeit.tiimeit(matrix_product, setup, number = 10)



'''
import cProfile

#source = open('').read()

source = matrix_product(10,10)

cP0rofile.run(source, sort = "tottime")


import line_profiler

#построчный анализ кода по времени

'''