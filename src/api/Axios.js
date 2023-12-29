import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL:'https://cric-insta-backend.vercel.app/'
  // baseURL: process.env.NEXT_PUBLIC_ROOT_API_URL,
  baseURL: 'http://localhost:8080',
})

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json'
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

export const authHeader = async () => {
  return 'Bearer ' + localStorage.getItem('access-token')
}

const handleApiGet = async (url, requestParams) => {
  try {
    const resp = await axiosInstance({
      method: 'GET',
      url,
      params: requestParams,
      headers: {
        Authorization: await authHeader(),
      },
    })
    const data = {
      status: resp.status,
      data: resp.data,
    }
    if ([200, 201].includes(data.status)) return data
    throw new Error(resp)
  } catch (error) {
    const errorData = {
      status: error?.response?.status,
      errorMessage: error?.response?.data?.errorText,
    }
    console.log(errorData, 'error in get')
  }
}

const handleApiPost = async (url, requestData, requestParams) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await axiosInstance({
        method: 'POST',
        url,
        headers: {
          Authorization: await authHeader(),
        },
        data: requestData,
        params: requestParams,
      })
      const data = {
        status: resp?.status,
        data: resp?.data?.response,
      }
      if ([200, 201].includes(data.status)) return resolve(data)
      throw new Error(resp)
    } catch (error) {
      const errorData = {
        status: error?.response?.status,
        errorMessage: error?.response?.data?.errorText,
      }
      console.log(errorData, 'error in post')
      reject(errorData)
    }
  })
}

export { handleApiGet, handleApiPost }
