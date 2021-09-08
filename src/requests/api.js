// 导入封装好的网络请求类工具
import Network from './http';

// 封装各种接口请求
// export const 接口名 = () => Network.get('/路由',参数对象);

// C
export const createUser = (userInfo) => Network.get('/add', {
  userId: userInfo.userId,
  name: userInfo.name,
  age: userInfo.age
});
// R
export const findUser = (userId) => Network.get('/findById', {
  userId: userId
});
export const findAllUser = () => Network.get('/findAll', {});
// U
export const updateUser = (userInfo) => Network.get('/update', {
  userId: userInfo.userId,
  name: userInfo.name,
  age: userInfo.age
});
// D
export const deleteUser = (userId) => Network.get('/delete', {
  userId: userId
});
