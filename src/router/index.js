import HelloWorld from '@/components/HelloWorld'
import uploadPhotoWall from '@/components/uploadPhotoWall'



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
  }
];

export default routes;
 
