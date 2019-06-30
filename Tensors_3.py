# -*- coding: utf-8 -*-
#!/usr/bin/env bash ENV_PATH="$HOME/environments/bin/activate" bash --rcfile $ENV_PATH -i

import os


comand ='''
cd environments

virtualenv -p python pytorch-env
source pytorch-env/bin/activate
 '''
# os.system(comand)


print("helo world !!! ")

import torch.nn as nn
import torch.nn.functional as F

from torch import optim

class Net(nn.Module):
   def __init__(self):
       super(Net, self).__init__()
       self.fc1 = nn.Linear(28 * 28, 200)
       self.fc2 = nn.Linear(200, 200)
       self.fc3 = nn.Linear(200, 10)
'''
import torch

print([i for i in dir(torch) if 'epochs' in i])

exit(0)

x = torch.Tensor(2, 3)

print(x)

#os.system('source pytorch-env/bin/deactivate')
'''

def forward(self, x):
   x = F.relu(self.fc1(x))
   x = F.relu(self.fc2(x))
   x = self.fc3(x)
   return F.log_softmax(x)

net = Net()
print(net)

learning_rate = 0.01

optimizer = optim.SGD(net.parameters(), lr=learning_rate, momentum=0.9)
# Создаем функцию потерь
criterion = nn.NLLLoss()

# запускаем главный тренировочный цикл
for epoch in range(epochs):
   for batch_idx, (data, target) in enumerate(train_loader):
       data, target = Variable(data), Variable(target)
# изменим размер с (batch_size, 1, 28, 28) на (batch_size, 28*28)
       data = data.view(-1, 28*28)
       optimizer.zero_grad()
       net_out = net(data)
       loss = criterion(net_out, target)
       loss.backward()
       optimizer.step()
       if batch_idx % log_interval == 0:
           print('Train Epoch: {} [{}/{} ({:.0f}%)]\tLoss: {:.6f}'.format(
                   epoch, batch_idx * len(data), len(train_loader.dataset),
                          100. * batch_idx / len(train_loader), loss.data[0]))


net_out = net(data)
loss = criterion(net_out, target)

loss.backward()
optimizer.step()

if batch_idx % log_interval == 0:
   print('Train Epoch: {} [{}/{} ({:.0f}%)]\tLoss: {:.6f}'.format(
                   epoch, batch_idx * len(data), len(train_loader.dataset),
                          100. * batch_idx / len(train_loader), loss.data[0]))


