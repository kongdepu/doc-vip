---
title: 第二章 8086微处理器
---
## 简单题

### 缓冲寄存器
1. 在高速工作的CPU与慢速工作的外设间起协调和缓冲的作用，实现数据传送的同步，完成CPU与外设速度不匹配的问题
2. 提供一个暂存的空间，它分输入输出缓冲器两种，输入缓冲器是外设送往CPU的数据，输出缓冲器是CPU送往外设的数据
3. 提高驱动能力
4. 增强8088的负载能力

### 8086CPU中有哪些寄存器？分组说明用途。哪些寄存器用来指示存储器单元的偏移地
址？
1. 八个通用寄存器AX、BX、CX、DX、SP、BP、SI、DI；两个控制寄存器 IP、F；4个段寄存器 CS、DS、SS、ES。
2. 八个通用寄存器都可以用来存放参与运算的数据和结果，但有各自的专门用途
- AX为累加器,某些指令指定用它存放操作数和运算结果
- BX为基址寄存器，BP为基址指针，SI为源变址寄存器，DI为目的变址寄存器
这4个寄存器在数据寻址中用来存放有效地址或段内偏移地址的一部分；
- CX为计数寄存器，在某些指令中做计数器使用
- DX为数据寄存器
3. SP为堆栈指示器，用来存放栈顶有效地址。
4. F状态寄存器用来存放6个状态标志和3个控制标志
5. IP指令指针用来存放下一条要取指令的有效地址
6. 四个段寄存器用来存放段地址
### 8086和8088有什么不同
1. 由于8088只能传输8位数据，所以8088只有8个地址、数据复用引脚AD0~AD7；8086是按十六位传输数据的，所以有16个地址、数据复用引脚AD0~AD15
2. 8086第34引脚为BHE，BHE用来区分是传送字节、还是字，8088第34引脚是SSO，用来指出状态信息
3. 8088 和 8086 的内部指令队列长度不同，8088 的为 4 字节长，而 8086 的为 6 字节
长。
4. 在最小模式时，8088 和 8086 的第 28 引脚（M/IO）的控制信号高低电平相反。
### 简述流水线技术，8086怎么实现指令流水线
1. 流水线是指在程序执行过程中多条指令重叠进行操作的一种并行处理实现技术
2. 流水线技术是把一个重复的过程分解为若干子过程，每个子过程由专门的功能部件来实现，每个子过程与其他子过程并行进行。
3. 流水线的并行处理是指完成一条指令的各个部件在时间上是可以同时重叠工作，以提高各部件的利用率来。
4. 8086中，指令的读取是在BIU单元，而指令的执行是在EU单元。因为BIU和EU两个单元相互独立、分别完成各自操作，所以可以并行操作
4. EU对执行指令的过程是，BIU可以同时对后续指令进行读取
### 8086存储器为啥要分段，哪几个寄存器与分段有关 19年
1. (1)8086CPU提供了20位的地址总线，可寻址1MB存储空间，而8086内部寄存器都是16位的，最高寻址64KB (2)为了实现对存储器寻址20位的物理地址，可将1MB的存储空间划分为若干个逻辑段，每个逻辑段可寻址64KB (3)各个逻辑段之间可以部分、完全覆盖，连续、不连续等非常灵活
2. CS代码段寄存器 DS数据段寄存器 SS堆栈段寄存器 ES附加段寄存器

### 8086CPU系统中为什么要使用地址锁存器
- 地址锁存器是一个暂存器，他根据控制信号的状态，将总线上的地址代码暂存起来
- 当微处理器和存储器交换数据时，首先由CPU发送存储器的地址，同时发允许锁存信号ALE给锁存器，锁存器接收到信号后，将地址数据、状态总线上的地址锁存在锁存器中，随后太可以传送数据信息。
- 在8086CPU访问存储器或I/O设备时，低8位和高四位地址和数据/状态采用分时复用技术，先输出地址，后输出数据/状态，为了使先输出的地址不丢失，在构建8086CPU系统是，必须使用地址锁存器。

### 最小工作模式下，8086如何响应一个总线请求
1. 当总线主设备通过HOLD引线向CPU发出总线请求信息，使HOLD信号变成有效。
2. 8086 在每个时钟周期的上升沿采样 HOLD 引线
3. 则当前总线结束后CPU发出总线请求的响信息HLDA。
4. CPU的控制总线，数据总线，地址总线进入高阻状态，让出总线控制权。

### 8086CPU从功能上分为几部分
1. BIU（总线接口部件）完成CPU与存储器，以及I/O结构之间的信息交换。
- 地址加法器
- 指令队列
- 四个段寄存器
- 指令指针寄存器（IP）
2. EU（执行部件） 负责从指令对列中取指令，执行所有的指令操作，并向BIU传送数据
- 8个通用寄存器
- 装填寄存器flags
- 算术逻辑部件ALU

### BIU和EU的功能
- EU 是执行部件，主要的功能是执行指令。
- BIU 是总线接口部件，主要负责与片外存储器及I/O 接口电路传输数据。
- EU 经过 BIU 进行片外操作数的访问， 当需要与主存储器或 I/O端口传送数据时，EU 向 BIU 发出命令，并提供要访问的内存地址或 I/O 端口地址及传送的数据。
- BIU 为 EU 提供将要执行的指令。
- EU 与 BIU 可分别独立工作，当 EU 不需 BIU 提供服
务时，BIU 可进行填充指令队列的操作。


### 在基于8086的微计算机系统中，存储器是如何组织的?是如何与处理器总线连接的? BHE信号起什么作用?
1. 8086为16位处理器，可访问1M字节的存储器空间;1M字节的存储器分为两个512K字节的存储体，命名为偶字节体和奇字节体;
2. 偶体的数据线连接D7~D0，“体选”信号接地址线A0;奇体的数据线连接D15~D8，“体选”信号接BHE#信号;
3. BHE#信号有效时允许访问奇体中的高字节存储单元，实现8086的低字节访问、高字节访问及字访问。

### 在8086微处理器构成的系统中，什么是存储器的规则字和非规则字？8086微处理器对一个规则字和一个非规则字读写时，有什么差别？
1. 规则字是在存储器中存储的起始地址位为偶数的字数据,非规则字是在存储器中存储的起始地址为奇数的字数据,
2. 规则字读写需要一个总线周期，发送A0为0，BHE为0，一个总线周期读写一个字。
3. 非规则字读写需要两个总线周期，第一个总线周期读写时先读取偶存储体数据，发送A0为1，BHE为0，取得高8位数据，第二个总线周期读取奇存储体数据，A0为0，BHE为1，取得第八位数据

### 在最小模式下，8086CPU一个基本的总线周期一般由几个时钟周期组成？以读总线周期为例，请说明在每个时钟周期中，CPU做了哪些工作？
1. 把BIU完成一次访问主存储器或外设操作所需的时间称为一个总线周期。
2. 一个基本的总线周期一般由4个时钟周期T1,T2,T3,T4组成
3. 当访问主存储器或外设时，存储器或外设不能及时地配合CPU传送数据，T3之后插入一个或多个等待周期Tw
4. 当存储器或外设准备好数据，通过Ready发准备好信息，CPU接收到这个信号后，会自动完成Tw状态计入T4状态，一次插入多少个Tw取决于READY信息，即取决于主存或外设的速度
- T1 CPU向地址/数据状态分时复用总线上发出访问存储器或IO端口的地址信息，地址信号、ALE信号产生
- T2 CPU从总线上撤销地址，发出RD读控制信息，使复用总线的低八位处于高阻状态，RD信号产生
- T3 地址/数据状态分时复用总线的低8位上出现从内存或I/O端口读入的数据，数据信号产生
- T4 8086完成数据传送，控制信息变成无效，结束总线周期

### 8086/8088工作在最下模式下，和最大模式下的特点。
1. 最小模式下，在系统中只有一个8086处理器，所有的总线控制信号都直接由8086/8088产生因此，系统中总线控制电路减到最小
2. 最大模式下，在系统中包含两个或多个微处理器，其中一个主处理器就是8088，其他处理器为协处理器，由于协调主存储器。
3. 33引脚MX/MN决定系统中处理最小最大模式，接地时，系统最大，接电源时，系统最小
4. 8086/8088工作在最大模式下外围电路包括8284时钟发生器，8286数据缓冲器，8282地址锁存器以及8288总线控制器
5. 8284负责产生信号CLK、READY、RESET
6. 8282负责根据控制信号的状态，将总线的地址代码锁存起来
7. 8286负责对数据的接受和发送增强了8088的负载能力
8. 8288负责对M和I/O非提供读写命令

### 哪些信号由8284时钟发生器产生，他们的作用是什么？
1. CLK：时钟信号，为CPU和总线控制器提供定时脉冲
2. READY：准备就绪信号,当CPU访问存储器或外设时，存储器和外设不能配合CPU传递数据，CPU将在T3状态插入TW等待周期，插入多少个TW取决于READY信号
4. RESET：对CPU进行初始化，迫使处理器回到其初始状态，CPU从0FFFF0H地址处往下执行指令

### 指令周期、总线周期、时钟周期
1. 完成一次指令所需要的时间成为指令周期
2. 把BIU完成一次访问主存储器或外设操作所需的时间称为一个总线周期。
3. CPU可以处理动作的最小时间单位是时钟周期，又称T状态，是由主频来确定的。
4. 一个指令周期包含若干个总线周期，一个总线周期包含若干个时钟周期
5. 一个总线周期最小包含4个时钟周期，当访问主存储器和外设时候，当主存储器和外设不能及时的配合CPU传送数据，CPU将在第三个时钟周期T3插入等待周期TW

### CPU相应中断时，执行两个连续的中断响应周期
1. 每个响应周期都给出中断响应信息INTA，
- 第一个总线周期通知中断请求设备，微处理器准备响应中断，中断控制器应该准备好中断类型吗，8259A的ISR和IRR对应位分别置1清0
- 第二个总线周期8259A把中断类型号送上送上数据总线，微处理器接受中断类型码，CPU根据中断类型码获取中断服务的入口地址为期服务


### BHE信号的作用，说明起始地址为奇地址、偶地址、一次读写一个字节和一个字时，BHE和A0的状态
1. BHE用来区分是传送字节、还是字
2. BHE为1表示对一个字节操作，为0表示对一个字操作
3. 当起始地址为偶地址并且一次读写一个字节BHE为1，A0为0
4. 当起始地址为偶地址并且一次读写一个字 BHE为0，A0为0
5. 当起始地址为奇地址并且一次读写一个字节BHE为0，A0为1
6. 当起始地址为奇地址并且一次读写一个字 BHE为0，A0为1

### 8086输入控制信号 RESET、HOLD、HLDA、NMI、INTR 、INTA，ALE其含义各是什么? 当他们有效时，8086CPU 将出现何种反应?
1. RESET是对CPU进行初始化，高电平有效，有效时，迫使处理区回到其初始状态。输入
2. HOLD是总线请求信号，高电平有效，有效时，说明总线总设备向CPU申请总线控制权。输入
3. HLDA总线请求的响应信号。输出
4. NMI是非可屏蔽中断请求，上升沿有效信号，有效时，表示外界向CPU申请不可屏蔽中断请求
5. INTR是可屏蔽中断请求，高电平有效，有效时，表示外界向CPU申请可屏蔽中断请求
6. INTA是中断请求的响应信号，当CPU处理中断时，会执行两个连续的总线周期，每个总线总线周期都会给出中断请求的响应信息INTA
- 第一个总线周期通知中断请求设备，CPU准备好响应中断，8259提供好中断类型码
- 第二个总线周通将中断类型码送至总线
7. ALE地址锁存允许，在T1状态时发出，有效时表示地址数据状态分时复用总线上输出的是地址信息