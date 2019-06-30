import webbrowser


urls ='''
https://neurohive.io/ru/tutorial/glubokoe-obuchenie-s-pytorch/
https://tproger.ru/translations/scikit-learn-in-python/
https://habr.com/ru/post/413381/
https://habr.com/ru/post/257903/
https://python-scripts.com/sqlite
https://spb.hh.ru/vacancy/31868400?utm_source=jooble.org&utm_medium=meta&utm_campaign=RU
'''

[ webbrowser.open(i) for i in urls.split('\n')]
