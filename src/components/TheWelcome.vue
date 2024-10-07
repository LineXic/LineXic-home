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
    <a href="https://blog.linexic.top/2024/09/20/month-3/"><h2>月记之三:国庆与高中生活</h2></a>
    <p>讲了因为国庆第一天放假下雨无法出去的抑郁心情及重点讲了博主的高中生活。国庆快乐！！</p>
   >>> <a href="https://blog.linexic.top/2024/09/20/month-3/">阅读更多...</a>
    
  </WelcomeItem>
    </template>
