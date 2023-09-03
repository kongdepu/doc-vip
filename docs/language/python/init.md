---
lang: zh-CN
title: Python
description: Python基础
---

# Python基础

## 列表的创建
1. 顺序的
2. 索引映射一个数据
3. 可以有重复数据
4. 类型可以混用
5. 根据需要动态分配和回收内存
``` py
list1=['hello','world',98,12.3,'wo','32']
```
|索引| -6 | -5 | -4 | -3 | -2 | -1 |
|:--:| :-----: | :-----: | :--: | :--: | :--: | :--: |
|数据| 'hello' | 'world' |  98  | 12.3 | 'wo' | '32' |
|索引|    0    |    1    |  2   | 3 | 4 | 5 |
## 获取列表的索引
``` py
list1.index('hello') # 0
```
## 列表元素的查找
``` py
list=[10,20,30,40,50,60]
# start=1（默认为0）,stop=4（默认为最后,step=1（默认为1） 
list[1:4:1] # 20 30 40
# 步长为负数
list[::-1] # 60 50 40 30 20 10
```
## 列表的遍历
``` py
list=[10,20,30,40,50,60]
print(10 in list) # true
for item in list
	print(item) # 10 20 30 40 50 60
```
## 列表的增
``` py
list=[10,20,30,40,50,60]
# 将列表末尾添加一个元素 append
list.append(100)
# 将一个列表追加到另一个列表中 extend
list1=[70,80]
list.extend(list1)
# 在列表任意位置添加一个元素 insert
list.insert(0,0)
# 切片
list2=[True,'hello']
list[1::]=list2
```
## 列表的删除
``` py
list=[10,20,30,40,50,60]
# 一次删除一个元素 remove
list.remove(10)
# 根据索引移除元素 pop 不指定索引默认为最后一个元素的索引
list.pop(1)
# 切面 会产生一个新的列表
new_list=list[1:3]
# 切面 不产生新的列表
list[1:3]=[]
# 清除列表
list.clear()
# 列表对象删除
del list
```
## 列表的修改
``` py
list=[10,20,30,40,50,60]
# 一次修改一个值
list[0] = 15
# 切面 修改多个值
list[1:3]=[100,200,300]
```
## 列表的排序
``` py
list=[10,30,15,45,70,20]
# sort 默认升序
list.sort()
# sort 降序
list.sort(reverse=True)
# sorted() 原列表不发生改变
```
## 列表的生成式
``` py
list=[i*i for i in range(1,10)]
```
## 字典的创建 类型dict
1. 无序的
2. key 不可以重复 value 可以重复
``` py
# 使用 {} 创建字典
map={'张三':100, '李四':98, '王五':45}
# 使用dict()
map=dict(name="jack",age=20)
```
## 获取字典元素
``` py
# 使用 {} 创建字典
map={'张三':100, '李四':98, '王五':45}

map['张三'] # 100
map.get('张三') # 100 建议用这个 没有这个key 返回None
map.get('马六',90) # 当查找失败后，默认值为90

```
## 字典key的判断
``` py
# 使用 {} 创建字典
map={'张三':100, '李四':98, '王五':45}

print('张三' in map) # True

```
## 字典key-value删除
``` py

del map['张三']
map.clear() # 将字典清空
```
## 字典新增和修改
``` py
map['麻七']=120
```
## 字典的常用操作
``` py
map={'张三':100, '李四':98, '王五':45}
# 获取所有的keys
keys=map.keys()
list(keys) # 将所有的key组成的视图转成列表
# 获取所有的value
values=map.values()
list(values) # 将所有的value组成的视图转成列表
# 获取所有的key-value键值对
items=map.items()
list(items) # 转成元组
```
## 字典元素的遍历
``` py
map={'张三':100, '李四':98, '王五':45}

for item in map
	print(item) # 张三 李四 王五
```
## 字典生成式
``` py
keys=['A','B','c']
values=[1,2,3]
items = { key.upper() :value for key,value in zip(keys,values) }
```


##  元组的创建
1. 不可以修改元组的元素的类型
``` py
t=('hello','world','!')
t='hello','world','!'
t=('hello',) # 当只有一个元素的时候，逗号不能省略
t=tuple(('hello','world','!'))
```
## 元组的遍历
``` py
t=('hello','world','!')
for item in t：
	print(item) # hello world !

```
## 集合的创建方式
1. 集合中的元素不可重复
``` py
s=set([1,2,3,4,5]) 
```
## 集合的相关操作
``` py
s=set([1,2,3,4,5])
# 集合的元素的判断操作
print( 1 in s) # True
# 向集合添加一个元素
s.add(10)
# 向集合添加多个元素
s.update([10,20,30])
# 移除集合元素
s.discard(500) # 没有500不报错
# 移除集合的第一个元素
s.pop()
# 清空集合
s.clear()
```
## 集合之间的关系
``` py
s1=set([1,2,3,4,5])
s2=set([5,4,3,2,1])
# 两个集合是否相等
print(s1==s2)
s1=set([1,2,3,4,5])
s2=set([1,2,3])
s3=set([1,6])
# 一个集合是否是另一个集合的子集
s2.issubset(s1) # True
s3.issubset(s1) # False
# 一个集合是否是另一个集合的超集
s1.issuperset(s2) # True
s1.issuperset(s3) # False
# 两个集合是否存在交集
s2.isdisjoint(s3) # 有交集-False 没有交集-True
```

## 集合的数学问题 
``` py
s1=set([1,2,3,4,5,6,7])
s2=set([8,9,5,4,3,2,1])
# 交集
s1.intersection(s2)
s1 & s2
# 并集
s1.union(s2)
s1 | s2
# 差集
s1.difference(s2)
s2 - s2
# 对称差集
s1.symmetric_difference(s2)
s1 ^ s2
```

## 集合生成式
``` py 
s={ i*i fro i in range(6) }
```

| 数据结构    | 是否可变 | 是否重复    | 是否有序 | 定义符号    |
| ----------- | -------- | ----------- | -------- | ----------- |
| 列表  list  | 可变     | 可重复      | 有序     | []          |
| 元组  tuple | 不可变   | 可重复      | 有序     | ()          |
| 字典  dict  | 可变     | key不可重复 | 无序     | {key:value} |
| 集合  set   | 可变     | 不可重复    | 无序     | {}          |

## 字符串的操作
``` py
# + 拼接
str="hello" + "world"
# format 拼接 推荐
str1 = "hello"
str2 = "world"
str = "{0}{1}".format(str1, str2)
# 查找子串substr第一次出现的位置 没有找到返回-1
str.find("l") 
# 查找子串substr最后一次出现的位置 没有找到返回-1
str.rfind("l")
```
## 常用操作
| 方法名称    | 是否可变 |
| ---------- | -------- |
| upper() | 所有字符都转成大写字母 |
| lower() | 所有字符都转成小写字母 |
| swapcase() | 大写->小写 小写->大写 |
| capitalize() | 第一个字符转大写，其余的都转成小写 |
| title() | 每一个单词的第一个字符转换为大写，其他的都转小写 |
| center() | 居中对齐，第一个参数为宽度，第二个参数为填充符 |
| ljust() | 左对齐 |
| rjust() | 右对齐 |
| zfill() | 右对齐，左边用0填充，第一个参数为宽度 |
| split() | 从左侧分割字符串，默认空格分割，第一个参数为按什么分割 |
| rsplit() | 从右侧分割字符串 |
| isspace() | 是否全部由空格字符组成（回车、换行、\t） |
| isalpha() | 是否全部由字母组成 |
| isdecimal() | 是否全部由十进制的数字组成 |
| isnumeric() | 是否全部由数字组成 |
| isalnum() | 是否由字母和数字组成 |
``` py
# 字符串替换
str="Python Java"
print(str.replace("Python",“Java")) # Java Java
# 字符串连接
str=['hello','java','Python']
print(''.join(str)) # hellojavaPython
# 字符串比较 > < == >= <= != 比较每一个字符的 Ascll
print("banana" > "apple") # True
# is 比较的是id是否相等
# 切片操作 切片[start:end:step] 不包括end
str[:6] # Python
str[7:] # Java
# 格式化字符串
name="张三"
age=20
print('我叫%s,今年%d岁' % (name,age))
print('我叫{0},今年{1}岁'.format(name,age))
print(f'我叫{name},今年{age}岁')
# 编码 解码 GBK 占 2个 UTF-8 占 3个
str="轻舟已过万重山"
str1 = str.encode(encoding="GBK") # 编码
str2 = str1.decode(encoding="GBK") # 解码
```
## 函数
``` py
# 定义函数
def add(a, b):
	c = a + b
	return c
# 调用
sum = add(1, 2)
sum = add(b = 10, a = 20)
# 函数的返回多个值时，结果为元组
# 定义函数，可变的位置参数
def add(*a):
	print(a) # 输出是一个数组
add(10)
add(10,20)
# 定义函数，可变的关键数参数
def add(**a)
	printf(a)
add(a=10,b=20) # {'a':10,'b':20}
```

