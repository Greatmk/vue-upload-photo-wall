<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{name: 'uploadPhotoWall'}">
      <h2>点击进入vue-upload上传图片(照片墙)</h2>
    </router-link>
    <router-link :to="{name: 'uploadPictureOfHead'}">
      <h2>点击进入vue-upload上传图片(头像或封面)</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue-Upload'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
</style>
