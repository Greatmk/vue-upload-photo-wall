<template>
  <section>
    <div class="search">
      <el-form >
        <!--设置封面 上传图片-->
        <div style="height: 250px;">
          <el-form-item label="设置封面：" class="txt_area">
            <div class="img-inputer" ref="box" style="margin-bottom: 50px;">
              <el-upload
                class="avatar-uploader"
                action="http://liuda.buzhichen.com/api/FileManage/UploadHotelPic"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
              </el-upload>
               <el-button class="btnPic">上传图片</el-button>
            </div>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </section>
</template>
//1.上面的action里面需要填写上传图片后台给到你的接口地址
//2.当你clone到本地打开之后，发现上传不了，控制台报错了，是因为跨域的问题，只要解决了跨域就行了，对你来说工作这么久应该很简单的
//解决了这两个问题，就可以正常使用的上传图片功能
<script>
  export default {
    data() {
      return {
        imageUrl: '',  //上传封面图片路径
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(res)
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' ;
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传封面图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传封面图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style>
  .el-upload{
    position: absolute;
    width: 120px;
    height: 30px;
    bottom: -51px;
    left: 40px;
    z-index: 1;
  }
  .el-upload img{
    position: absolute;
    left: -41px;
    top: -170px;
    width: 200px;
    height: 150px;
  }
</style>

<style scoped lang="scss">
  .img-inputer {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 150px;
    border-radius: 5px;
    background: bisque;
    transition: .3s cubic-bezier(0.4, 0, 0.2, 1);

    .btnPic{
      width: 120px;
      height: 30px;
      line-height: 5px;
      position: absolute;
      bottom: -50px;
      right: 40px;
      border-radius: 5px;
      background-color: darkorange;
    }

  }
</style>

