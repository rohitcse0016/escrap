import { toast } from './Helper';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import Constant from './Constant';



export const axiosRequest = async (url: string, method: string, params: any = "") => {

    const axiosConfig = axios.create({
        baseURL: 'http://103.20.213.26:8094/api/',
        timeout: 10000,
    });


    switch (method) {
        case Constant.API_REQUEST_METHOD.GET:
            let data = "?";
            let finalUrl = "";
            if (params != "") {
                for (let k in params) {
                    data += `${k}=${params[k]}&`;
                }
                finalUrl = url + data.slice(0, -1);
            } else {
                finalUrl = url;
            }
            console.log({ finalUrl });


            return axiosConfig.get(finalUrl).then(res => {
                return res;

            }).catch(err => {
                console.log(err)
                return err;
            })


        case Constant.API_REQUEST_METHOD.POST:

            console.log({ url, params });
            return axiosConfig.post(url, params).then(res => {
                return res;
            }).catch(err => {
                console.log({ err })
                return err;
            })
    }


}

export function postUrlEncoded(url: string, params: any) {
    return new Promise(function (resolve, reject) {
        const urlencoded = new URLSearchParams();
        for (let k in params) {
            urlencoded.append(k, params[k]);
        }
        // console.log(url);
        // console.log(urlencoded);
        // console.log(urlencoded.toString());

        NetInfo.fetch().then(status => {
            if (status.isConnected) {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: urlencoded.toString(),
                })
                    .then(response => response.json())
                    .then(result => {
                        let type = typeof result;
                        if (type === 'string') {
                            let data = { Msz: result };
                            resolve(data)
                        } else {
                            resolve(result)
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        toast("Something Wrong with Fetch");
                        reject(new Error(error));
                    })
            } else {
                toast("You are not connected to Internet");
                reject(new Error("You are not connected to Internet"));
            }
        }).catch(error => {
            reject(new Error(error));
        });
    })
}


export function getUrl(url: string, params: any = "") {

    return new Promise(function (resolve, reject) {
        let data = "?";
        let finalUrl = "";
        if (params != "") {
            for (let k in params) {
                data += `${k}=${params[k]}&`;
            }
            finalUrl = url + data.slice(0, -1);
        } else {
            finalUrl = url;
        }
        console.log({ finalUrl });

        NetInfo.fetch().then(status => {
            if (status.isConnected) {
                fetch(finalUrl)
                    .then(response => response.json())
                    .then(result => {
                        console.log({ result })
                        resolve(result)
                    })
                    .catch(error => {
                        console.log(error);
                        toast("Something Wrong with Fetch");
                        reject(new Error(error));
                    })
            } else {
                toast("You are not connected to Internet");
                reject(new Error("You are not connected to Internet"));
            }
        }).catch(error => {
            reject(new Error(error));
        });
    })
}

