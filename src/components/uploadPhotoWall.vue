<template>
  <section>
    <div class="add_location_pictures">
      <span>外景图片</span>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :file-list="img_list"
        :auto-upload="auto_upload"
        :on-remove="handleRemove" style="padding-top: 80px;padding-left: 30px;">
        <!--<i class="el-icon-plus"></i>-->
        <img src="../assets/add_img.png" alt="" style="width: 45px; height: 45px;padding-top: 90px;">
        <span style="width: 80px;height: 30px;position: absolute;left: 53px;top: 90px;">添加图片</span>
      </el-upload>
      <el-dialog v-model="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
  </section>
</template>


<script>
  import pic1 from '../assets/pic1.png'
  import pic2 from '../assets/pic2.png'
  import pic3 from '../assets/pic3.png'
  import pic4 from '../assets/pic4.png'
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: true,
        auto_upload: false,
        img_list: [
          {
            name: 'pic1.png',
            url : pic1,
          },
          {
            name: 'pic2.png',
            url : pic2,
          },
          {
            name: 'pic3.png',
            url : pic3,
          },
          {
            name: 'pic4.png',
            url : pic4,
          },
        ],
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        this.auto_upload = true;
        console.log(file)
      }
    },
  }
</script>

<style>
  .el-upload.el-upload--picture-card,
  .el-upload-list .el-upload-list__item.is-ready,
  .el-upload-list__item-actions,
  .el-upload-list__item.is-uploading,
  .el-upload-list__item.is-success{
    width: 180px;
    height: 220px;
    display: inline-block;
  }
  .el-upload-list__item.is-success,.el-upload-list__item.is-ready{
    margin: 0 25px 15px 0;
  }
  .el-upload.el-upload--picture-card{
    border: 1px solid #c0ccda;;
    outline: none;
    position: relative;
  }
</style>

<style scoped lang="scss">
  section {
    background: none repeat scroll 0 0 darkcyan;
    width: 100%;
    height: 100%;

    header {
      height: 50px;
      background-color: #f0f3f6;
      overflow: hidden;
      box-sizing: border-box;

      .left {
        float: left;
        padding-left: 40px;
        padding-top: 20px;
        position: relative;

        img {
          width: 4px;
          vertical-align: bottom;
          margin-right: 9px;
        }
      }
    }
    .add_location_pictures {
      width: 94%;
      height: 300px;
      background-color: #fff;
      margin-left: 40px;
      text-align: left;
      position: relative;

      span {
        position: absolute;
        left: 30px;
        top: 30px;
        font-size: 20px;
        color: dimgrey;
      }

    }
  }
</style>

