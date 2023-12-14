// 统一请求路径前缀在libs/axios.js中修改
import {
    getRequest,
    postRequest,
    putRequest,
    postFileRequest,
    postBodyRequest,
    deleteRequest,
    getNoAuthRequest,
    postNoAuthRequest,
    getImgRequest
} from '@/libs/axios';
import {
    baseURL
} from '@/api/baseURL'


// 自己封装的请求
// 招投标搜索 /xboot/search/ztbSearch
export const ztbSearch = (params) => {
    return postRequest('/search/ztbSearch', params)
}

// 保存搜索设置
// POST /xboot/searchGroup/save
export const saveSearch = (params) => {
    return postRequest('/searchGroup/save', params)
}

// 拟在建搜索
// POST /xboot/search/nzjSearch
export const nzjSearch = (params) => {
    return postRequest('/search/nzjSearch', params)
}

// 公司信息
// PUT /xboot/company/update
export const update = (params) => {
    return putRequest('/company/update', params)
}

//  获取公司信息
// /xboot/company/get/{id}
export const getCompanyInfo = (id, params) => {
    return getRequest(`/company/get/${id}`, params)
}


// 拿ticket
// GET /xboot/ticket/create/{str}
export const create = (str, params) => {
    return getRequest(`/ticket/create/${str}`, params)
}

// 拿微信绑定的ticket
// /xboot/ticket/wechat
export const toBindWechat = (params) => {
    return getRequest(`/ticket/wechat`, params)
}

// 微信解绑
// /xboot/ticket/unbind
export const unbindWechat = (params) => {
    return getRequest(`/ticket/unbind`, params)
}

// 生成企业微信邀请码
// /xboot/ticket/createQrcode?inviterId=
export const getInviteCode = (inviterId, params) => {
    return getImgRequest(`/ticket/createQrcode?inviterId=${inviterId}`, params)
}

// 生成二维码
export const getCode = (str, params) => {
    return getRequest(`https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=/${str}`, params)
}

// 退出接口
export const getToLogout = (str, params) => {
    return getRequest(`https://www.chinabidding.cn/yuan/logout/Logout/toLogout?sid=${str}`, params)
}

// 获取全部分组信息
// GET /xboot/searchGroup/getByCondition
export const getGroupByCondition = (params) => {
    return getRequest("/searchGroup/getByCondition", params)
}

// 根据分组获取分组信息
// GET /xboot/searchGroup/getAll
export const getAllGroup = (params) => {
    return getRequest("/searchGroup/getAll", params)
}

// 删除单条分组
// DELETE /xboot/searchGroup/delByIds/{ids}
export const removeGroup = (params) => {
    return postRequest(`/searchGroup/delByIds`, params)
}

// 修改分组
// PUT /xboot/searchGroup/update
export const putGroup = (params) => {
    return putRequest(`/searchGroup/update`, params)
}

// 邮件订阅接口
// 查询接口/studio/mailSub/search
export const getMailSub = (params) => {
    return postRequest(`/mailSub/search`, params)
}
// 设置邮件订阅模板
export const getMailSubType = (params) => {
  return postRequest(`/searchGroup/updateMailTemplate`, params)
}

// 邮件订阅分享接口
export const shareMailSub = (params) => {
    return postBodyRequest(`/mailSub/share`, params)
}

// 邮件订阅收藏接口
export const collectMailSub = (params) => {
    return postBodyRequest(`/mailSub/collection`, params)
}





// 更新个人信息
// 
export const updateInfo = (params) => {
    return postRequest('/', params)
}

// 启用订阅
// POST /xboot/searchGroup/enable
export const enable = (params) => {
    return postRequest('/searchGroup/enable', params)
}

// 禁用订阅
// POST /xboot/searchGroup/disable
export const disable = (params) => {
    return postRequest('/searchGroup/disable', params)
}

// 微信分享
// POST /xboot/message/share
export const shareWechat = (params) => {
    return postRequest('/message/share', params)
}

// 获取全部用户数据
export const findAllUserData = (params) => {
    return getRequest('/user/findAll', params)
}

// 获取当前用户登录信息
export const getUserInfo = (params) => {
    return getRequest('/user/getUserInfo', params)
}

// 获取企业邀请验证码跳转flag
export const linkFlag = (params) => {
    return getRequest('/user/getUserInfo', params)
}

// 条件获取收藏列表
// /xboot/collection/getByCondition
export const getCollection = (params) => {
    return getRequest('/collection/getByCondition', params)
}

// 删除收藏列表
// /xboot/collection/delByIds
export const delCollection = (params) => {
    return postRequest('/collection/delByIds', params)
}

// 移除收藏列表
// /xboot/collection/delByIds
export const removeCollection = (params) => {
    return postRequest('/collection/remove', params)
}

// 恢复收藏列表
// /xboot/collection/delByIds
export const restoreCollection = (params) => {
    return postRequest('/collection/restore', params)
}

// 收藏列表改值
// /xboot/collection/update
export const upCollection = (params) => {
    return putRequest('/collection/update', params)
}

// 添加收藏
// /xboot/collection/save
export const saveCollection = (params) => {
    return postRequest('/collection/save', params)
}

// 老商务室收藏信息导入
// 获取老商务室收藏列表
// /previousCollection/list
export const getPreviousCollection = (params) => {
    return getRequest('/previousCollection/list', params)
}


// 导入接口
export const importPreviousCollection = (params) => {
    return postRequest('/collection/import',params)
}

// 全部导入接口
export const importAllCollection = (params) => {
    return getRequest('/collection/importAll',params)
}


// 信息上传
// POST /xboot/user/batchImport
export const uploadUserInfo = (params) => {
    return postBodyRequest('/user/batchImport', params)
}

// 下载错误报告
// POST /xboot/user/export
export const downloadError = (params) => {
    return postFileRequest('/user/export', params)
}

// 根据元博网sessionId获取token
export const getToken = (params) => {
    return postNoAuthRequest('/ticket/login', params)
}

// 退出登录
export const ticketLogout = (params) => {
    return postRequest('/ticket/logout', params)
}


// 产品接口
// 获取全部产品GET /xboot/product/getByCondition
export const getAllProduct = (params) => {
    return getRequest('/product/getByCondition', params)
}

// 频道接口
// GET /xboot/subscribe/getByCondition
export const getChannelBycondition = (params) => {
    return getRequest("/subscribe/getByCondition", params)
}

// POST /xboot/subscribe/delByIds
export const delChannel = (params) => {
    return postRequest('/subscribe/delByIds', params)
}


// 商品详情接口
// GET /xboot/itemDesc/get/{id}
export const getItemDesc = (id, params) => {
    return getRequest(`/itemDesc/get/${id}`, params)
}

// 订单接口
// GET /xboot/order/getByCondition
export const getAllOrder = (params) => {
    return getRequest("/order/getByCondition", params)
}

// 根据id获取订单
// GET /xboot/order/get/${id}
export const getOrderById = (id, params) => {
    return getRequest(`/order/get/${id}`, params)
}

// 保存订单接口
// POST /xboot/order/save
export const saveOrder = (params) => {
    return postRequest('/order/save', params)
}

// 删除订单接口
// POST /xboot/order/delByIds
export const delOrder = (params) => {
    return postRequest('/order/delByIds', params)
}

// 取消订单接口
// GET /xboot/order/cancel/{orderId}
export const cancelOrder = (id, params) => {
    return getRequest(`/order/cancel/${id}`, params)
}



// 支付接口
// POST /xboot/pay/alipay
export const alipay = (params) => {
    return postRequest('/pay/alipay', params)
}

// GET /xboot/wechat/pay
export const wechatPay = (params) => {
    return getRequest('/wechat/pay', params)
}

// 项目管理接口



//GET /studio/project/getByCondition
export const getProjectList = (params) => {
    return getRequest('/project/getByCondition', params)
}

// 更新项目
// POST /studio/project/change
export const changeProject = (params) => {
    return postRequest('/project/change', params)
}

// 删除项目
// POST /studio/project/delByIds
export const delProject = (params) => {
    return postRequest('/project/delByIds', params)
}

// 创建项目
// POST /studio/project/save
export const createProject = (params) => {
    return postRequest('/project/save', params)
}

// POST /studio/project/get/{id}
export const getProjectById = (id, params) => {
    return postRequest(`/project/get/${id}`, params)
}



// 项目公告
// GET /studio/projectInfo/getByCondition
export const getNoticeByCondition = (params) => {
    return getRequest(`/projectInfo/getByCondition`, params)
}

// 批量删除公告
// POST /studio/projectInfo/delByIds
export const delNotice = (params) => {
    return postRequest('/projectInfo/delByIds', params)
}


// 项目管理-评论接口
// 新增评论接口
// POST /studio/comment/save
export const addComment = (params) => {
    return postRequest('/comment/save', params)
}

// 删除评论接口
// POST /studio/comment/delByIds
export const delComment = (params) => {
    return postRequest('/comment/delByIds', params)
}

// 根据条件获取评论接口
// GET /studio/comment/getByCondition
export const getCommentByCondition = (params) => {
    return getRequest('/comment/getByCondition', params)
}



// 项目管理-评论回复接口
// 新增回复接口
// POST /studio/reply/add
export const addReply = (params) => {
    return postRequest('/reply/add', params)
}



// 删除回复接口
// POST /studio/reply/delByIds
export const delReply = (params) => {
    return postRequest('/reply/delByIds', params)
}

// 通过评论id获取回复接口
// GET /studio/reply/getByParentId/{parentId}
export const getReplyById = (parentId, params) => {
    return getRequest(`/studio/reply/getByParentId/${parentId}`, params)
}


// 项目联系人管理接口
// 获取联系人列表
// GET /studio/projectContact/getByCondition
export const getProjectContact = (params) => {
    return getRequest('/projectContact/getByCondition', params)
}

// 保存联系人
// POST /studio/projectContact/save
export const addProjectContact = (params) => {
    return postRequest('/projectContact/save', params)
}

// 删除联系人
// POST /studio/projectContact/delByIds
export const delProjectContact = (params) => {
    return postRequest('/projectContact/delByIds', params)
}

// 项目管理文件储存接口
// POST /studio/projectFile/save
export const saveProjectFile = (params) => {
    return postRequest('/projectFile/save', params)
}

// 删除项目附件
// POST /studio/projectFile/delByIds
export const delProjectFile = (params) => {
    return postRequest('/projectFile/delByIds', params)
}

// 获取项目附件列表
// GET /studio/projectFile/getByCondition
export const getProjectFile = (params) => {
    return getRequest("/projectFile/getByCondition", params)
}

/* 
    项目管理-我的任务
*/
// 获取任务列表
export const getTaskList = (params) => {
    return getRequest("/task/getByCondition", params)
}
// 新建任务
export const addTask = (params) => {
    return postRequest("/task/save", params)
}
// 状态变更
export const changeTask = (params) => {
    return postRequest("/task/change", params)
}
// 删除任务
export const removeTask = (params) => {
    return postRequest("/task/delByIds", params)
}
// 获取全部项目
export const getAllProject = (params) => {
    return getRequest("/project/getByCondition", params)
}
// 任务负责人
export const getManageList = (params) => {
    return getRequest("/projectUser/getByCondition", params)
}
// 查看任务详情
export const taskDetail = (id) => {
    return postRequest("/task/get/" + id, {})
}

/* 
    项目详情-项目组成员
*/
// 添加项目组成员
export const addProjectUser = (params) => {
    return postRequest("/projectUser/save" , params)
}
// 批量删除项目组成员
export const removeProjectUser = (params) => {
    return postRequest("/projectUser/delByIds" , params)
}

// Vaptcha ID
export const vaptchaID = baseURL + "5dce36188713b71e70a41eb7"
// 文件上传接口
export const uploadFile = baseURL + "/studio/upload/file"
// 验证码渲染图片接口
export const drawCodeImage = baseURL + "/studio/common/captcha/draw/"
// 获取菜单
export const getMenuList = baseURL + "/studio/permission/getMenuList"
// 获取数据字典
export const getDictData = baseURL + "/studio/dictData/getByType/"
// Websocket
export const ws = baseURL + "/studio/ws"

// 登陆
export const login = (params) => {
    return postNoAuthRequest('/login', params)
}
// 获取用户登录信息
export const userInfo = (params) => {
    return getRequest('/user/info', params)
}
// 注册
export const regist = (params) => {
    return postNoAuthRequest('/user/regist', params)
}
// 初始化验证码
export const initCaptcha = (params) => {
    return getNoAuthRequest('/common/captcha/init', params)
}
// 发送登录短信验证码
export const sendLoginSms = (mobile, params) => {
    return getNoAuthRequest(`/common/captcha/sendLoginSms/${mobile}`, params)
}
// 发送注册短信验证码
export const sendRegistSms = (mobile, params) => {
    return getNoAuthRequest(`/common/captcha/sendRegistSms/${mobile}`, params)
}
// 发送重置密码短信验证码
export const sendResetSms = (mobile, params) => {
    return getNoAuthRequest(`/common/captcha/sendResetSms/${mobile}`, params)
}
// 发送修改绑定手机短信验证码
export const sendEditMobileSms = (mobile, params) => {
    return getRequest(`/common/captcha/sendEditMobileSms/${mobile}`, params)
}
// 通过手机重置密码
export const resetByMobile = (params) => {
    return postNoAuthRequest('/user/resetByMobile', params)
}
// 发送重置密码邮件验证码
export const sendResetEmail = (email, params) => {
    return getNoAuthRequest(`/email/sendResetCode/${email}`, params)
}
// 发送修改绑定邮件验证码
export const sendEditEmail = (email, params) => {
    return getRequest(`/email/sendEditCode/${email}`, params)
}
// 通过邮件重置密码
export const resetByEmail = (params) => {
    return postNoAuthRequest('/email/resetByEmail', params)
}
// 短信验证码登录
export const smsLogin = (params) => {
    return postRequest('/user/smsLogin', params)
}
// IP天气信息
export const ipInfo = (params) => {
    return getRequest('/common/ip/info', params)
}
// 个人中心编辑
export const userInfoEdit = (params) => {
    return postRequest('/user/edit', params)
}
// 个人中心发送修改邮箱验证邮件
export const sendCodeEmail = (email, params) => {
    return getRequest(`/email/sendCode/${email}`, params)
}
// 个人中心发送修改邮箱验证邮件
export const editEmail = (params) => {
    return postRequest('/email/editEmail', params)
}
// 个人中心修改密码
export const changePass = (params) => {
    return postRequest('/user/modifyPass', params)
}
// 个人中心修改手机
export const changeMobile = (params) => {
    return postRequest('/user/changeMobile', params)
}
// 解锁
export const unlock = (params) => {
    return postRequest('/user/unlock', params)
}
// 获取公告
export const getNotice = (params) => {
    return getNoAuthRequest('/setting/notice', params)
}



// github登录
export const githubLogin = (params) => {
    return getNoAuthRequest('/social/github/login', params)
}
// qq登录
export const qqLogin = (params) => {
    return getNoAuthRequest('/social/qq/login', params)
}
// 微博登录
export const weiboLogin = (params) => {
    return getNoAuthRequest('/social/weibo/login', params)
}
// 微信登录
export const wechatLogin = (params) => {
    return getNoAuthRequest('/social/wechat/login', params)
}
// 绑定账号
export const relate = (params) => {
    return postNoAuthRequest('/social/relate', params)
}
// 获取JWT
export const getJWT = (params) => {
    return getNoAuthRequest('/social/getJWT', params)
}



// 获取绑定账号信息
export const relatedInfo = (username, params) => {
    return getRequest(`/relate/getRelatedInfo/${username}`, params)
}
// 解绑账号
export const unRelate = (params) => {
    return postRequest('/relate/delByIds', params)
}
// 分页获取绑定账号信息
export const getRelatedListData = (params) => {
    return getRequest('/relate/findByCondition', params)
}



// 获取用户数据 多条件
export const getUserListData = (params) => {
    return getRequest('/user/getByCondition', params)
}
// 通过用户名搜索
export const searchUserByName = (username, params) => {
    return getRequest('/user/searchByName/' + username, params)
}
// 获取全部用户数据
export const getAllUserData = (params) => {
    return getRequest('/user/getAll', params)
}
// 通过部门获取全部用户数据
export const getUserByDepartmentId = (id, params) => {
    return getRequest(`/user/getByDepartmentId/${id}`, params)
}
// 添加用户
export const addUser = (params) => {
    return postRequest('/user/admin/add', params)
}
// 编辑用户
export const editUser = (params) => {
    return postRequest('/user/admin/edit', params)
}
// 启用用户
export const enableUser = (id, params) => {
    return postRequest(`/user/admin/enable/${id}`, params)
}
// 禁用用户
export const disableUser = (id, params) => {
    return postRequest(`/user/admin/disable/${id}`, params)
}
// 删除用户
export const deleteUser = (params) => {
    return postRequest('/user/delByIds', params)
}

// 移除用户
export const detachUser = (params) => {
    return postRequest('/user/admin/remove', params)
}


// 导入用户
export const importUserData = (params) => {
    return postBodyRequest('/user/importData', params)
}
// 重置用户密码
export const resetUserPass = (params) => {
    return postRequest('/user/resetPass', params)
}



// 获取一级部门
export const initDepartment = (params) => {
    return getRequest('/department/getByParentId/0', params)
}
// 加载部门子级数据
export const loadDepartment = (id, params) => {
    return getRequest(`/department/getByParentId/${id}`, params)
}
// 添加部门
export const addDepartment = (params) => {
    return postRequest('/department/add', params)
}
// 编辑部门
export const editDepartment = (params) => {
    return postRequest('/department/edit', params)
}
// 删除部门
export const deleteDepartment = (params) => {
    return postRequest('/department/delByIds', params)
}
// 搜索部门
export const searchDepartment = (params) => {
    return getRequest('/department/search', params)
}



// 获取全部角色数据
export const getAllRoleList = (params) => {
    return getRequest('/role/getAllList', params)
}
// 分页获取角色数据
export const getRoleList = (params) => {
    return getRequest('/role/getAllByPage', params)
}
// 添加角色
export const addRole = (params) => {
    return postRequest('/role/save', params)
}
// 编辑角色
export const editRole = (params) => {
    return postRequest('/role/edit', params)
}
// 设为或取消注册角色
export const setDefaultRole = (params) => {
    return postRequest('/role/setDefault', params)
}
// 分配角色权限
export const editRolePerm = (params) => {
    return postRequest('/role/editRolePerm', params)
}
// 分配角色数据权限
export const editRoleDep = (params) => {
    return postRequest('/role/editRoleDep', params)
}
// 删除角色
export const deleteRole = (params) => {
    return postRequest('/role/delByIds', params)
}



// 获取全部权限数据
export const getAllPermissionList = (params) => {
    return getRequest('/permission/getAllList', params)
}
// 添加权限
export const addPermission = (params) => {
    return postRequest('/permission/add', params)
}
// 编辑权限
export const editPermission = (params) => {
    return postRequest('/permission/edit', params)
}
// 删除权限
export const deletePermission = (params) => {
    return postRequest('/permission/delByIds', params)
}
// 搜索权限
export const searchPermission = (params) => {
    return getRequest('/permission/search', params)
}



// 获取全部字典
export const getAllDictList = (params) => {
    return getRequest('/dict/getAll', params)
}
// 添加字典
export const addDict = (params) => {
    return postRequest('/dict/add', params)
}
// 编辑字典
export const editDict = (params) => {
    return postRequest('/dict/edit', params)
}
// 删除字典
export const deleteDict = (params) => {
    return postRequest('/dict/delByIds', params)
}
// 搜索字典
export const searchDict = (params) => {
    return getRequest('/dict/search', params)
}
// 获取全部字典数据
export const getAllDictDataList = (params) => {
    return getRequest('/dictData/getByCondition', params)
}
// 添加字典数据
export const addDictData = (params) => {
    return postRequest('/dictData/add', params)
}
// 编辑字典数据
export const editDictData = (params) => {
    return postRequest('/dictData/edit', params)
}
// 删除字典数据
export const deleteData = (params) => {
    return postRequest('/dictData/delByIds', params)
}
// 通过类型获取字典数据
export const getDictDataByType = (type, params) => {
    return getRequest(`/dictData/getByType/${type}`, params)
}



// 分页获取日志数据
export const getLogListData = (params) => {
    return getRequest('/log/getAllByPage', params)
}
// 删除日志
export const deleteLog = (params) => {
    return postRequest('/log/delByIds', params)
}
// 清空日志
export const deleteAllLog = (params) => {
    return postRequest('/log/delAll', params)
}


// 分页获取Redis数据
export const getRedisData = (params) => {
    return getRequest('/redis/getAllByPage', params)
}
// 通过key获取Redis信息
export const getRedisByKey = (key, params) => {
    return getRequest(`/redis/getByKey/${key}`, params)
}
// 获取Redis键值数量
export const getRedisKeySize = (params) => {
    return getRequest('/redis/getKeySize', params)
}
// 获取Redis内存
export const getRedisMemory = (params) => {
    return getRequest('/redis/getMemory', params)
}
// 获取Redis信息
export const getRedisInfo = (params) => {
    return getRequest('/redis/info', params)
}
// 添加编辑Redis
export const saveRedis = (params) => {
    return postRequest('/redis/save', params)
}
// 删除Redis
export const deleteRedis = (params) => {
    return postRequest('/redis/delByKeys', params)
}
// 清空Redis
export const deleteAllRedis = (params) => {
    return postRequest('/redis/delAll', params)
}



// 分页获取定时任务数据
export const getQuartzListData = (params) => {
    return getRequest('/quartzJob/getAllByPage', params)
}
// 添加定时任务
export const addQuartz = (params) => {
    return postRequest('/quartzJob/add', params)
}
// 编辑定时任务
export const editQuartz = (params) => {
    return postRequest('/quartzJob/edit', params)
}
// 暂停定时任务
export const pauseQuartz = (params) => {
    return postRequest('/quartzJob/pause', params)
}
// 恢复定时任务
export const resumeQuartz = (params) => {
    return postRequest('/quartzJob/resume', params)
}
// 删除定时任务
export const deleteQuartz = (params) => {
    return postRequest('/quartzJob/delByIds', params)
}



// 分页获取消息数据
export const getMessageData = (params) => {
    return getRequest('/message/getByCondition', params)
}
// 获取单个消息详情
export const getMessageDataById = (id, params) => {
    return getRequest(`/message/get/${id}`, params)
}
// 添加消息
export const addMessage = (params) => {
    return postRequest('/message/add', params)
}
// 编辑消息
export const editMessage = (params) => {
    return postRequest('/message/edit', params)
}
// 删除消息
export const deleteMessage = (params) => {
    return postRequest('/message/delByIds', params)
}
// 分页获取消息推送数据
export const getMessageSendData = (params) => {
    return getRequest('/messageSend/getByCondition', params)
}
// 编辑发送消息
export const editMessageSend = (params) => {
    return putRequest('/messageSend/update', params)
}
// 删除发送消息
export const deleteMessageSend = (params) => {
    return postRequest('/messageSend/delByIds', params)
}



// 分页获取文件数据
export const getFileListData = (params) => {
    return getRequest('/file/getByCondition', params)
}
// 复制文件
export const copyFile = (params) => {
    return postRequest('/file/copy', params)
}
// 重命名文件
export const renameFile = (params) => {
    return postRequest('/file/rename', params)
}
// 删除文件
export const deleteFile = (params) => {
    return postRequest('/file/delete', params)
}
// 下载文件
export const aliDownloadFile = (fKey, params) => {
    return getRequest(`/file/ali/download/${fKey}`, params)
}


// 检查oss配置
export const checkOssSet = (params) => {
    return getRequest('/setting/oss/check', params)
}
// 获取oss配置
export const getOssSet = (serviceName, params) => {
    return getRequest(`/setting/oss/${serviceName}`, params)
}
// 编辑oss配置
export const editOssSet = (params) => {
    return postRequest('/setting/oss/set', params)
}
// 获取sms配置
export const getSmsSet = (serviceName, params) => {
    return getRequest(`/setting/sms/${serviceName}`, params)
}
// 获取sms模板code
export const getSmsTemplateCode = (type, params) => {
    return getRequest(`/setting/sms/templateCode/${type}`, params)
}
// 编辑sms配置
export const editSmsSet = (params) => {
    return postRequest('/setting/sms/set', params)
}
// 获取email配置
export const getEmailSet = (serviceName, params) => {
    return getRequest('/setting/email', params)
}
// 编辑email配置
export const editEmailSet = (params) => {
    return postRequest('/setting/email/set', params)
}
// 获取vaptcha配置
export const getVaptchaSet = (params) => {
    return getRequest('/setting/vaptcha', params)
}
// 编辑vaptcha配置
export const editVaptchaSet = (params) => {
    return postRequest('/setting/vaptcha/set', params)
}
// 获取vaptcha配置
export const getOtherSet = (params) => {
    return getRequest('/setting/other', params)
}
// 编辑other配置
export const editOtherSet = (params) => {
    return postRequest('/setting/other/set', params)
}
// 获取notice配置
export const getNoticeSet = (params) => {
    return getRequest('/setting/notice', params)
}
// 编辑notice配置
export const editNoticeSet = (params) => {
    return postRequest('/setting/notice/set', params)
}
// 查看私密配置
export const seeSecretSet = (settingName, params) => {
    return getRequest(`/setting/seeSecret/${settingName}`, params)
}

// 表格生成
export const generateTable = (name, rowNum, params) => {
    return postBodyRequest(`/generate/table/${name}/${rowNum}`, params)
}
// 树生成
export const generateTree = (name, rowNum, params) => {
    return postBodyRequest(`/generate/tree/${name}/${rowNum}`, params)
}
// 通过实体类生成Vue代码Json数据
export const getEntityData = (path, params) => {
    return getRequest(`/generate/getEntityData/${path}`, params)
}

// base64上传
export const base64Upload = (params) => {
    return postRequest('/upload/file', params)
}


// 供应商工作台-我的关注-列表
export const supplierInterestList = (params) => {
    return getRequest('/focus/getByCondition', params)
}
// 供应商工作台-我的关注-企业关注
export const supplierInterestFocus = (params) => {
    return postRequest('/focus/focusCompany/' + params.id, {})
}
// 供应商工作台-我的关注-取消关注
export const supplierInterestUnfocus = (params) => {
    return postRequest('/focus/unFocus/' + params.id, {})
}
// 供应商工作台-我的报名-列表
export const supplierEnterList = (params) => {
    return getRequest('/signMessage/getList', params)
}
// 供应商工作台-我的报名-信息详情
export const supplierEnterDetail = (params) => {
    return postRequest('/signMessage/getDetail', params)
}
// 供应商工作台-我的线索-列表
export const supplierClueList = (params) => {
    return getRequest('/agentClaim/getByCondition', params)
}
// 供应商工作台-批量删除认领-
export const deleteClaim = (params) => {
    return postRequest('/agentClaim/unClaimInfos', params)
}
// 供应商工作台-推荐线索列表-
export const claimRecommendList = (params) => {
    return getRequest('/agentIndex/getRecommend', params)
}
// 供应商工作台-认领线索-
export const claimInfo = (params) => {
    return postRequest('/agentClaim/claimInfo/' + params.id, {})
}
// 供应商工作台-取消认领线索-
export const unClaimInfo = (params) => {
    return postRequest('/agentClaim/unClaimInfo/' + params.id, {})
}
// 供应商工作台-批量认领-
export const allClaimInfo = (params) => {
    return postRequest('/agentClaim/claimInfos', params)
}
// 供应商工作台-我的线索-跟进情况获取-
export const getTrackInfo = (params) => {
    return getRequest('/claim/findAll', params)
}
// 供应商工作台-我的线索-跟进情况删除-
export const deteleTrackInfo = (params) => {
    return postRequest('/claim/delete/' + params.id)
}
// 供应商工作台-我的线索-跟进情况保存-
export const saveTrackInfo = (params) => {
    return postRequest('/claim/save', params)
}
// 供应商工作台-我的线索附件上传url-
export const uploadUrl = '/studio/signMessage/uploadCert'

// 供应商工作台-我的线索 一键报名回显
export const getEnterInfo = (params) => {
    return postRequest('/signMessage/auth/' + params.id, {})
}
// 供应商工作台-我的线索 一键报名保存
export const saveEnterInfo = (params) => {
    return postRequest('/signMessage/saveMessage', params)
}

// 供应商工作台-首页获取供应商个人信息-
export const getSupplierInfo = (params) => {
    return getRequest('/settleManage/getComPanyInfo', params)
}
// 供应商工作台-首页获取供应商个人信息-
export const getCgxxRmd = (params) => {
    return getRequest('/agentIndex/getCgxxRecommend', params)
}
// 供应商工作台-获取供应商权限
export const getSupplierAuth = (params) => {
    return getRequest('/supplierSetManage/getSupplierSetManage', params)
}
// 供应商工作台-获取行业
export const getCategory = (params) => {
    return getRequest('/baseCategory/getCategory', params)
}
// 供应商工作台-补发中标-获取地区
export const getArea = (params) => {
    return getRequest('/baseProvice/getArea', params)
}
// 供应商工作台-补发中标-获取行业
export const getIndustry = (params) => {
    return getRequest('/agentInfo/showCategory', params)
}

// 供应商工作台-信息管理-获取信息列表
export const getDefaultInfo = (params) => {
    return getRequest('/agentInfo/mobilList', params)
}

// 供应商工作台-补发中标-获取公告回显信息
export const getEchoInfo = (params) => {
    return getRequest('/agentInfo/showInfo', params)
}
// 供应商工作台-补发中标-提交保存
export const save = (params) => {
    return postRequest('/agentInfo/saveInfo', params)
}

// 供应商工作台-补发中标-获取手机验证码
export const getMessage = (phone) => {
    return getRequest(`/common/captcha/sendAgentInfoMobileSms/${phone}`,{})
}

// 供应商工作台-补发中标-上传文件地址
export const uploadUrl_reissue = baseURL + "/studio/agentInfo/upFile"

// 供应商工作台-信息管理-删除文件
export const delete_File = (params) => {
    return getRequest('/agentInfoAttach/deleAttach', params)
}

// 供应商工作台-信息管理-获取信息列表
export const getManagerInfo = (params) => {
    return getRequest('/agentInfo/infoList', params)
}

// 供应商工作台-信息管理-删除信息
export const delManagerInfo = (params) => {
    return getRequest('/agentInfo/delet', params)
}
// 供应商工作台-信息管理-提交信息
export const sendManagerInfo = (params) => {
    return getRequest('/agentInfo/sendInfo', params)
}






/* 
    
*/