# -*- coding: utf-8 -*-

name = 'sqlite3'

exec("import "+name)

func = [i for i in dir(eval(name))if dir(i) if "__" not in i]

func2 = [[ii for ii in dir(eval(name+'.'+i)) if "__" not in ii] for i in dir(eval(name)) if dir(i) if "__" not in i]

res = {}

for key, volume in zip(func, func2):
	key = name+"."+key
	if volume !=[]:	res[key] = volume
	#else: res[key] = "XXX"

#print res

def FUNC(name):
	mods = [name+'.'+i for i in dir(eval(name))if dir(i) if "__" not in i]

	print '\n'.join([('\n'+i+'.').join(dir(eval(i))) for i in mods if dir(eval(i))])
	return [name+'.'+i for i in dir(eval(name))if dir(i) if "__" not in i]


print ('\n').join(FUNC(name))