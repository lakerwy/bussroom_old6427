import { getRequest, postRequest, putRequest, postFileRequest, postBodyRequest, deleteRequest, getNoAuthRequest, postNoAuthRequest, getImgRequest } from '@/libs/axios';

/**
 * @api {post} /infoPublish/user/registerInfo 注册/填写注册信息
 * @apiName RegisterInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} organizationName 机构名称
 * @apiParam {Number} organizationCode 统一社会信用代码
 * @apiParam {Number} city 所在行政区域编号
 * @apiParam {String} userName 姓名
 * @apiParam {Number} idCardNum 身份证号
 * @apiParam {String} email 邮箱
 * @apiParam {Number} phoneNumber  手机号
 * @apiParam {Number} vCode  验证码
 * 
 * @apiSuccess {Number}  id 注册成功id
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result":{"id": 300005038}
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const registerInfo = (params) => {
  return postRequest('/infoPublish/user/registerInfo', params)
}

/**
 * @api {post} /infoPublish/user/registerCode 注册/获取验证码
 * @apiName RegisterCode
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} phoneNumber  手机号
 * 
 * @apiSuccess {Number}  vCode 注册验证码
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {"vCode": 123456}
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const registerCode = (params) => {
  return postRequest('/infoPublish/user/registerCode', params)
}

/**
 * @api {post} /infoPublish/user/uploadAuth 注册/上传授权书
 * @apiName UploadAuth
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} id 填写注册信息时返回的id
 * @apiParam {File} file 授权书文件
 * 
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const uploadAuth = (params) => {
  return postRequest('/infoPublish/user/uploadAuth', params)
}

/**
 * @api {get} /infoPublish/user/checkPhone 密码设置/查询手机号是否已注册
 * @apiName CheckPhone
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} phoneNumber 手机号
 * 
 * @apiSuccess {Number}  status 注册状态
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result":{"status": 1}
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const checkPhone = (params) => {
  return getRequest('/infoPublish/user/checkPhone', params)
}

/**
 * @api {get} /infoPublish/user/passwordCode 密码设置/获取验证码
 * @apiName PasswordCode
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} phoneNumber 手机号
 * 
 * @apiSuccess {Number}  psdCode 验证码
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result":{"psdCode": 123456}
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const passwordCode = (params) => {
  return getRequest('/infoPublish/user/passwordCode', params)
}

/**
 * @api {post} /infoPublish/user/updatePassword 密码设置/修改密码
 * @apiName UpdatePassword
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} phoneNumber 手机号
 * @apiParam {Number} psdCode 验证码
 * 
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const updatePassword = (params) => {
  return postRequest('/infoPublish/user/updatePassword', params)
}

/**
 * @api {get} /infoPublish/user/organizationDetail 机构详情/获取机构详情
 * @apiName OrganizationDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * 
 * @apiSuccess {String} organizationName 机构名称
 * @apiSuccess {Number} organizationCode 统一社会信息代码
 * @apiSuccess {String} city 所在行政区域
 * @apiSuccess {String} organizationAuth 法定代表人授权书
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result":{
 *            "organizationName" : "北京某某建筑设计咨询有限公司",
 *            "organizationCode":1234*******************6666,
 *            "city":"北京市",
 *            "String": "http://***"
 *        }
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const organizationDetail = (params) => {
  return postRequest('/infoPublish/user/organizationDetail', params)
}

/**
 * @api {get} /infoPublish/user/userList 机构详情/机构绑定账号列表
 * @apiName UserList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} dayNum 近7/30天绑定账号列表
 * @apiSuccess {Number} id 账号id
 * @apiSuccess {String} name 姓名
 * @apiSuccess {Number} phoneNumber 手机号
 * @apiSuccess {Number} zbggNumber 招标公告发布
 * @apiSuccess {Number} zbhxrNumber 中标候选人发布
 * @apiSuccess {Number} zbjgNumber 中标结果发布
 * @apiSuccess {Number} zgysNumber 资格预审发布
 * @apiSuccess {String} bindDate 绑定时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "id": 1,
 *                  "name": "李某",
 *                  "phoneNumber": 135****5666,
 *                  "zbggNumber": 22,
 *                  "zbhxrNumber": 33,
 *                  "zbjgNumber": 55,
 *                  "zgysNumber": 66,
 *                  "bindDate": "2020-11-22 11:22:33",
 *                }
 *            ]
 *        }
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const userList = (params) => {
  return getRequest('/infoPublish/user/userList', params)
}

/**
 * @api {get} /infoPublish/user/organizationTotal 机构详情/机构整体情况
 * @apiName OrganizationTotal
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} dayNum 近7/30天绑定账号列表
 * @apiSuccess {Number} userTotal 绑定账号数
 * @apiSuccess {Number} zbggTotal 招标公告发布
 * @apiSuccess {Number} zbhxrTotal 中标候选人发布
 * @apiSuccess {Number} zbjgTotal 中标结果发布
 * @apiSuccess {Number} zgysTotal 资格预审发布
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *              "userTotal": 12,
 *              "zbggTotal": 22,
 *              "zbhxrTotal": 33,
 *              "zbjgTotal": 44,
 *              "zgysTotal": 55,
 *        }
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const organizationTotal = (params) => {
  return getRequest('/infoPublish/user/organizationTotal', params)
}

/**
 * @api {get} /infoPublish/user/adminInfo 人员设置/机构管理员信息
 * @apiName AdminInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {String} name 姓名
 * @apiSuccess {Number} idCard 身份证号
 * @apiSuccess {String} email 邮箱
 * @apiSuccess {Number} phoneNumber 手机号
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *              "name": "李**",
 *              "idCard": 1234*******************6666,
 *              "email": "1234567@qqcom",
 *              "phoneNumber": 123****3456,
 *        }
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const organizationTotal = (params) => {
  return getRequest('/infoPublish/user/organizationTotal', params)
}

/**
 * @api {POST} /infoPublish/user/removeBind 人员设置/解除绑定
 * @apiName RemoveBind
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} id 操作员id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const removeBind = (params) => {
  return postRequest('/infoPublish/user/removeBind', params)
}

/**
 * @api {POST} /infoPublish/user/bindUser 人员设置/绑定操作员
 * @apiName BindUser
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} name 姓名
 * @apiParam {Number} phoneNumber 手机号
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bindUser = (params) => {
  return postRequest('/infoPublish/user/bindUser', params)
}

/**
 * @api {GET} /infoPublish/home/publishTotal 首页/发布统计
 * @apiName PublishTotal
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {Number} zbxmTotal 招标项目统计
 * @apiSuccess {Number} zbxmNumber 招标项目已失联
 * @apiSuccess {Number} zbggTotal 招标公告统计
 * @apiSuccess {Number} zbggNumber 招标公告未发布
 * @apiSuccess {Number} zbhxrTotal 中标候选人统计
 * @apiSuccess {Number} zbhxrNumber 中标候选人未发布
 * @apiSuccess {Number} zbjgTotal 中标结果统计
 * @apiSuccess {Number} zbjgNumber 中标结果未发布
 * @apiSuccess {Number} zgysTotal 资格预审统计
 * @apiSuccess {Number} zgysNumber 资格预审未发布
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "zbxmTotal": 1,
 *            "zbxmNumber": 2,
 *            "zbggTotal": 3,
 *            "zbggNumber": 4,
 *            "zbhxrTotal": 5,
 *            "zbhxrNumber": 6,
 *            "zbjgTotal": 7,
 *            "zbjgNumber": 8,
 *            "zgysTotal": 9,
 *            "zgysNumber": 10
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const publishTotal = (params) => {
  return getRequest('/infoPublish/home/publishTotal', params)
}

/**
 * @api {GET} /infoPublish/home/likeTotal 首页/点赞统计
 * @apiName LikeTotal
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {Number} xmLikeTotal 项目点赞总数
 * @apiSuccess {Number} zbggLikeTotal 招标公告点赞总数
 * @apiSuccess {Number} zbhxrgsLikeTotal 招标候选人公示点赞总数
 * @apiSuccess {Number} xmStatus 项目点赞状态 1-已点赞，0-未点赞
 * @apiSuccess {Number} zbggStatus 招标公告点赞状态 1-已点赞，0-未点赞
 * @apiSuccess {Number} zbhxrgsStatus 中标候选人公示状态 1-已点赞，0-未点赞
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "xmLikeTotal": 100,
 *            "zbggLikeTotal": 200,
 *            "zbhxrgsLikeTotal": 300,
 *            "xmStatus": 1,
 *            "zbggStatus": 0,
 *            "zbhxrgsStatus": 1,
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const likeTotal = (params) => {
  return getRequest('/infoPublish/home/likeTotal', params)
}

/**
 * @api {GET} /infoPublish/home/like 首页/点赞
 * @apiName Like
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} status 点赞状态 1-点赞，0-取消赞
 * @apiParam {Number} type 点赞类型 1-项目，2-招标公告，3-中标候选人公示
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const like = (params) => {
  return getRequest('/infoPublish/home/like', params)
}

/**
 * @api {GET} /infoPublish/home/allRemindList 首页/全部提醒列表
 * @apiName AllRemindList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {Number} id 提醒id
 * @apiSuccess {String} title 提醒内容
 * @apiSuccess {String} date 提醒时间
 * @apiSuccess {Number} type 提醒类型 1-投标报名，2-公告
 * @apiSuccess {Number} status 已读状态 1-已读，0-未读
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "id": 1,
 *                  "title": "石家庄市桥西区发展改革局新石中路377号写字楼物业管理服务采购招标公告",
 *                  "date": "2020-11-22 22:33:44",
 *                  "type": 1,
 *                  "status": 1,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const allRemindList = (params) => {
  return getRequest('/infoPublish/home/allRemindList', params)
}

/**
 * @api {GET} /infoPublish/home/allRead 首页/设置全部已读
 * @apiName AllRead
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const allRead = (params) => {
  return getRequest('/infoPublish/home/allRead', params)
}

/**
 * @api {GET} /infoPublish/home/oneRead 首页/设置已读
 * @apiName OneRead
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} id 提醒消息id
 * @apiParam {Number} status 已读状态 1-已读，0-未读
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const oneRead = (params) => {
  return getRequest('/infoPublish/home/oneRead', params)
}

/**
 * @api {GET} /infoPublish/home/allPublishList 所有公告/所有公告状态列表
 * @apiName AllPublishList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} keywords 查询关键词
 * @apiParam {String} date 状态时间
 * @apiParam {Number} type 公告类型 1-招标公告，2-中标候选人公示，3-中标结果公告，4-资格预审公示
 * @apiParam {Number} status 公告状态 0-未发布，1-已发布，2-未提交，3-已开标，4-废标
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiSuccess {Number} publishId 公告id
 * @apiSuccess {String} publishName 公告名称
 * @apiSuccess {Number} publishStatus 公告状态
 * @apiSuccess {Number} publishType 公告类型 
 * @apiSuccess {String} publishDate 状态时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "publishId": 1,
 *                  "publishName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                  "publishDate": "2020-11-22 22:33:44",
 *                  "publishType": 1,
 *                  "publishStatus": 1,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const allPublishList = (params) => {
  return getRequest('/infoPublish/home/allPublishList', params)
}

// ##招标项目-------------------------------------
/**
 * @api {GET} /infoPublish/project/projectList 招标项目/招标项目列表
 * @apiName ProjectList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} keywords 查询关键词
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiSuccess {Number} projectId 项目id
 * @apiSuccess {String} projectName 招标项目名称
 * @apiSuccess {Number} projectStatus 项目状态 1-已保存，2-已提交
 * @apiSuccess {String} projectLastDate 最后时间
 * @apiSuccess {Number} relationNum 关联公告
 * @apiSuccess {Number} publishedNum 已发布
 * @apiSuccess {Number} unpublishedNum 未发布
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "projectId": 1,
 *                  "projectName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                  "projectLastDate": "2020-11-22 22:33:44",
 *                  "projectStatus": 1,
 *                  "relationNum": 11,
 *                  "publishedNum": 12,
 *                  "unpublishedNum": 13,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const projectList = (params) => {
  return getRequest('/infoPublish/project/projectList', params)
}

/**
 * @api {GET} /infoPublish/project/projectDetail 招标项目/项目详情
 * @apiName ProjectDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 项目id
 * @apiSuccess {String} projectName 招标项目名称
 * @apiSuccess {String} projectSize 招标项目规模及概况
 * @apiSuccess {String} projectRange 招标内容和范围
 * @apiSuccess {Object} sources 资金来源
 * @apiSuccess {Array} bids 标段信息
 * @apiSuccess {String} supervisionDep 监督部门
 * @apiSuccess {Object} contactInfo 联系方式
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "projectName": "中国电信股份有限公司喀什分公司校园行业室内、室外插大卡机采购项目",
 *            "projectSize": "本招标项目玉树市商改住项目（一、二标段）....",
 *            "projectRange": "本招标项目玉树市商改住项目（一、二标段）....",
 *            "sources":{
 *                "selfSource": 120,
 *                "stateSource": 220,
 *            },
 *            "bids":[
 *                {
 *                  "bidName" : "小学教学楼工程招标",  标段名
 *                  "bidNumber" : 123456789765432112,  标段编号
 *                  "bidClass" : "房地产建筑",        标段专业分类
 *                  "bidCity" : "北京",               所在行政区域
 *                  "bidType" : "公开招标",           标段招标方式    
 *                  "bidDate" : "2020-11-22",        建立时间
 *                }
 *            ],
 *            "supervisionDep": "中国***公司",
 *            "contactInfo": {
 *                "bidder": "中国邮政集团公司辽源市分公司",       招标人
 *                "bidderAddress": "辽源市隆基华典55号楼门市",    地址
 *                "bidderContacts": "张三",                         联系人
 *                "bidderTel": "0437-3112056",                  电话
 *                "bidderEmail": "276599@qq.com",               电子邮件
 *                "company": "辽源市宏基建设工程招标有限公司",     招标代理机构
 *                "companyAddress": "辽源市隆基华典55号楼门市",   地址
 *                "companyContacts": "李四",                        联系人
 *                "companyTel": "0437-3116563",                 联系电话
 *                "companyEmail": "276599@qq.com",              电子邮件
 *            },    
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const projectDetail = (params) => {
  return getRequest('/infoPublish/project/projectDetail', params)
}

/**
 * @api {GET} /infoPublish/project/bidManageList 招标项目/投标管理
 * @apiName bidManageList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 项目id
 * @apiParam {Number} projectId 招标公告id
 * @apiSuccess {Number} tenderId 招标公告id
 * @apiSuccess {String} tenderName 招标公告名称
 * @apiSuccess {Number} tenderStatus 招标公告状态 0-未发布，1-已发布，2-未提交，3-已开标，4-废标
 * @apiSuccess {String} tenderDate 招标公告状态时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "tenderId": 1,
 *                  "tenderName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                  "tenderDate": "2020-11-22 22:33:44",
 *                  "tenderStatus": 1,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidManageList = (params) => {
  return getRequest('/infoPublish/project/bidManageList', params)
}

/**
 * @api {GET} /infoPublish/project/projectNumber 招标项目/获取招标项目编号
 * @apiName ProjectNumber
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {String} projectNumber 招标项目编号
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "projectNumber": "CBL2018071390874255780216",
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const projectNumber = (params) => {
  return getRequest('/infoPublish/project/projectNumber', params)
}

/**
 * @api {POST} /infoPublish/project/addProjectInfo 招标项目/新建招标项目基本信息
 * @apiName AddProjectInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} projectNumber 招标项目编号
 * @apiParam {Number} projectCode 投资项目统一代码
 * @apiParam {String} projectName 招标项目名称
 * @apiParam {Number} projectClass 所属行业分类
 * @apiParam {String} projectCity 所在行政区域
 * @apiParam {Number} projectType 招标方式
 * @apiParam {Number} projectStatus 招标组织形式
 * @apiParam {String} projectRange 招标内容和范围
 * @apiParam {String} projectSize 招标项目规模及概况
 * @apiParam {String} supervisionDep 监督部门名称
 * @apiParam {Number} supervisionCode 监督部门代码
 * @apiSuccess {Number} id 招标项目id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "projectId"：2
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const addProjectInfo = (params) => {
  return postRequest('/infoPublish/project/addProjectInfo', params)
}

/**
 * @api {POST} /infoPublish/project/projectSource 招标项目/资金来源
 * @apiName ProjectSource
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} stateSource 国有资金
 * @apiParam {Number} abroadSource 境外资金
 * @apiParam {Number} privateSource 私有资金
 * @apiParam {Number} selfSource 自筹资金
 * @apiParam {Number} otherSource 其他
 * @apiParam {Number} foreignSource 外国政府及企业投资
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const projectSource = (params) => {
  return postRequest('/infoPublish/project/projectSource', params)
}

/**
 * @api {POST} /infoPublish/project/bidderInfo 招标项目/招标人、招标代理机构信息
 * @apiName BidderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} bidder 招标人名称
 * @apiParam {String} bidderContacts 联系人
 * @apiParam {Number} bidderTel 联系电话
 * @apiParam {String} bidderEmail 电子邮箱
 * @apiParam {String} bidderAddress 招标人地址
 * @apiParam {Number} bidderCode 招标人统一社会信息代码
 * @apiParam {String} company 招标代理机构名称
 * @apiParam {String} companyContacts 联系人
 * @apiParam {Number} companyTel 联系电话
 * @apiParam {String} companyEmail 电子邮箱
 * @apiParam {String} companyAddress 招标代理机构名称地址
 * @apiParam {Number} companyCode 招标代理机构名称统一社会信息代码
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidderInfo = (params) => {
  return postRequest('/infoPublish/project/bidderInfo', params)
}

/**
 * @api {GET} /infoPublish/project/bidNumber 招标项目/获取标段编号
 * @apiName BidNumber
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {String} bidNumber 标段编号
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {"bidNumber": "123456789765432112"},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidNumber = (params) => {
  return getRequest('/infoPublish/project/bidNumber', params)
}

/**
 * @api {POST} /infoPublish/project/addBidInfo 招标项目/添加标段信息
 * @apiName AddBidInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} bidNumber 标段编号
 * @apiParam {String} bidName 标段名称
 * @apiParam {Number} bidClass 标段专业分类
 * @apiParam {String} bidCity 所在行政区域
 * @apiParam {Number} bidType 标段招标方式
 * @apiParam {String} bidDate 标段创建时间
 * @apiSuccess {Number} bidId 标段id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {"bidId": 1},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const addBidInfo = (params) => {
  return postRequest('/infoPublish/project/addBidInfo', params)
}

/**
 * @api {POST} /infoPublish/project/editBidInfo 招标项目/编辑标段信息
 * @apiName EditBidInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} bidId 标段id
 * @apiParam {String} bidNumber 标段编号
 * @apiParam {String} bidName 标段名称
 * @apiParam {Number} bidClass 标段专业分类
 * @apiParam {String} bidCity 所在行政区域
 * @apiParam {Number} bidType 标段招标方式
 * @apiParam {String} bidDate 标段创建时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const editBidInfo = (params) => {
  return postRequest('/infoPublish/project/editBidInfo', params)
}

/**
 * @api {POST} /infoPublish/project/removeBidInfo 招标项目/删除标段信息
 * @apiName RemoveBidInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {Number} bidId 标段Id
 * @apiSuccess {Number} projectId 招标项目id
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const removeBidInfo = (params) => {
  return postRequest('/infoPublish/project/removeBidInfo', params)
}

/**
 * @api {GET} /infoPublish/project/bidInfoDetail 招标项目/获取标段详情
 * @apiName BidInfoDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {Number} bidId 标段Id
 * @apiSuccess {Number} projectId 招标项目id
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *             "bidNumber": 123545435342,
 *             "bidName": "自动化线的采购安装与……",
 *             "bidClass": 1,
 *             "bidCity": "北京市",
 *             "bidType": 2,
 *             "bidDate": "2018-07-17 14:27:33",
 *         },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidInfoDetail = (params) => {
  return getRequest('/infoPublish/project/bidInfoDetail', params)
}

/**
 * @api {GET} /infoPublish/project/completeProject 招标项目/完成建项
 * @apiName CompleteProject
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiSuccess {Number} projectId 招标项目id
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const completeProject = (params) => {
  return getRequest('/infoPublish/project/completeProject', params)
}

/**
 * @api {GET} /infoPublish/project/projectStepDetail 招标项目/获取招标项目步骤详情
 * @apiName ProjectStepDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} step 新建招标第几步 1-招标项目基本信息，2-资金来源，3-招标人、招标代理信息，4-标段信息
 * @apiSuccess {Object} data 每步的详情
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "data":{}
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const projectStepDetail = (params) => {
  return getRequest('/infoPublish/project/projectStepDetail', params)
}

/**
 * @api {POST} /infoPublish/project/editProject 招标项目/编辑招标项目
 * @apiName EditProject
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} projectNumber 招标项目编号
 * @apiParam {Number} projectCode 投资项目统一代码
 * @apiParam {String} projectName 招标项目名称
 * @apiParam {Number} projectClass 所属行业分类
 * @apiParam {String} projectCity 所在行政区域
 * @apiParam {Number} projectType 招标方式
 * @apiParam {Number} projectStatus 招标组织形式
 * @apiParam {String} projectRange 招标内容和范围
 * @apiParam {String} projectSize 招标项目规模及概况
 * @apiParam {String} supervisionDep 监督部门名称
 * @apiParam {Number} supervisionCode 监督部门代码
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const editProject = (params) => {
  return postRequest('/infoPublish/project/editProject', params)
}

/**
 * @api {GET} /infoPublish/project/relationPublish 招标项目/关联公告
 * @apiName RelationPublish
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiSuccess {String} publishName 公告名称
 * @apiSuccess {Number} publishType 公告类型  1-招标公告，2-中标候选人公示，3-中标结果公告，4-资格预审公示
 * @apiSuccess {Number} publishId 公告id
 * @apiSuccess {Number} publishStatus 公告状态  0-未发布，1-已发布，2-未提交，3-已开标，4-废标
 * @apiSuccess {String} publishDate 状态时间
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                "publishId": 1,
 *                "publishName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                "publishDate": "2020-11-22 22:33:44",
 *                "publishType": 1,
 *                "publishStatus": 1,
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const relationPublish = (params) => {
  return getRequest('/infoPublish/project/relationPublish', params)
}

// ##招标公告------------------------------------------------------
/**
 * @api {GET} /infoPublish/tender/tenderList 招标公告/招标公告列表
 * @apiName TenderList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} keywords 查询关键词
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiSuccess {Number} tenderId 招标公告id
 * @apiSuccess {String} tenderName 招标公告名称
 * @apiSuccess {Number} tenderStatus 招标公告状态 0-未发布，1-已发布，2-未提交，3-已开标，4-废标
 * @apiSuccess {String} tenderDate 招标公告状态时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "tenderId": 1,
 *                  "tenderName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                  "tenderDate": "2020-11-22 22:33:44",
 *                  "tenderStatus": 1,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const tenderList = (params) => {
  return getRequest('/infoPublish/tender/tenderList', params)
}

/**
 * @api {GET} /infoPublish/tender/tenderDetail 招标公告/招标公告详情
 * @apiName TenderDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiSuccess {File} file PDF数据流
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "file": ""    
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const tenderDetail = (params) => {
  return getRequest('/infoPublish/tender/tenderDetail', params)
}

/**
 * @api {POST} /infoPublish/tender/addTenderInfo 招标公告/新建招标公告基本信息
 * @apiName AddTenderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} tenderNumber 招标编号
 * @apiParam {String} projectName 公告名称
 * @apiParam {Number} projectClass 公告内容
 * @apiParam {String} projectCity 所属行业分类
 * @apiParam {Number} projectType 所在行政区域
 * @apiParam {Number} projectStatus 招标文件获取时间
 * @apiParam {String} projectRange 招标文件获取方法
 * @apiSuccess {Number} tenderId 招标公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "tenderId"：1
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const addTenderInfo = (params) => {
  return postRequest('/infoPublish/tender/addTenderInfo', params)
}

/**
 * @api {POST} /infoPublish/tender/bidOpenInfo 招标公告/投标报名、开标信息
 * @apiName BidOpenInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} tenderEndDate 投标文件递交截止时间
 * @apiParam {String} tenderType 投标文件递交方法
 * @apiParam {Number} tenderAddress 投标文件递交地址
 * @apiParam {String} tenderFlag 是否允许联合体投标
 * @apiParam {Number} bidOpenDate 开标时间
 * @apiParam {Number} bidOpenAddress 开标地点
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidOpenInfo = (params) => {
  return postRequest('/infoPublish/tender/bidOpenInfo', params)
}

/**
 * @api {POST} /infoPublish/tender/tenderBidderInfo 招标公告/招标人、招标代理机构信息
 * @apiName TenderBidderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {String} bidder 招标人名称
 * @apiParam {String} bidderContacts 联系人
 * @apiParam {Number} bidderTel 联系电话
 * @apiParam {String} bidderEmail 电子邮箱
 * @apiParam {String} bidderAddress 招标人地址
 * @apiParam {Number} bidderCode 招标人统一社会信息代码
 * @apiParam {String} company 招标代理机构名称
 * @apiParam {String} companyContacts 联系人
 * @apiParam {Number} companyTel 联系电话
 * @apiParam {String} companyEmail 电子邮箱
 * @apiParam {String} companyAddress 招标代理机构名称地址
 * @apiParam {Number} companyCode 招标代理机构名称统一社会信息代码
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidderInfo = (params) => {
  return postRequest('/infoPublish/tender/bidderInfo', params)
}

/**
 * @api {GET} /infoPublish/tender/selectTenders 招标公告/选择标段
 * @apiName SelectTenders
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Array} bidIds 标段id数组
 * @apiParam {Number} tenderId 招标公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const selectTenders = (params) => {
  return getRequest('/infoPublish/tender/selectTenders', params)
}

/**
 * @api {GET} /infoPublish/tender/selectBids 招标公告/选择标段
 * @apiName SelectBids
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Array} bidIds 标段id数组
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} projectId 招标项目id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const selectBids = (params) => {
  return getRequest('/infoPublish/tender/selectBids', params)
}

/**
 * @api {POST} /infoPublish/tender/saveBid 招标公告/保存标段基本信息
 * @apiName SaveBid
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidId 标段id
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} bidNumber 标段编号
 * @apiParam {String} bidName 标段名称
 * @apiParam {String} bidderNeeds 投标人的资格能力要求
 * @apiParam {String} bidContent 标段内容
 * @apiParam {Number} bidPrice 标段合同估算价
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const saveBid = (params) => {
  return postRequest('/infoPublish/tender/saveBid', params)
}

/**
 * @api {GET} /infoPublish/tender/bidDetail 招标公告/获取标段基本信息
 * @apiName BidDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidId 标段id
 * @apiSuccess {String} bidNumber 标段编号
 * @apiSuccess {String} bidName 标段名称
 * @apiSuccess {String} bidderNeeds 投标人的资格能力要求
 * @apiSuccess {String} bidContent 标段内容
 * @apiSuccess {Number} bidPrice 标段合同估算价
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "bidNumber" : "Z1234567890987543222456677",
 *            "bidName" : "自动化线的采购安装与维护",
 *            "bidderNeeds" : "",
 *            "bidContent" : "",
 *            "bidPrice" : 222
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidDetail = (params) => {
  return getRequest('/infoPublish/tender/bidDetail', params)
}

/**
 * @api {POST} /infoPublish/tender/saveTenderBid 招标公告/保存标段信息
 * @apiName SaveTenderBid
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Array} bidIds 标段id数组
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} projectId 招标项目id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const saveTenderBid = (params) => {
  return postRequest('/infoPublish/tender/saveTenderBid', params)
}

/**
 * @api {POST} /infoPublish/tender/uploadFile 招标公告/上传附件
 * @apiName UploadFile
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {File} file 文件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const uploadFile = (params) => {
  return postRequest('/infoPublish/tender/uploadFile', params)
}

/**
 * @api {POST} /infoPublish/tender/editTenderInfo 招标公告/编辑招标公告
 * @apiName EditTenderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {String} tenderNumber 招标编号
 * @apiParam {String} projectName 公告名称
 * @apiParam {Number} projectClass 公告内容
 * @apiParam {String} projectCity 所属行业分类
 * @apiParam {Number} projectType 所在行政区域
 * @apiParam {Number} projectStatus 招标文件获取时间
 * @apiParam {String} projectRange 招标文件获取方法
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const editTenderInfo = (params) => {
  return postRequest('/infoPublish/tender/editTenderInfo', params)
}

/**
 * @api {GET} /infoPublish/tender/tenderStepDetail 招标公告/获取招标公告步骤详情
 * @apiName TenderStepDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} step 新建招标公告第几步 1-招标公告基本信息，2-投标报名、开标信息，3-招标人、招标代理信息，4-选择标段，5-标段信息，6-上传附件
 * @apiSuccess {Object} data 每步的详情
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "data":{}
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const tenderStepDetail = (params) => {
  return getRequest('/infoPublish/tender/tenderStepDetail', params)
}

/**
 * @api {POST} /infoPublish/tender/correctTenderInfo 招标公告/新建编辑变更公告基本信息
 * @apiName CorrectTenderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} correctTenderId 变更公告id[传入该参数为编辑，不传为新建]
 * @apiParam {String} tenderNumber 招标公告编号
 * @apiParam {String} correctTenderName 变更公告名称
 * @apiParam {String} correctTenderContent 变更公告内容
 * @apiParam {Number} correctTenderFlag 是否延期开标  0-否，1-是
 * @apiParam {Number} correctTenderDate 开标时间
 * @apiSuccess {Number} correctTenderId 变更公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {correctTenderId: 1},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const correctTenderInfo = (params) => {
  return postRequest('/infoPublish/tender/correctTenderInfo', params)
}

/**
 * @api {POST} /infoPublish/tender/correctTenderUpload 招标公告/变更公告上传附件
 * @apiName CorrectTenderUpload
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} correctTenderId 变更公告id
 * @apiParam {File} file 附件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const correctTenderUpload = (params) => {
  return postRequest('/infoPublish/tender/correctTenderUpload', params)
}

/**
 * @api {GET} /infoPublish/tender/correctTenderView 招标公告/变更公告预览
 * @apiName CorrectTenderView
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} correctTenderId 变更公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {file: file},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const correctTenderView = (params) => {
  return getRequest('/infoPublish/tender/correctTenderView', params)
}

/**
 * @api {POST} /infoPublish/tender/abandonBidInfo 招标公告/新建编辑流、废标公告基本信息
 * @apiName AbandonBidInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} abandonBidId 流、废标公告公告id[传入该参数为编辑，不传为新建]
 * @apiParam {String} tenderNumber 招标公告编号
 * @apiParam {String} abandonBidName 公告名称
 * @apiParam {String} abandonBidContent 公告内容
 * @apiSuccess {Number} abandonBidId 变更公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {abandonBidId: 1},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const abandonBidInfo = (params) => {
  return postRequest('/infoPublish/tender/abandonBidInfo', params)
}

/**
 * @api {POST} /infoPublish/tender/abandonBidUpload 招标公告/流、废标上传附件
 * @apiName AbandonBidUpload
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} abandonBidId 流、废标公告id
 * @apiParam {File} file 附件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const abandonBidUpload = (params) => {
  return postRequest('/infoPublish/tender/abandonBidUpload', params)
}

/**
 * @api {GET} /infoPublish/tender/bidManage 招标公告/投标管理
 * @apiName BidManage
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiSuccess {String} winBidder 投标人
 * @apiSuccess {Number} winBidId 投标id
 * @apiSuccess {Number} winBidDate 投标报名时间
 * @apiSuccess {Number} winBidContact 投标联系人
 * @apiSuccess {Number} winBidTel 手机号
 * @apiSuccess {String} winBidEmail 邮件
 * @apiSuccess {Number} winBidFlag 报名确认 0-未确认，1-已确认
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                "winBidId": 1,
 *                "winBidder": "唐县卫生和计划生育局",
 *                "winBidDate": "2020-11-22 22:33:44",
 *                "winBidContact": "王某某",
 *                "winBidTel": 1234567890234,
 *                "winBidEmail": "123456@qq.com",
 *                "winBidFlag": 1,
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidManage = (params) => {
  return getRequest('/infoPublish/tender/bidManage', params)
}

/**
 * @api {GET} /infoPublish/tender/signUp 招标公告/确认报名
 * @apiName SignUp
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} tenderId 招标公告id
 * @apiParam {Number} winBidId 投标id
 * @apiParam {Number} winBidFlag 报名确认 0-未确认，1-已确认
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const signUp = (params) => {
  return getRequest('/infoPublish/tender/signUp', params)
}

/**
 * @api {GET} /infoPublish/tender/signUpForm 招标公告/投标报名表
 * @apiName SignUpForm
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} winBidId 投标id
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const signUpForm = (params) => {
  return getRequest('/infoPublish/tender/signUpForm', params)
}

// ##中标候选人公示----------------------------------------
/**
 * @api {GET} /infoPublish/bidPublish/bidPublishList 中标候选人公示/中标候选人公示列表
 * @apiName BidPublishList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} keywords 查询关键词
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiSuccess {Number} bidPublishId 公示id
 * @apiSuccess {Number} bidPublishName 公示标题
 * @apiSuccess {String} bidPublishStatus 公告状态 0-未发布，1-已发布，2-未提交
 * @apiSuccess {Number} bidPublishDate 状态时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "bidPublishId": 1,
 *                  "bidPublishName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                  "bidPublishDate": "2020-11-22 22:33:44",
 *                  "bidPublishStatus": 1,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidPublishList = (params) => {
  return getRequest('/infoPublish/bidPublish/bidPublishList', params)
}

/**
 * @api {GET} /infoPublish/bidPublish/bidPublishDetail 中标候选人公示/中标候选人公示详情
 * @apiName BidPublishDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiSuccess {File} file PDF数据流
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "file": ""    
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidPublishDetail = (params) => {
  return getRequest('/infoPublish/bidPublish/bidPublishDetail', params)
}

/**
 * @api {POST} /infoPublish/bidPublish/addBidPublishInfo 中标候选人公示/新建中标候选人公示基本信息
 * @apiName AddBidPublishInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} bidPublishNumber 招标编号
 * @apiParam {String} bidPublishName 公告名称
 * @apiParam {Number} bidPublishContent 公告内容
 * @apiParam {String} bidPublishMode 提出异议的渠道和方式
 * @apiParam {Number} bidPublishEndDate 公示结束时间
 * @apiSuccess {Number} bidPublishId 中标候选人公示id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "bidPublishId"：1
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const addBidPublishInfo = (params) => {
  return postRequest('/infoPublish/bidPublish/addBidPublishInfo', params)
}

/**
 * @api {POST} /infoPublish/bidPublish/editBidPublishInfo 中标候选人公示/编辑中标候选人公示基本信息
 * @apiName EditBidPublishInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} bidPublishNumber 招标编号
 * @apiParam {String} bidPublishName 公告名称
 * @apiParam {Number} bidPublishContent 公告内容
 * @apiParam {String} bidPublishMode 提出异议的渠道和方式
 * @apiParam {Number} bidPublishEndDate 公示结束时间
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const editBidPublishInfo = (params) => {
  return postRequest('/infoPublish/bidPublish/editBidPublishInfo', params)
}

/**
 * @api {POST} /infoPublish/bidPublish/bidPublishBidderInfo 中标候选人公示/保存招标人、招标代理机构信息
 * @apiName BidPublishBidderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiParam {String} bidder 招标人名称
 * @apiParam {String} bidderContacts 联系人
 * @apiParam {Number} bidderTel 联系电话
 * @apiParam {String} bidderEmail 电子邮箱
 * @apiParam {String} bidderAddress 招标人地址
 * @apiParam {Number} bidderCode 招标人统一社会信息代码
 * @apiParam {String} company 招标代理机构名称
 * @apiParam {String} companyContacts 联系人
 * @apiParam {Number} companyTel 联系电话
 * @apiParam {String} companyEmail 电子邮箱
 * @apiParam {String} companyAddress 招标代理机构名称地址
 * @apiParam {Number} companyCode 招标代理机构名称统一社会信息代码
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidPublishBidderInfo = (params) => {
  return postRequest('/infoPublish/bidPublish/bidPublishBidderInfo', params)
}

/**
 * @api {GET} /infoPublish/bidPublish/selectBidPublish 中标候选人公示/选择标段
 * @apiName SelectBidPublish
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Array} bidIds 标段id数组
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const selectBidPublish = (params) => {
  return getRequest('/infoPublish/bidPublish/selectBidPublish', params)
}

/**
 * @api {POST} /infoPublish/bidPublish/savePublishBidder 中标候选人公示/保存中标候选人
 * @apiName SavePublishBidder
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidId 标段id
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiParam {Number} bidPublishSort 排名 
 * @apiParam {Number} bidderId 中标候选人id
 * @apiParam {Number} bidderNumber 中标候选人代码 [非必填，系统默认18个0]
 * @apiParam {Number} delivery 交货期
 * @apiParam {String} unionCompanyName 联合体公司名称 [非必填]
 * @apiParam {Number} unionCompanyNumber 联合体公司代码 [非必填]
 * @apiParam {Number} quote 投标报价
 * @apiParam {String} principal 项目负责人姓名
 * @apiParam {Number} principalCard 项目负责人身份证 [非必填，系统默认18个0]
 * @apiParam {Number} principalNumber 项目负责人相关证书和编号
 * @apiParam {String} quality 质量
 * @apiParam {String} bidPublishCondition 中标候选人响应招标文件的资格能力条件
 * @apiParam {String} bidPublishStatus 评标情况 [非必填]
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const savePublishBidder = (params) => {
  return postRequest('/infoPublish/bidPublish/savePublishBidder', params)
}

/**
 * @api {GET} /infoPublish/bidPublish/removeBidPublish 中标候选人公示/删除中标候选人
 * @apiName RemoveBidPublish
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Array} bidId 标段id
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiParam {Number} bidderId 中标候选人id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const removeBidPublish = (params) => {
  return getRequest('/infoPublish/bidPublish/removeBidPublish', params)
}

/**
 * @api {POST} /infoPublish/bidPublish/bidPublishUpload 中标候选人公示/中标候选人公示上传附件
 * @apiName BidPublishUpload
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiParam {File} file 附件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidPublishUpload = (params) => {
  return postRequest('/infoPublish/bidPublish/bidPublishUpload', params)
}

/**
 * @api {POST} /infoPublish/bidPublish/correctPublishInfo 中标候选人公示/新建编辑变更中标候选人公示基本信息
 * @apiName CorrectPublishInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiParam {Number} correctPublishId 变更公示id[传入该参数为编辑，不传为新建]
 * @apiParam {String} publishNumber 招标公示编号
 * @apiParam {String} correctPublishName 变更公示名称
 * @apiParam {String} correctPublishContent 变更公示内容
 * @apiParam {Number} correctPublishFlag 是否延期开标  0-否，1-是
 * @apiParam {Number} correctPublishDate 开标时间
 * @apiSuccess {Number} correctPublishId 变更公示id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {correctPublishId: 1},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const correctPublishInfo = (params) => {
  return postRequest('/infoPublish/bidPublish/correctPublishInfo', params)
}

/**
 * @api {POST} /infoPublish/bidPublish/correctPublishUpload 中标候选人公示/变更公示上传附件
 * @apiName CorrectPublishUpload
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiParam {Number} correctPublishId 变更公示id
 * @apiParam {File} file 附件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const correctPublishUpload = (params) => {
  return postRequest('/infoPublish/bidPublish/correctPublishUpload', params)
}

/**
 * @api {GET} /infoPublish/bidPublish/publishStepDetail 中标候选人公示/获取中标候选人公示步骤详情
 * @apiName PublishStepDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidPublishId 中标候选人公示id
 * @apiParam {Number} step 新建招标公告第几步 1-招标公告基本信息，2-投标报名、开标信息，3-招标人、招标代理信息，4-选择标段，5-标段信息，6-上传附件
 * @apiSuccess {Object} data 每步的详情
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "data":{}
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const publishStepDetail = (params) => {
  return getRequest('/infoPublish/bidPublish/publishStepDetail', params)
}

// ##中标结果公告--------------------------------------------------------
/**
 * @api {GET} /infoPublish/result/bidResultList 中标结果公告/中比结果公示列表
 * @apiName bidResultList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} keywords 查询关键词
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiSuccess {Number} bidResultId 结果公示id
 * @apiSuccess {Number} bidResultName 结果公示标题
 * @apiSuccess {String} bidResultStatus 公告状态 0-未发布，1-已发布，2-未提交
 * @apiSuccess {Number} bidResultDate 状态时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "bidResultId": 1,
 *                  "bidResultName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                  "bidResultDate": "2020-11-22 22:33:44",
 *                  "bidResultStatus": 1,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidResultList = (params) => {
  return getRequest('/infoPublish/result/bidResultList', params)
}

/**
 * @api {GET} /infoPublish/result/bidResultDetail 中标结果公告/中标结果公告详情
 * @apiName BidResultDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidResultId 结果公示id
 * @apiSuccess {File} file PDF数据流
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "file": ""    
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidResultDetail = (params) => {
  return getRequest('/infoPublish/result/bidResultDetail', params)
}

/**
 * @api {POST} /infoPublish/result/addBidResultInfo 中标结果公告/新建中标结果公告基本信息
 * @apiName AddBidResultInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} bidResultNumber 招标编号
 * @apiParam {String} bidResultName 公示名称
 * @apiParam {Number} bidResultContent 公示内容
 * @apiSuccess {Number} bidResultId 中标结果公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "bidResultId"：1
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const addBidResultInfo = (params) => {
  return postRequest('/infoPublish/result/addBidResultInfo', params)
}

/**
 * @api {POST} /infoPublish/result/editBidResultInfo 中标结果公告/编辑中标结果公告基本信息
 * @apiName EditBidResultInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} bidResultNumber 招标编号
 * @apiParam {String} bidResultName 公示名称
 * @apiParam {Number} bidResultContent 公示内容
 * @apiParam {Number} bidResultId 中标结果公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const editBidResultInfo = (params) => {
  return postRequest('/infoPublish/result/editBidResultInfo', params)
}

/**
 * @api {POST} /infoPublish/result/bidResultBidderInfo 中标结果公告/保存招标人、招标代理机构信息
 * @apiName BidResultBidderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} bidResultId 中标结果公告id
 * @apiParam {String} bidder 招标人名称
 * @apiParam {String} bidderContacts 联系人
 * @apiParam {Number} bidderTel 联系电话
 * @apiParam {String} bidderEmail 电子邮箱
 * @apiParam {String} bidderAddress 招标人地址
 * @apiParam {Number} bidderCode 招标人统一社会信息代码
 * @apiParam {String} company 招标代理机构名称
 * @apiParam {String} companyContacts 联系人
 * @apiParam {Number} companyTel 联系电话
 * @apiParam {String} companyEmail 电子邮箱
 * @apiParam {String} companyAddress 招标代理机构名称地址
 * @apiParam {Number} companyCode 招标代理机构名称统一社会信息代码
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidResultBidderInfo = (params) => {
  return postRequest('/infoPublish/result/bidResultBidderInfo', params)
}

/**
 * @api {GET} /infoPublish/result/selectResults 中标结果公告/选择标段
 * @apiName SelectResults
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Array} bidIds 标段id数组
 * @apiParam {Number} bidResultId 中标结果公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const selectResults = (params) => {
  return getRequest('/infoPublish/result/selectResults', params)
}

/**
 * @api {POST} /infoPublish/result/saveResultBidder 中标结果公告/保存中标候选人
 * @apiName SaveResultBidder
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidId 标段id
 * @apiParam {Number} bidResultId 中标结果公告id
 * @apiParam {Number} bidPublishSort 排名 
 * @apiParam {Number} bidderId 中标候选人id
 * @apiParam {Number} bidderNumber 中标候选人代码 [非必填，系统默认18个0]
 * @apiParam {String} unionCompanyName 联合体公司名称 [非必填]
 * @apiParam {Number} unionCompanyNumber 联合体公司代码 [非必填]
 * @apiParam {Number} quote 投标报价
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const saveResultBidder = (params) => {
  return postRequest('/infoPublish/result/saveResultBidder', params)
}

/**
 * @api {GET} /infoPublish/result/removeResultBidder 中标结果公告/删除中标人信息
 * @apiName RemoveResultBidder
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidId 标段id
 * @apiParam {Number} bidResultId 中标结果公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const removeResultBidder = (params) => {
  return getRequest('/infoPublish/result/removeResultBidder', params)
}

/**
 * @api {POST} /infoPublish/result/bidResultUpload 中标结果公告/中标候选人公示上传附件
 * @apiName BidResultUpload
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidResultId 中标结果公告id
 * @apiParam {File} file 附件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidResultUpload = (params) => {
  return postRequest('/infoPublish/bidPublish/bidResultUpload', params)
}

/**
 * @api {GET} /infoPublish/result/resultStepDetail 中标结果公告/获取中标结果公告步骤详情
 * @apiName ResultStepDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidResultId 中标结果公告id
 * @apiParam {Number} step 新建中标结果公告第几步 1-招标公告基本信息，2-投标报名、开标信息，3-招标人、招标代理信息，4-选择标段，5-标段信息，6-上传附件
 * @apiSuccess {Object} data 每步的详情
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "data":{}
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const resultStepDetail = (params) => {
  return getRequest('/infoPublish/result/resultStepDetail', params)
}

// ##资格预审公告-----------------------------------------------------
/**
 * @api {GET} /infoPublish/qualify/qualifyList 资格预审公告/资格预审公告列表
 * @apiName QualifyList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} keywords 查询关键词
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiSuccess {Number} qualifyId 结果公示id
 * @apiSuccess {Number} qualifyName 结果公示标题
 * @apiSuccess {String} qualifyStatus 公告状态 0-未发布，1-已发布，2-未提交，3-已开标
 * @apiSuccess {Number} qualifyDate 状态时间
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "qualifyId": 1,
 *                  "qualifyName": "国网赤峰松山区供电公司2018年10千伏及以下农网工程材料设备采购（金具）招标公告",
 *                  "qualifyDate": "2020-11-22 22:33:44",
 *                  "qualifyStatus": 1,
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const qualifyList = (params) => {
  return getRequest('/infoPublish/qualify/qualifyList', params)
}

/**
 * @api {GET} /infoPublish/qualify/qualifyDetail 资格预审公告/资格预审公告详情
 * @apiName QualifyDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} qualifyId 结果公示id
 * @apiSuccess {File} file PDF数据流
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "file": ""    
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const qualifyDetail = (params) => {
  return getRequest('/infoPublish/qualify/qualifyDetail', params)
}

/**
 * @api {POST} /infoPublish/qualify/addQualifyInfo 资格预审公告/新建资格预审公告基本信息
 * @apiName AddQualifyInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} qualifyNumber 招标编号
 * @apiParam {String} qualifyName 公示名称
 * @apiParam {String} qualifyContent 公示内容
 * @apiParam {Number} qualifyClass 所属行业分类
 * @apiParam {String} qualifyCity 所在行政区域
 * @apiParam {String} qualifyStartDate 资格预审文件获取时间开始
 * @apiParam {String} qualifyEndDate 资格预审文件获取时间截止
 * @apiParam {String} qualifyType 资格预审文件获取方法
 * @apiSuccess {Number} qualifyId 中标结果公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "qualifyId"：1
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const addQualifyInfo = (params) => {
  return postRequest('/infoPublish/qualify/addQualifyInfo', params)
}

/**
 * @api {POST} /infoPublish/qualify/editQualifyInfo 资格预审公告/编辑资格预审公告基本信息
 * @apiName EditQualifyInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {String} qualifyNumber 招标编号
 * @apiParam {String} qualifyName 公示名称
 * @apiParam {String} qualifyContent 公示内容
 * @apiParam {Number} qualifyClass 所属行业分类
 * @apiParam {String} qualifyCity 所在行政区域
 * @apiParam {String} qualifyStartDate 资格预审文件获取时间开始
 * @apiParam {String} qualifyEndDate 资格预审文件获取时间截止
 * @apiParam {String} qualifyType 资格预审文件获取方法
 * @apiParam {Number} qualifyId 中标结果公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const editQualifyInfo = (params) => {
  return postRequest('/infoPublish/qualify/editQualifyInfo', params)
}

/**
 * @api {POST} /infoPublish/qualify/qualifySign 资格预审公告/投标报名、开标信息
 * @apiName QualifySign
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} qualifyId 中标结果公告id
 * @apiParam {String} qualifyWay 评审办法
 * @apiParam {String} qualifyPlace 开启地点
 * @apiParam {String} qualifyStartDate 开启时间
 * @apiParam {Number} qualifyStatus 是否允许联合体投标 0-否，1-是
 * @apiParam {String} qualifyAddress 资格预审申请文件递交地址
 * @apiParam {String} qualifyEndDate 资格预审申请文件递交截止时间
 * @apiParam {String} qualifyType 资格预审申请文件递交方法
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const qualifySign = (params) => {
  return postRequest('/infoPublish/qualify/qualifySign', params)
}

/**
 * @api {POST} /infoPublish/result/qualifyBidderInfo 资格预审公告/保存招标人、招标代理机构信息
 * @apiName qualifyBidderInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} projectId 招标项目id
 * @apiParam {Number} qualifyId 中标结果公告id
 * @apiParam {String} bidder 招标人名称
 * @apiParam {String} bidderContacts 联系人
 * @apiParam {Number} bidderTel 联系电话
 * @apiParam {String} bidderEmail 电子邮箱
 * @apiParam {String} bidderAddress 招标人地址
 * @apiParam {Number} bidderCode 招标人统一社会信息代码
 * @apiParam {String} company 招标代理机构名称
 * @apiParam {String} companyContacts 联系人
 * @apiParam {Number} companyTel 联系电话
 * @apiParam {String} companyEmail 电子邮箱
 * @apiParam {String} companyAddress 招标代理机构名称地址
 * @apiParam {Number} companyCode 招标代理机构名称统一社会信息代码
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const qualifyBidderInfo = (params) => {
  return postRequest('/infoPublish/qualify/qualifyBidderInfo', params)
}

/**
 * @api {GET} /infoPublish/qualify/selectQualify 资格预审公告/选择标段
 * @apiName SelectQualify
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Array} bidIds 标段id数组
 * @apiParam {Number} qualifyId 中标结果公告id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const selectQualify = (params) => {
  return getRequest('/infoPublish/qualify/selectQualify', params)
}

/**
 * @api {POST} /infoPublish/qualify/saveBid 资格预审公告/保存标段基本信息
 * @apiName qualifySaveBid
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidId 标段id
 * @apiParam {Number} qualifyId 中标结果公告id
 * @apiParam {String} bidNumber 标段编号
 * @apiParam {String} bidName 标段名称
 * @apiParam {String} bidderNeeds 投标人的资格能力要求
 * @apiParam {String} bidContent 标段内容
 * @apiParam {Number} bidPrice 标段合同估算价
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const saveBid = (params) => {
  return postRequest('/infoPublish/qualify/saveBid', params)
}

/**
 * @api {POST} /infoPublish/qualify/qualifyUpload 资格预审公告/上传附件
 * @apiName qualifyUpload
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} qualifyId 中标结果公告id
 * @apiParam {File} file 附件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const qualifyUpload = (params) => {
  return postRequest('/infoPublish/qualify/qualifyUpload', params)
}

/**
 * @api {POST} /infoPublish/qualify/correctQualifyInfo 资格预审公告/新建编辑变更资格预审公告基本信息
 * @apiName CorrectQualifyInfo
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} qualifyId 资格预审公告id
 * @apiParam {Number} correctQualifyId 变更公示id[传入该参数为编辑，不传为新建]
 * @apiParam {String} qualifyNumber 招标公示编号
 * @apiParam {String} correctQualifyName 变更公示名称
 * @apiParam {String} correctQualifyContent 变更公示内容
 * @apiParam {Number} correctQualifyFlag 是否延期开标  0-否，1-是
 * @apiParam {Number} correctQualifyDate 开标时间
 * @apiSuccess {Number} correctQualifyId 变更公示id
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {correctQualifyId: 1},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const correctQualifyInfo = (params) => {
  return postRequest('/infoPublish/qualify/correctQualifyInfo', params)
}

/**
 * @api {POST} /infoPublish/qualify/correctQualifyUpload 资格预审公告/变更公示上传附件
 * @apiName CorrectQualifyUpload
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} qualifyId 资格预审公告id
 * @apiParam {Number} correctQualifyId 变更公示id
 * @apiParam {File} file 附件
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const correctQualifyUpload = (params) => {
  return postRequest('/infoPublish/qualify/correctQualifyUpload', params)
}

/**
 * @api {GET} /infoPublish/qualify/qualifyStepDetail 资格预审公告/获取资格预审公告步骤详情
 * @apiName QualifyStepDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} qualifyId 资格预审公告id
 * @apiParam {Number} step 资格预审公告步骤
 * @apiSuccess {Object} data 每步的详情
 * @apiSuccessExample Success-Response:
 *     {
 *        "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "data":{}
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const qualifyStepDetail = (params) => {
  return getRequest('/infoPublish/qualify/qualifyStepDetail', params)
}

// ##投标人--------------------------------------------------------
/**
 * @api {GET} /infoPublish/bidder/bidderList 投标人/投标人列表
 * @apiName bidderList
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {String} keywords 查询关键词
 * @apiParam {Number} pageNumber 页码
 * @apiParam {Number} pageSize 每页条数
 * @apiSuccess {Number} bidderId 投标人id
 * @apiSuccess {String} bidCompany 参与投标公司
 * @apiSuccess {String} bidderType 加入渠道
 * @apiSuccess {String} bidderDate 加入时间
 * @apiSuccess {Number} bidNumber 投标次数
 * @apiSuccess {Number} winBidNumber 中标次数
 * @apiSuccess {String} remarks 备注
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "result": {
 *            "list": [
 *                {
 *                  "bidderId": 1,
 *                  "bidCompany": "宁夏英力特化工股英力特化工份有限公司",
 *                  "bidderType": "网站报名",
 *                  "bidderDate": "2020-11-22 22:33:44",
 *                  "bidNumber": 1,
 *                  "winBidNumber": 3,
 *                  "remarks": "化工项目、执行力强",
 *                }
 *            ]
 *        },
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const qualifyList = (params) => {
  return getRequest('/infoPublish/bidder/qualifyList', params)
}

/**
 * @api {GET} /infoPublish/bidder/bidderRemarks 投标人/编辑备注
 * @apiName bidderRemarks
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidderId 投标人id
 * @apiParam {String} remarks 备注
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidderRemarks = (params) => {
  return getRequest('/infoPublish/qualify/bidderRemarks', params)
}

/**
 * @api {GET} /infoPublish/bidder/bidderDetail 投标人/投标人详情
 * @apiName bidderDetail
 * @apiGroup InfoPublish
 *
 * @apiHeader {String} Authorization 用户授权token
 * @apiHeaderExample {json} Header-Example:
 *    {
 *      "accessToken": "4d79cdc54df74f08a3de8ce1a3b97221"
 *    }
 * @apiParam {Number} bidderId 投标人id
 * @apiSuccess {Object} data 详情
 * @apiSuccessExample Success-Response:
 *     {
 *       "success": true,
 *        "message": "success",
 *        "code": 200,
 *        "timestamp": 1606957730894,
 *        "data": {},
 *     }
 *
 * @apiError InfoNotFound 错误信息
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "error": "InfoNotFound"
 *     }
 */
export const bidderDetail = (params) => {
  return getRequest('/infoPublish/qualify/bidderDetail', params)
}