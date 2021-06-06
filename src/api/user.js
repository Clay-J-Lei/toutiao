import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: 'api/v1/login/',
    data
  })
}

// export const getUserInfo = () => {
//   return request({
//     method: 'GET',
//     url: 'api/v1/user/',
//
//   })
// }
