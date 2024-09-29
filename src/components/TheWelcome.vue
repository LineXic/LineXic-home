<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import ToolingIcon from './icons/IconTooling.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>最新文章</template>
    <a href="https://linexic.top/2024/09/01/guigu-css-22/"><h2>【前端22】优先级</h2></a>
    <p>本文基于尚硅谷Web前端基础教程发布，你也可以理解成这是一篇尚硅谷教程笔记，当然这里也有我的一些经验总结....</p>
   >>> <a href="https://linexic.top/2024/09/01/guigu-css-22">阅读更多...</a>
    
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>朋友们</template>
    <li><a href="https://chengai77a6b.top/" target="_blank">承挨汉化组</a></li>
    <p>一个为Minecraft汉化尽心尽力的汉化室</p>
    <li><a href="https://www.litecat.xyz/" target="_blank">LiteCat - 博客</a></li>
    <p>本就狗屎的世界，有了我即更狗屎</p>
    <li><a href="https://www.mengze2.cn/" target="_blank">梦泽不是梦</a></li>
    <p>我也是普通人，我只不过在追求梦想罢了</p>
    <li><a href="https://blog.kevinchu.top/" target="_blank">KEVIN'S BLOG</a></li>
    <p>Write the Code. Change the world.🌏</p>
    <li><a href="https://blog.lichenghao.cn/" target="_blank">故事的程序猿</a></li>
    <p>好好学习，天天向上</p>
    <li><a href="https://blog.iamsjy.com/" target="_blank">Tony's Blog</a></li>
    <p>探索智慧，共享知识；开启心灵，传递真理</p>    
    <li><a href="https://kuizuo.cn/" target="_blank">愧作</a></li>
    <p>道阻且长，行则将至</p>
    <li><a href="https://oragekk.me/" target="_blank">上冬十二</a></li>
    <p>到最后，竟庆幸于夕阳仍留在身上</p>
    <li><a href="https://www.peterjxl.com/" target="_blank">从01开始</a></li>
    <p>01开始</p>
     <li><a href="https://hyruo.com/" target="_blank">海若博客</a></li>
    <p>法学法律工作者</p>
    <li><a href="https://taoshu.in/" target="_blank">涛叔博客</a></li>
    <p></p>
    <li><a href="https://blog.rainiar.top/" target="_blank">寒夏摸鱼站</a></li>
    <p>这是一个老咸鱼的个人博客</p>
    <li><a href="https://blog.pinpe.top/" target="_blank">Pinpe 的云端</a></li>
    <p>一个属于自己的云朵</p>
    <li><a href="https://thirdshire.com/" target="_blank">第三夏尔</a></li>
    <p>认真生活，积极摸鱼</p>

  </WelcomeItem>
</template>
