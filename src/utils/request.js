const host = "http://rubbish.yankeys.top"

function request(url, method, data, header = {}) {

    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url, //开发者服务器接口地址",
            data: data, //请求的参数",
            method: method,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: res => {
                let data = res.data;
                if(data.code == '10000'){
                    resolve(data.data)
                }
            },
            fail: (err) => {
                reject(err)
            },
            complete: () => { }
        });
    })
}

function get(obj){
    return request(obj.url,'GET',obj.data)
}

function post(obj){
    return request(obj.url,'POST',obj.data)
}

export default {
    request,
    get,
    post,
    host
}