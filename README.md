# 万向创新聚能城 - 商业合同生成器

>  WanXiang Innova City 's Business Contract Generator

>  2018 Hackathon Project Laya Team 



### 愿景

> Hopes

2025年，在万向创新聚能城中，每一个公民得益于区块链技术的应用，使得商业行为的信用体系得到了空前的保证。

> In 2025, in the WanXiang Innova City, every citizen benefited from the application of blockchain technology, which made the credit system of business behavior unprecedentedly guaranteed.


### 项目介绍

我们希望在万向聚能城中，构建一个可靠的商业合同体系。基于区块链技术，将商业合同上链，并且和公民信用挂钩，每一分商业合同独立、不可篡改、不可销毁。

在万向创新聚能城中，我们假设有2个元素：

1.每一个公民都有一对公私钥，存储在万向城的中心数据库中，对应着公民的个人信息

2.万向城中有独立的商业仲裁机构，拥有当商业仲裁发生时的裁定权。

在以上两个元素存在的情况下，一个基于区块链技术的商业合同体系就应运而生。由于区块链的赋能，在这个新的智慧城市中，不会再出现刻萝卜章，假合同等事情的存在。同时，每一个公民在撕毁合同时的作恶成本会无限升高。

商业合同的定义很广泛，我们希望保证足够的自由度 --- 大到公司并购，小到个人借钱，都可以使用这个商业合同生成工具，将一份商业合同上链，并且受到保护。

> In WanXiang Innova City, we assume that there are 2 elements:

> 1. Each citizen has a public and private key, stored in the central database of Wanxiang City, corresponding to the citizen's personal information.

> 2. There are independent commercial arbitration institutions in Wanxiangcheng, which have the power to decide when commercial arbitration takes place.

> In the case of the existence of the above two elements, a commercial contract system based on blockchain technology came into being. Due to the empowerment of the blockchain, in this new smart city, there will be no more con man , fake contracts , commercial fraud and so on. At the same time, the cost of doing evil for every citizen in tearing up a contract will increase indefinitely.

> Commercial contracts are broadly defined, and we want to ensure that there is enough freedom -- from corporate mergers and acquisitions to small individuals, you can use this commercial contract generation tool to wind up and protect a commercial contract.


### 工作流程概述

> Work process


用户A创建了一个商业合同，将合同信息发往服务器。合同信息包含

* 合同签署的对象公钥
* 合同标题
* 合同详情

Server收到信息后，将信息做加密处理（Advanced Encryption Standard) ， 随后将密文写入Factom区块链，将rawDataHash存储在服务器中。

合同的签署对象（用户B）请求查看合同数据，请求发送到Server ， Server从 Factom中读取rawData，并进行解密，返还给UserB

![](http://palu6iv0v.bkt.clouddn.com/UC20180908_235114.png)


User A creates a commercial contract to send the contract information to the server. Contract information contains

* UserB Public Key
* Contract title
* Contract details

After the server receives the information, it encrypts the information (Advanced Encryption Standard), then writes the ciphertext to the Factom blockchain and stores the rawDataHash in the server.

The signing object of the contract (User B) requests to view the contract data, the request is sent to the Server, the Server reads rawData from Factom, decrypts it, and returns it to UserB.



### 我们使用的技术栈

>TechStack

Node.Js - Backend

LayaAir - FrontEnd

wancloud.io -  Factom

BlockChain Stroage

Ellipse algorithm

### 美术资源

> Art Resouce

iconfont.cn



### 项目截图

![](http://palu6iv0v.bkt.clouddn.com/UC20180908_172547.png)

![](http://palu6iv0v.bkt.clouddn.com/UC20180908_182542.png)



### 商业信用点

在万向城中，每一个公民都有一个商业信用点，每完成一个商业合同都会得到一个增长