import axios from "axios";
import config from "../config"
import Qs from 'qs';
import {Message} from 'antd';

const axiosBack = {
  sucSend(head) {
    return head;
  },
  errSend(err) {
    return Promise.reject(err);
  },
  sucBack(res) {
    if (res.status == '200') {
      return res.data;
    } else {
      Message.info(res.data.msg);
    }
  },
  errBack(err) {
    Message.warn('网络不稳定,请检查网络',);
    return Promise.reject(err);
  },
}


const axios_Xform = function () {
  const header_Xform = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'ClientType': 'Platfrom',
    'ClientSystem': 'Platfrom',
    'Equipment': 'Platfrom',
  };
  const axios_Xform = axios.create({
    baseURL: config.baseUrl,
    timeout: 60 * 1000,
    withCredentials: true,
    headers: header_Xform,
    transformRequest: [
      function (data) {
        data = Qs.stringify(data);
        return data;
      }
    ]
  });
  axios_Xform.interceptors.request.use(axiosBack.sucSend, axiosBack.errSend);
  axios_Xform.interceptors.response.use(axiosBack.sucBack, axiosBack.errBack);
  return axios_Xform;
}

const axios_Json = function () {
  const header_Json = {
    'Content-Type': 'application/json',
    'ClientType': 'Platfrom',
    'ClientSystem': 'Platfrom',
    'Equipment': 'Platfrom',
  };
  const axios_Json = axios.create({
    baseURL: config.baseUrl,
    timeout: 60 * 1000,
    withCredentials: true,
    headers: header_Json,
  });
  axios_Json.interceptors.request.use(axiosBack.sucSend, axiosBack.errSend);
  axios_Json.interceptors.response.use(axiosBack.sucBack, axiosBack.errBack);
  return axios_Json;
}

export {
  axios_Json,
  axios_Xform
};
