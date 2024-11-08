let baseUrl = ''
let routerMode = 'history'
let avatarUrl = 'https://p.qqan.com/up/2021-4/16182800486083341.png'
let baseImgPath
if(process.env.NODE_ENV == 'development'){
    baseUrl = 'http://localhost:3060/walls'
    baseImgPath = 'http://localhost:3060'
    avatarUrl = 'https://p.qqan.com/up/2021-4/16182800486083341.png'
}else{
    // 此处只需要修改api.5i21.cn为你的后端地址
    baseUrl = 'http://localhost:3060/walls'
    // 此处只需要修改api.5i21.cn为你的后端地址
    baseImgPath = 'http://localhost:3060/walls'
    // 此处需要修改为自己的头像地址
    avatarUrl = 'https://p.qqan.com/up/2021-4/16182800486083341.png'
}
export {
    baseUrl,
    routerMode,
    baseImgPath,
    avatarUrl
}