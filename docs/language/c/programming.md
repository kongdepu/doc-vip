---
lang: zh-CN
title: C语言编程
description: C语言编程
---

# C语言编程

## 编程
### 求出所有水仙花数
一个三位数可以表示为abc，若其能满足条件a^3+b^3+c^3=abc,则它是水鲜花数
1. 
``` c
#include <stdio.h>
int main(void) {
    int g,b,s;
    for(b = 1; b <= 9; b++){
        for(s = 0; s <= 9; s++){
            for(g = 0; g <= 9; g++){
                if(b*b*b + s*s*s + g*g*g == b*100+s*10+g){
                    printf("%d\n", b*100+s*10+g);
                }
            }
        }
    }
}
```
2. 
``` c
#include <stdio.h>
int main(void) {
    int i,g,b,s;
    for(i = 100; i <= 999; i++){
        int g = i%10;
        int s = i%100/10;
        int b = i/100;
        if(g*g*g + s*s*s + b*b*b == i){
            printf("%d\n", i);
        }
    }
}

```
### 判断是否是质数
输入一个大于3的整数n，判定它是否是素数又称质数
``` c
#include <stdio.h>
int main(void) {
    int n,i,tip = 1;
    printf("请输入一个数"); scanf("%d", &n);
    for(i=2; i<= n-1; i++){
        if(n%i == 0){
            tip = 0;
            break;
        }else{
            tip = 1;
        }
    }
    if(tip){
        printf("%d是质数", n);
    }else{
        printf("%d不是质数", n);
    }

}
```
### 100-200之间的素数
``` c
#include <stdio.h>
int main(void) {
    int j;
    for(j =100; j <=200; j++){
        int tip = iszs(j);
        if(tip){
            printf("%d是质数\n", j);
        }
    }

}

int iszs(int n){
    int i,tip = 1;
    for(i=2; i<= n-1; i++){
        if(n%i == 0){
            tip = 0;
            break;
        }else{
            tip = 1;
        }
    }

    return tip;
}

```
### 求数组中最大值以及下标
``` c
#include <stdio.h>
int main(void) {
    int i,j,max,a[10];
    for(i=0;i<10;i++)
        scanf("%d",&a[i]);
    max=a[0];
    for(i=0;i<10;i++)
        if(a[i]>=max){
            max = a[i];
            j=i;
        }
        printf("%d\n%d",max,j);

}

```
### 使用数组输入斐波那契
斐波那契数列. 斐波那契数列指的是这样一个数列 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233，377，610，987，1597，2584，4181，6765，10946，17711，28657，46368........ 这个数列从第3项开始，每一项都等于前两项之和。
``` c
#include <stdio.h>
int main(void) {
    int i;
    int f[20]={1,1};
    for(i=2;i<20;i++){
        f[i] = f[i-2] + f[i-1];
    }

    for(i=0;i<20;i++){
        printf("%d\n", f[i]);
    }

}

```
### 买鸡
一百元买一百只
``` c
#include <stdio.h>
int main(void) {
    int i,j,x;
    for( i = 1;i<=20;i++){
        for( j = 1;j<= 33;j++){
            for ( x = 1;x<=300;x++){
                if(i*5+j*3+x/3*1==100){
                    if(i+j+x==100){
                        if(x%3==0){
                            printf("%d,%d,%d\n",i,j,x);
                        }
                    }
                }
            }
        }
    }



}

```
### 给出三角形三边，算面积
``` c
#include <stdio.h>
#include <math.h>
int main(void) {
    float a,b,c,p,m;
    printf("请输入a边");
    scanf("%f",&a);
    printf("请输入b边");
    scanf("%f",&b);
    printf("请输入c边");
    scanf("%f",&c);
    p = (a+b+c)/2;
    m = sqrt(p*(p-a)*(p-b)*(p-c));
    printf("%f",m);
}
```

### 小写转大写
``` c
#include <stdio.h>
int main(void) {
 int i = 0;
    char str[80];
    scanf("%s",&str);
    while(str[i]!='\0'){
        if(str[i]>=97 && str[i]<=126){
            str[i] = str[i]-'a'+'A';
        }
        i++;
    }
    printf("%s",str);
}
```
### 字符串数字后添加& 如 a1b2c3 = a1&b2&c3&
``` c
#include <stdio.h>
int main(void) {
    char str[80];
    scanf("%s",&str);
    for(int j = 0;str[j]!='\0';j++){
        if(str[j]>='0'&&str[j]<='9'){
            int n = 0;
            while(str[n] != '\0'){
                n++;
            }
            str[n+1] = '\0';
            for(int x=n;x>j+1;x--){
                str[x] = str[x-1];
            }
            str[j+1]='&';
        }
    }
    printf("%s",str);
}
```
### 数组倒序输出
``` c
#include <stdio.h>
int main(void) {
    int a[10];
    int x;
    srand((int)time(0));
    for(int i = 0;i<10;i++){
        a[i] = rand() % 10 + 1;
    }
    for(int i = 0;i<10;i++){
        printf("%d",a[i]);
    }
    printf("\n");
    for(int i = 0;i<10/2;i++){
        x = a[i];
        a[i] = a[9-i];
        a[9-i] = x;
    }
    for(int i = 0;i<10;i++){
        printf("%d",a[i]);
    }
}
```
### 冒泡排序随机数组
``` c
#include <stdio.h>
#include <math.h> // 数学文件头
#include <time.h>  // 时间文件头
#include <stdlib.h> // 随机数文件头

void maopao_sort(int a[],int n);
int main(void) {
    int a[10];
    int x;
    srand((int)time(0));
    for(x = 0;x<10;x++){
        a[x] = rand() % 10;
    }

    maopao_sort(a,10);

    for(x = 0;x<10;x++){
        printf("%d\n",a[x]);
    }
}

void maopao_sort(int a[],int n)
{
    int i,j,t;
    for(i = 0; i < n-1; i++){
        for(j = 0; j< n-1-i; j++){
            if(a[j]<a[j+1]){
                t = a[j];
                a[j] = a[j+1];
                a[j+1] = t;
            }
        }
    }
}

```
### 字符串回文
``` c
#include <stdio.h>
int main(void) {
    char str[20];
    int i = 0;
    int j = 0;
    scanf("%s",&str);
    while(str[i] != '\0'){
        i++;
    }
    i--;
    for(;j<=i;i--,j++){
        if(str[i] != str[j]){
            printf("%d\n",1);
            return 0;
        }
    }
    printf("%d\n",0);
    return 1;
}
```
### 数字回文数
``` c
#include <stdio.h>
#include <math.h>
int main()
{
    int n,n1,sum=0,s=0;
    scanf("%d",&n);
    n1=n;
    for(;n;n/=10)
    {
        s=s*10+n%10;
    }
    printf("%d %d",n,s);
    if(n1 == s)
        puts("yes");
    else
        puts("no");
    return 0;
}


```
### 二维数组对角线为1其他为0
``` c
#include <stdio.h>
int main(void) {
    int a[10][10];
    for(int i=0;i<10;i++){
        for(int j = 0;j<10;j++){
            if(i==j || i+j==9){
               a[i][j]=1;
            }else{
                a[i][j]=0;
            }
        }
    }
    for(int i=0;i<10;i++){
        for(int j = 0;j<10;j++){
            printf("%5d",a[i][j]);
        }
        printf("\n");
    }
}
```
### 输入十个数，选择排序法从小到大输入
``` c
#include <stdio.h>

int main()
{
    int a[10],i;
    printf("请输入十个数");
    for(i=0;i<10;i++){
        scanf("%d",&a[i]);
    }
    sort(a,10);

    printf("由小到大选择排序发输入如下:\n");
    for(int j = 0; j < 10; j++){
        printf("%d\n", a[j]);
    }
}

void sort(int array[],int n){
    int i,j,k,t;
    for(i=0;i<n-1;i++){
        k=i;
        for(j=i+1;j<n;j++){
            if(array[j]<array[k]){
                k=j;
            }
        }
        t=array[k];
        array[k]=array[i];
        array[i]=t;
    }
}

```
### 使用指针变量交换两个变量的值
``` c
#include <stdio.h>
int main()
{
    // 定义两个整型变量
    int i,j;
    printf("请输入两个数");
    scanf("%d%d",&i,&j);


    wags(&i,&j);

    // 输出
    printf("%d\t%d", i , j);

}
// 定义两个指针形参
void wags(int *q1,int *q2){
    int t;
    t = *q1;
    *q1 = *q2;
    *q2 = t;
}

```
### 求二元一次方程的解
``` c
#include<stdio.h>
#include<math.h>
int main(){
  int a,b,c;
  printf("请输入二元一次方程的三个系数");
  scanf("%d%d%d",&a,&b,&c);
  double delta,x1,x2;
  delta=b*b-4*a*c;
  if(delta>0){
  	x1=(-b+sqrt(delta))/(2*a);
  	x2=(-b-sqrt(delta))/(2*a);
	printf("x1=%f,x2=%f",x1,x2);
  }
  else if(delta==0){
  	x1=(-b)/(2*a);
  	x2=x1;
  	printf("x1=%f,x2=%f",x1,x2);
  }

  else{
  printf("无解!\n");
  }

  return 0;
}
```
### 输出图形
``` c
   *   
  ***  
 *****
*******
#include <stdio.h>
int main()
{
    int i,j,k;
    for(i=1;i<=4;i++){
        for(j=1;j<=4-i;j++){
            printf(" ");
        }
        for(k=1;k<=i*2-1;k++){
            printf("*");
        }
        for(j=1;j<=4-i;j++){
            printf(" ");
        }
        printf("\n");
    }
}

```
### 输出图形
``` c
   *
  ***
 *****
*******
 *****
  ***
   *
#include <stdio.h>
#include <math.h>
int main()
{
    int i,j,k;
    for(i=1;i<=7;i++){
        for(j=1;j<=abs(4-i);j++){
            printf(" ");
        }
        for(k=1;k<=(i<=4?i*2-1:15-i*2);k++){
            printf("*");
        }
        for(j=1;j<=abs(4-i);j++){
            printf(" ");
        }
        printf("\n");
    }
}

```
### 输入杨辉三角前十行
``` c
#include <stdio.h>
int main()
{
    int a[10][10],i,j;
    for(i = 0; i < 10; i++){
        for(j = 0; j <= i; j++){
            if(j == 0 || j == i){
                a[i][j] = 1;
            }else{
                a[i][j] = a[i-1][j-1] + a[i-1][j];
            }
        }
    }

    for(i = 0; i < 10; i++){
        for(j = 0; j <= i; j++){
            printf("%d\t", a[i][j]);
        }
            printf("\n");
    }
}

```

### 实现两个字符串的拼接
``` c
#include <stdio.h>
int main(void) {
    char s1[80],s2[40];
    int i=0,j=0;
    printf("input string s1\n");
    scanf("%s",s1);
    printf("input string s2\n");
    scanf("%s",s2);

    while(s1[i] != '\0')
        i++;

    while(s2[j] != '\0')
    {
        s1[i++] = s2[j++];
    }
    printf("new string %s",s1);

}
```
### 删除字符串中的指定字符
``` c
#include<stdio.h>
void put(char *p,char del_c)
{
    char *q = p;
    for(;*p;p++){
        if(*p != del_c){
            *q++=*p;
        }
    }
    *q = 0;
}
int main()
{
    char str[20],del_c;
    gets(str);
    del_c = getchar();
    put(str,del_c);
    puts(str);
}
```
### 求最大公约数和最小公倍数
- 
有整数a和b
1. a%b = c
2. c = 0 a是最大公倍数
3. c != 0 b=b+b 在执行1
``` c
#include <stdio.h>
int main()
{
    int m,n,gys,gbs;
    scanf("%d %d",&m,&n);
    gbs = m;
    while(gbs%n != 0) gbs += m;
    gys = m*n/gbs;
    printf("最大公约数%d,最大公倍数%d",gys,gbs);
    return 0;
}
```
- 辗转相除法
有整数a和b
1. a%b = c
2. c = 0 b是最小公约数
3. c != 0 则 a=b b=c 在执行1
``` c
int main()
{
    int m,n,gys,gbs,temp;
    scanf("%d %d",&m,&n);
    gbs = m; gys = n;
    while(gys != 0){
        temp = gbs%gys;
        gbs = gys;
        gys = temp;
    }
    printf("最大公约数%d,最大公倍数%d",gbs,m*n/gbs);
    return 0;
}
```
### 是否是完全数
1+2+4+7+14=28
``` c
#include <stdio.h>
int main()
{
    int n,sum = 0,i=1;
    scanf("%d",&n);
    while(i<n){
        if(n%i == 0){
            sum = sum + i;
        }
        i++;
    }
    if(sum  == n){
        printf("是完全数");
    }
    printf("%d",sum);
    return 0;
}
```
### 字符串逆序，字符串的比较
``` c
#include <stdio.h>
#include <math.h>
void fun(char *p)
{
    char *q = p,t;
    while(*p)
        p++;
    p--;
    for(;q<=p;q++,p--){
        t = *q;
        *q = *p;
        *p = t;
    }
}
/* 字符串比较 */
int mystrcmp(char *s,char *t)
{
    while(*s == *t)
    {
        if(*s == '\0')return 0;
        s++;
        t++;
    }
    return (*s-*t);
}
int main()
{
    char a[80],b[80],*pa,*pb;
    gets(a);
    gets(b);
    fun(a);
    puts(a);
    int j = mystrcmp(a,b);
    if(j > 0){
        printf("a>b");
    }else if(j == 0){
        printf("a==b");
    }else printf("a<b");
    return 0;
}
```
### 数组插入
``` c
#include <stdio.h>
#include <math.h> // 数学文件头
#include <time.h>  // 时间文件头
#include <stdlib.h> // 随机数文件头
int main()
{
    int a[11],i,j,x,t;
    scanf("%d",&x);
    for(i=0;i<10;i++)
        scanf("%d",&a[i]);
       // a[i] = rand() % 10;
    // 排序
    for(i=0;i<9;i++){
        for(j=0;j<9-i;j++){
            if(a[j] > a[j+1]){
                t = a[j];
                a[j] = a[j+1];
                a[j+1] = t;
            }
        }
    }

    // 插入
    for(i=9;i>=0;i--){
        if(a[i] > x){
            a[i+1] = a[i];
        }else{
            break;
        }
    }
    a[i+1] = x;
    for(i=0;i<11;i++)
        printf("%d ",a[i]);
    return 0;
}
```
### 数组删除
``` c
#include <stdio.h>
#include <math.h> // 数学文件头
#include <time.h>  // 时间文件头
#include <stdlib.h> // 随机数文件头
int main()
{
    int a[10],i,j,x;
    scanf("%d",&x);
    for(i=0;i<10;i++)
        scanf("%d",&a[i]);

    for(i=0,j=0;i<10;i++){
        if(a[i] != x){
            a[j] = a[i];
            j++;
        }
    }


    for(i=0;i<j;i++)
        printf("%d ",a[i]);
    return 0;
}
```
### 统计字母个数
``` c
#include <stdio.h>
#include <string.h>
int main()
{
    char a[100];
    int i=0,count = 0,word=0;
    gets(a);
    while(a[i])
    {
        if(a[i] == ' ') {
           word = 0;
        }
        else if(word == 0){
            word=1;count++;
        }
        i++;
    }
    printf("%d",count);
    return 0;
}

```
### 输入80个字符，统计单词个数，单词用空格隔开
``` c
#include <stdio.h>
#include <string.h>
int main()
{
    int kongge = 0,n=0;
    char str[81],*p;
    gets(str);
    p=str;
    while(*p){
        if( *p == ' ') {
            kongge=0;
        }
        else if(kongge == 0){
            n++;
            kongge = 1;
        }
        p++;
    }
    printf("%d",n);
    return 0;
}

```
### 十进制转任意进制
``` c
#include <stdio.h>
#include <math.h>
int main()
{
    int n,s,a[20];
    char k[]={'0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'};
    scanf("%d",&n);
    scanf("%d",&s);
    int i=0,j;
    while(n){
        a[i] = n%s;
        n=n/s;
        i++;
    }
    for(j=i-1;j>=0;j--){
        printf("%c",k[a[j]]);
    }
}
```
### 字符串像左移动n位
abcde 2 cdeab
``` c
#include <stdio.h>
#include <String.h>
int main()
{
    char a[81],t;
    int n,i,j;
    gets(a);
    scanf("%d",&n);

    for(i=0;i<n;i++){
        t=a[0]; // 第一个字符拿出来
        for(j=0;a[j];j++) // 将每一个字符往前面移动一位
            a[j] = a[j+1];
        a[j-1]=t;
        a[j]='\0';
    }
    puts(a);
}
```
### 删除数组中所有的重复数字
``` c
#include <stdio.h>
#include <string.h>
int fun(int a[],int n)
{
    int i,j,t;
    for(i=0; i<n-1; i++)
        for(j=0; j<n-1-i; j++)
            if(a[j]>a[j+1])
            {
                t=a[j];
                a[j]=a[j+1];
                a[j+1]=t;
            }
            return 10;
    for(i=1,j=1; i<n; i++)
        if(a[j-1] != a[i])
            a[j++]=a[i];
    return j;
}
int main()
{
    int b[10] = {2,3,5,4,2,3,5,1,5,1},i,k;
    k=fun(b,10);
    for(i=0; i<k; i++)
        printf("%d ",b[i]);
}
```
### 根号迭代
``` c
#include <stdio.h>
#include <string.h>
#include <math.h>
double getsqrt(double a){
    double x1,x2=1,sum=1;
    x1=0;
    while(fabs(x1-x2) >= 1e-6){
        x1=x2;
        x2=(x1+a/x1)/2.0;
    }
    return x1;
}
int main()
{
    printf("%f",getsqrt(3.0));

}
```
### 小球100，10次弹起
``` c
// 299.609375 0.097656
void main( )
{
    float sum=100,height=50;
    int i;
    for(i=2;i<=10;i++)
    {
        sum+=height * 2;
        height /=2;
    }
    printf("%f %f",sum,height);

}
### xyz abc打球
​``` c
#include <stdio.h>
#include <string.h>
#include <math.h>
void main()
{
    char a,b,c;
    for(a='x'; a<='z'; a++)
        for(b='x'; b<='z'; b++)
            for(c='x'; c<='z'; c++)
                if( c!='x' && c!='z' && a!='x' && a!=b && a!=c && b!=c)
                    printf("%c%c%c",a,b,c);
}

```
### 猴子吃桃 循环 递归
``` c
void main()
{
    int t=1,i=10;
    for(i--;i>=1;i--)
    {
        t=(t+1)*2;
    }
    printf("%d",t);
}
```
``` c
int fun(int n)
{
    if(n == 10)
        return 1;
    else
        return (fun(n+1)+1)*2;
}
void main()
{
    printf("%d",fun(5));
}
```