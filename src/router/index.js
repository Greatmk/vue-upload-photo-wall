import HelloWorld from '@/components/HelloWorld'
import uploadPhotoWall from '@/components/uploadPhotoWall'
import uploadPictureOfHead from '@/components/uploadPictureOfHead'


let routes = [
  {
    path: '/',
    name: 'Hello',
    component: HelloWorld
  },
  {
    path: '/uploadPhotoWall',
    name: 'uploadPhotoWall',
    component: uploadPhotoWall
  },
  {
    path: '/uploadPictureOfHead',
    name: 'uploadPictureOfHead',
    component: uploadPictureOfHead
  }
];

export default routes;
 
