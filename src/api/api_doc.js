/****
*@api {post} /studio/aChannel/delByIds 批量通过id删除
*@apiName 接口名1
*@apiGroup 频道管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/aChannel/get/{id} 通过id获取
*@apiName 接口名2
*@apiGroup 频道管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/aChannel/getAll 获取全部数据
*@apiName 接口名3
*@apiGroup 频道管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/aChannel/getByPage 分页获取
*@apiName 接口名4
*@apiGroup 频道管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "current": "integer",
*               "hitCount": "boolean",
*               "pages": "integer",
*               "records": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "searchCount": "boolean",
*               "size": "integer",
*               "total": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/aChannel/insertOrUpdate 编辑或更新数据
*@apiName 接口名5
*@apiGroup 频道管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} channelName description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actBusiness/apply 提交申请 启动流程
*@apiName 接口名6
*@apiGroup 业务申请管理接口
*@apiParam {array} assignees 分配用户id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 申请标题[非必填].
*@apiParam {string} userId 创建用户id[非必填].
*@apiParam {string} tableId 关联表id[非必填].
*@apiParam {string} procDefId 流程定义id[非必填].
*@apiParam {string} procInstId 流程实例id[非必填].
*@apiParam {integer} status 状态 0草稿默认 1处理中 2结束[非必填].
*@apiParam {integer} result 结果状态 0未提交默认 1处理中 2通过 3驳回[非必填].
*@apiParam {string} applyTime 提交申请时间[非必填].
*@apiParam {integer} version 流程版本[非必填].
*@apiParam {string} processName 所属流程名[非必填].
*@apiParam {string} routeName 前端路由名[非必填].
*@apiParam {integer} priority 任务优先级 默认0[非必填].
*@apiParam {string} currTaskName 当前任务[非必填].
*@apiParam {boolean} firstGateway 第一个节点是否为网关[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiParam {object} params 流程设置参数[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actBusiness/cancel 撤回申请
*@apiName 接口名7
*@apiGroup 业务申请管理接口
*@apiParam {string} id id[必填].
*@apiParam {string} procInstId procInstId[必填].
*@apiParam {string} reason reason[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actBusiness/delByIds 通过id删除草稿状态申请
*@apiName 接口名8
*@apiGroup 业务申请管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actBusiness/getByCondition 多条件分页获取申请列表
*@apiName 接口名9
*@apiGroup 业务申请管理接口
*@apiParam {array} assignees 分配用户id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 申请标题[非必填].
*@apiParam {string} userId 创建用户id[非必填].
*@apiParam {string} tableId 关联表id[非必填].
*@apiParam {string} procDefId 流程定义id[非必填].
*@apiParam {string} procInstId 流程实例id[非必填].
*@apiParam {integer} status 状态 0草稿默认 1处理中 2结束[非必填].
*@apiParam {integer} result 结果状态 0未提交默认 1处理中 2通过 3驳回[非必填].
*@apiParam {string} applyTime 提交申请时间[非必填].
*@apiParam {integer} version 流程版本[非必填].
*@apiParam {string} processName 所属流程名[非必填].
*@apiParam {string} routeName 前端路由名[非必填].
*@apiParam {integer} priority 任务优先级 默认0[非必填].
*@apiParam {string} currTaskName 当前任务[非必填].
*@apiParam {boolean} firstGateway 第一个节点是否为网关[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiParam {object} params 流程设置参数[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "applyTime": "string",
*                         "assignees": "array",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "currTaskName": "string",
*                         "delFlag": "integer",
*                         "firstGateway": "boolean",
*                         "id": "string",
*                         "priority": "integer",
*                         "procDefId": "string",
*                         "procInstId": "string",
*                         "processName": "string",
*                         "result": "integer",
*                         "routeName": "string",
*                         "sendEmail": "boolean",
*                         "sendMessage": "boolean",
*                         "sendSms": "boolean",
*                         "status": "integer",
*                         "tableId": "string",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "string",
*                         "version": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actBusiness/start 流程选择组件启动流程
*@apiName 接口名10
*@apiGroup 业务申请管理接口
*@apiParam {array} assignees 分配用户id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 申请标题[非必填].
*@apiParam {string} userId 创建用户id[非必填].
*@apiParam {string} tableId 关联表id[非必填].
*@apiParam {string} procDefId 流程定义id[非必填].
*@apiParam {string} procInstId 流程实例id[非必填].
*@apiParam {integer} status 状态 0草稿默认 1处理中 2结束[非必填].
*@apiParam {integer} result 结果状态 0未提交默认 1处理中 2通过 3驳回[非必填].
*@apiParam {string} applyTime 提交申请时间[非必填].
*@apiParam {integer} version 流程版本[非必填].
*@apiParam {string} processName 所属流程名[非必填].
*@apiParam {string} routeName 前端路由名[非必填].
*@apiParam {integer} priority 任务优先级 默认0[非必填].
*@apiParam {string} currTaskName 当前任务[非必填].
*@apiParam {boolean} firstGateway 第一个节点是否为网关[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiParam {object} params 流程设置参数[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actCategory/add 添加
*@apiName 接口名11
*@apiGroup 流程分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 分类名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actCategory/delByIds 批量通过id删除
*@apiName 接口名12
*@apiGroup 流程分类管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actCategory/edit 编辑
*@apiName 接口名13
*@apiGroup 流程分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 分类名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actCategory/getByParentId/{parentId} 通过id获取
*@apiName 接口名14
*@apiGroup 流程分类管理接口
*@apiParam {string} parentId parentId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actCategory/search 名称模糊搜索
*@apiName 接口名15
*@apiGroup 流程分类管理接口
*@apiParam {string} title title[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actModel/add 创建新模型
*@apiName 接口名16
*@apiGroup 模型管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 模型名称[非必填].
*@apiParam {string} modelKey 标识[非必填].
*@apiParam {integer} version 版本[非必填].
*@apiParam {string} description 描述/备注[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actModel/delByIds 通过id批量删除
*@apiName 接口名17
*@apiGroup 模型管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actModel/deploy/{id} 部署发布模型
*@apiName 接口名18
*@apiGroup 模型管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actModel/deployByFile 通过文件部署模型
*@apiName 接口名19
*@apiGroup 模型管理接口
*@apiParam {file} file file[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actModel/export/{id} 导出模型XML
*@apiName 接口名20
*@apiGroup 模型管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actModel/getByCondition 多条件分页获取
*@apiName 接口名21
*@apiGroup 模型管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 模型名称[非必填].
*@apiParam {string} modelKey 标识[非必填].
*@apiParam {integer} version 版本[非必填].
*@apiParam {string} description 描述/备注[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "description": "string",
*                         "id": "string",
*                         "modelKey": "string",
*                         "name": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "version": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/convertToModel/{id} 转化流程为模型
*@apiName 接口名22
*@apiGroup 流程定义管理接口
*@apiParam {string} id 流程定义id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/delByIds 通过id删除流程
*@apiName 接口名23
*@apiGroup 流程定义管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/delHistoricInsByIds 通过id删除已结束的实例
*@apiName 接口名24
*@apiGroup 流程实例管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/delInsByIds 通过id删除运行中的实例
*@apiName 接口名25
*@apiGroup 流程实例管理接口
*@apiParam {array} ids ids[必填].
*@apiParam {string} reason reason[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/editNodeUser 编辑节点分配用户
*@apiName 接口名26
*@apiGroup 流程定义管理接口
*@apiParam {string} nodeId nodeId[必填].
*@apiParam {array} userIds userIds[非必填].
*@apiParam {array} roleIds roleIds[非必填].
*@apiParam {array} departmentIds departmentIds[非必填].
*@apiParam {boolean} chooseDepHeader 是否勾选操连续多级部门负责人[非必填].
*@apiParam {boolean} customUser 是否勾选用户自选[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/editStartUser 编辑流程可发起用户
*@apiName 接口名27
*@apiGroup 流程定义管理接口
*@apiParam {string} nodeId 流程定义id[非必填].
*@apiParam {boolean} allUser 是否所有用户可见[非必填].
*@apiParam {array} userIds userIds[非必填].
*@apiParam {array} roleIds roleIds[非必填].
*@apiParam {array} departmentIds departmentIds[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/export 导出部署流程资源
*@apiName 接口名28
*@apiGroup 流程定义管理接口
*@apiParam {string} id 流程定义id[非必填].
*@apiParam {integer} type 0XML 1图片[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getByCondition 多条件分页获取流程列表
*@apiName 接口名29
*@apiGroup 流程定义管理接口
*@apiParam {boolean} showLatest 是否显示所有版本[非必填].
*@apiParam {boolean} filter 是否开启发起人过滤[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 流程名称[非必填].
*@apiParam {string} processKey 流程标识名称[非必填].
*@apiParam {integer} version 版本[非必填].
*@apiParam {string} deploymentId 部署id[非必填].
*@apiParam {string} categoryId 所属分类[非必填].
*@apiParam {string} xmlName xml文件名[非必填].
*@apiParam {string} diagramName 流程图片名[非必填].
*@apiParam {string} description 描述/备注[非必填].
*@apiParam {boolean} latest 最新版本[非必填].
*@apiParam {integer} status 流程状态 部署后默认1激活[非必填].
*@apiParam {string} routeName 关联前端表单路由名[非必填].
*@apiParam {string} businessTable 关联业务表名[非必填].
*@apiParam {boolean} allUser 是否所有人可见[非必填].
*@apiParam {string} categoryTitle 所属分类名称[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getByKey/{key} 通过key获取最新流程
*@apiName 接口名30
*@apiGroup 流程定义管理接口
*@apiParam {string} key key[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "allUser": "boolean",
*               "businessTable": "string",
*               "categoryId": "string",
*               "categoryTitle": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "deploymentId": "string",
*               "description": "string",
*               "diagramName": "string",
*               "id": "string",
*               "latest": "boolean",
*               "name": "string",
*               "processKey": "string",
*               "routeName": "string",
*               "status": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "version": "integer",
*               "xmlName": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getFinishedProcess 获取结束的的流程实例
*@apiName 接口名31
*@apiGroup 流程实例管理接口
*@apiParam {string} name name[非必填].
*@apiParam {string} categoryId categoryId[非必填].
*@apiParam {string} key key[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getFirstNode/{procDefId} 通过流程定义id获取第一个任务节点
*@apiName 接口名32
*@apiGroup 流程实例管理接口
*@apiParam {string} procDefId 流程定义id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "chooseDepHeader": "boolean",
*               "customUser": "boolean",
*               "departments": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "mainHeader": "array",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "viceHeader": "array",
*                    },
*               ],
*               "expand": "boolean",
*               "id": "string",
*               "roles": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "dataType": "integer",
*                         "defaultRole": "boolean",
*                         "delFlag": "integer",
*                         "departments": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "departmentId": "string",
*                                   "id": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "description": "string",
*                         "id": "string",
*                         "name": "string",
*                         "permissions": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "id": "string",
*                                   "permissionId": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "title": "string",
*               "type": "integer",
*               "users": [
*                     {
*                         "address": "string",
*                         "app": "string",
*                         "avatar": "string",
*                         "birth": "string",
*                         "companyId": "string",
*                         "companyName": "string",
*                         "contact": "string",
*                         "contactPhone": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "creator": "string",
*                         "crmLxrId": "string",
*                         "defaultRole": "integer",
*                         "delFlag": "integer",
*                         "department": "string",
*                         "departmentId": "string",
*                         "departmentTitle": "string",
*                         "description": "string",
*                         "email": "string",
*                         "expireTime": "string",
*                         "id": "string",
*                         "loginId": "string",
*                         "loginIdHash": "integer",
*                         "loginVer": "integer",
*                         "memberType": "string",
*                         "mobile": "string",
*                         "mobileHash": "integer",
*                         "mobileVer": "integer",
*                         "nickname": "string",
*                         "passStrength": "string",
*                         "password": "string",
*                         "permissions": [
*                               {
*                                   "path": "string",
*                                   "title": "string",
*                              },
*                         ],
*                         "pv": "array",
*                         "pwdCrypt": "string",
*                         "pwdSalt": "string",
*                         "pwdVer": "integer",
*                         "registerType": "integer",
*                         "roles": [
*                               {
*                                   "description": "string",
*                                   "id": "string",
*                                   "name": "string",
*                              },
*                         ],
*                         "sex": "string",
*                         "status": "integer",
*                         "street": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                         "wechat": "string",
*                    },
*               ],
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getHighlightImg/{id} 获取高亮实时流程图
*@apiName 接口名33
*@apiGroup 流程实例管理接口
*@apiParam {string} id 流程实例id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getNextNode/{procDefId}/{currActId} 通过当前节点定义id获取下一个节点
*@apiName 接口名34
*@apiGroup 流程实例管理接口
*@apiParam {string} procDefId 当前节点定义id[非必填].
*@apiParam {string} currActId 当前节点定义id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "chooseDepHeader": "boolean",
*               "customUser": "boolean",
*               "departments": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "mainHeader": "array",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "viceHeader": "array",
*                    },
*               ],
*               "expand": "boolean",
*               "id": "string",
*               "roles": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "dataType": "integer",
*                         "defaultRole": "boolean",
*                         "delFlag": "integer",
*                         "departments": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "departmentId": "string",
*                                   "id": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "description": "string",
*                         "id": "string",
*                         "name": "string",
*                         "permissions": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "id": "string",
*                                   "permissionId": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "title": "string",
*               "type": "integer",
*               "users": [
*                     {
*                         "address": "string",
*                         "app": "string",
*                         "avatar": "string",
*                         "birth": "string",
*                         "companyId": "string",
*                         "companyName": "string",
*                         "contact": "string",
*                         "contactPhone": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "creator": "string",
*                         "crmLxrId": "string",
*                         "defaultRole": "integer",
*                         "delFlag": "integer",
*                         "department": "string",
*                         "departmentId": "string",
*                         "departmentTitle": "string",
*                         "description": "string",
*                         "email": "string",
*                         "expireTime": "string",
*                         "id": "string",
*                         "loginId": "string",
*                         "loginIdHash": "integer",
*                         "loginVer": "integer",
*                         "memberType": "string",
*                         "mobile": "string",
*                         "mobileHash": "integer",
*                         "mobileVer": "integer",
*                         "nickname": "string",
*                         "passStrength": "string",
*                         "password": "string",
*                         "permissions": [
*                               {
*                                   "path": "string",
*                                   "title": "string",
*                              },
*                         ],
*                         "pv": "array",
*                         "pwdCrypt": "string",
*                         "pwdSalt": "string",
*                         "pwdVer": "integer",
*                         "registerType": "integer",
*                         "roles": [
*                               {
*                                   "description": "string",
*                                   "id": "string",
*                                   "name": "string",
*                              },
*                         ],
*                         "sex": "string",
*                         "status": "integer",
*                         "street": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                         "wechat": "string",
*                    },
*               ],
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getNode/{nodeId} 通过节点nodeId获取审批人
*@apiName 接口名35
*@apiGroup 流程实例管理接口
*@apiParam {string} nodeId 节点nodeId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "chooseDepHeader": "boolean",
*               "customUser": "boolean",
*               "departments": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "mainHeader": "array",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "viceHeader": "array",
*                    },
*               ],
*               "expand": "boolean",
*               "id": "string",
*               "roles": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "dataType": "integer",
*                         "defaultRole": "boolean",
*                         "delFlag": "integer",
*                         "departments": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "departmentId": "string",
*                                   "id": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "description": "string",
*                         "id": "string",
*                         "name": "string",
*                         "permissions": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "id": "string",
*                                   "permissionId": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "title": "string",
*               "type": "integer",
*               "users": [
*                     {
*                         "address": "string",
*                         "app": "string",
*                         "avatar": "string",
*                         "birth": "string",
*                         "companyId": "string",
*                         "companyName": "string",
*                         "contact": "string",
*                         "contactPhone": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "creator": "string",
*                         "crmLxrId": "string",
*                         "defaultRole": "integer",
*                         "delFlag": "integer",
*                         "department": "string",
*                         "departmentId": "string",
*                         "departmentTitle": "string",
*                         "description": "string",
*                         "email": "string",
*                         "expireTime": "string",
*                         "id": "string",
*                         "loginId": "string",
*                         "loginIdHash": "integer",
*                         "loginVer": "integer",
*                         "memberType": "string",
*                         "mobile": "string",
*                         "mobileHash": "integer",
*                         "mobileVer": "integer",
*                         "nickname": "string",
*                         "passStrength": "string",
*                         "password": "string",
*                         "permissions": [
*                               {
*                                   "path": "string",
*                                   "title": "string",
*                              },
*                         ],
*                         "pv": "array",
*                         "pwdCrypt": "string",
*                         "pwdSalt": "string",
*                         "pwdVer": "integer",
*                         "registerType": "integer",
*                         "roles": [
*                               {
*                                   "description": "string",
*                                   "id": "string",
*                                   "name": "string",
*                              },
*                         ],
*                         "sex": "string",
*                         "status": "integer",
*                         "street": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                         "wechat": "string",
*                    },
*               ],
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getProcessNode/{id} 通过流程定义id获取流程节点
*@apiName 接口名36
*@apiGroup 流程定义管理接口
*@apiParam {string} id 流程定义id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "chooseDepHeader": "boolean",
*                    "customUser": "boolean",
*                    "departments": [
*                          {
*                              "createBy": "string",
*                              "createTime": "string",
*                              "delFlag": "integer",
*                              "id": "string",
*                              "isParent": "boolean",
*                              "mainHeader": "array",
*                              "parentId": "string",
*                              "parentTitle": "string",
*                              "sortOrder": "number",
*                              "status": "integer",
*                              "title": "string",
*                              "updateBy": "string",
*                              "updateTime": "string",
*                              "viceHeader": "array",
*                         },
*                    ],
*                    "expand": "boolean",
*                    "id": "string",
*                    "roles": [
*                          {
*                              "createBy": "string",
*                              "createTime": "string",
*                              "dataType": "integer",
*                              "defaultRole": "boolean",
*                              "delFlag": "integer",
*                              "departments": [
*                                    {
*                                        "createBy": "string",
*                                        "createTime": "string",
*                                        "delFlag": "integer",
*                                        "departmentId": "string",
*                                        "id": "string",
*                                        "roleId": "string",
*                                        "updateBy": "string",
*                                        "updateTime": "string",
*                                   },
*                              ],
*                              "description": "string",
*                              "id": "string",
*                              "name": "string",
*                              "permissions": [
*                                    {
*                                        "createBy": "string",
*                                        "createTime": "string",
*                                        "delFlag": "integer",
*                                        "id": "string",
*                                        "permissionId": "string",
*                                        "roleId": "string",
*                                        "updateBy": "string",
*                                        "updateTime": "string",
*                                   },
*                              ],
*                              "updateBy": "string",
*                              "updateTime": "string",
*                         },
*                    ],
*                    "title": "string",
*                    "type": "integer",
*                    "users": [
*                          {
*                              "address": "string",
*                              "app": "string",
*                              "avatar": "string",
*                              "birth": "string",
*                              "companyId": "string",
*                              "companyName": "string",
*                              "contact": "string",
*                              "contactPhone": "string",
*                              "createBy": "string",
*                              "createTime": "string",
*                              "creator": "string",
*                              "crmLxrId": "string",
*                              "defaultRole": "integer",
*                              "delFlag": "integer",
*                              "department": "string",
*                              "departmentId": "string",
*                              "departmentTitle": "string",
*                              "description": "string",
*                              "email": "string",
*                              "expireTime": "string",
*                              "id": "string",
*                              "loginId": "string",
*                              "loginIdHash": "integer",
*                              "loginVer": "integer",
*                              "memberType": "string",
*                              "mobile": "string",
*                              "mobileHash": "integer",
*                              "mobileVer": "integer",
*                              "nickname": "string",
*                              "passStrength": "string",
*                              "password": "string",
*                              "permissions": [
*                                    {
*                                        "path": "string",
*                                        "title": "string",
*                                   },
*                              ],
*                              "pv": "array",
*                              "pwdCrypt": "string",
*                              "pwdSalt": "string",
*                              "pwdVer": "integer",
*                              "registerType": "integer",
*                              "roles": [
*                                    {
*                                        "description": "string",
*                                        "id": "string",
*                                        "name": "string",
*                                   },
*                              ],
*                              "sex": "string",
*                              "status": "integer",
*                              "street": "string",
*                              "type": "integer",
*                              "updateBy": "string",
*                              "updateTime": "string",
*                              "username": "string",
*                              "wechat": "string",
*                         },
*                    ],
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actProcess/getRunningProcess 获取运行中的流程实例
*@apiName 接口名37
*@apiGroup 流程实例管理接口
*@apiParam {string} name name[非必填].
*@apiParam {string} categoryId categoryId[非必填].
*@apiParam {string} key key[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/updateInfo 修改关联路由表单分类或备注
*@apiName 接口名38
*@apiGroup 流程定义管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 流程名称[非必填].
*@apiParam {string} processKey 流程标识名称[非必填].
*@apiParam {integer} version 版本[非必填].
*@apiParam {string} deploymentId 部署id[非必填].
*@apiParam {string} categoryId 所属分类[非必填].
*@apiParam {string} xmlName xml文件名[非必填].
*@apiParam {string} diagramName 流程图片名[非必填].
*@apiParam {string} description 描述/备注[非必填].
*@apiParam {boolean} latest 最新版本[非必填].
*@apiParam {integer} status 流程状态 部署后默认1激活[非必填].
*@apiParam {string} routeName 关联前端表单路由名[非必填].
*@apiParam {string} businessTable 关联业务表名[非必填].
*@apiParam {boolean} allUser 是否所有人可见[非必填].
*@apiParam {string} categoryTitle 所属分类名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/updateInsStatus 激活或挂起流程实例
*@apiName 接口名39
*@apiGroup 流程实例管理接口
*@apiParam {string} id 流程实例id[非必填].
*@apiParam {integer} status status[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actProcess/updateStatus 激活或挂起流程定义
*@apiName 接口名40
*@apiGroup 流程定义管理接口
*@apiParam {string} id 流程定义id[非必填].
*@apiParam {integer} status status[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actTask/back 任务节点审批驳回至发起人
*@apiName 接口名41
*@apiGroup 任务管理接口
*@apiParam {string} id 任务id[非必填].
*@apiParam {string} procInstId 流程实例id[非必填].
*@apiParam {string} comment 意见评论[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actTask/backAll 批量驳回至发起人
*@apiName 接口名42
*@apiGroup 任务管理接口
*@apiParam {array} procInstIds 流程实例ids[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actTask/backToTask 任务节点审批驳回至指定历史节点
*@apiName 接口名43
*@apiGroup 任务管理接口
*@apiParam {string} id 任务id[非必填].
*@apiParam {string} backTaskKey 驳回指定节点key[非必填].
*@apiParam {string} procInstId 流程实例id[非必填].
*@apiParam {string} procDefId 流程定义id[非必填].
*@apiParam {array} assignees 原节点审批人[非必填].
*@apiParam {integer} priority 优先级[非必填].
*@apiParam {string} comment 意见评论[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actTask/delegate 委托他人代办
*@apiName 接口名44
*@apiGroup 任务管理接口
*@apiParam {string} id 任务id[非必填].
*@apiParam {string} userId 委托用户id[非必填].
*@apiParam {string} procInstId 流程实例id[非必填].
*@apiParam {string} comment 意见评论[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actTask/deleteHistoric 删除任务历史
*@apiName 接口名45
*@apiGroup 任务管理接口
*@apiParam {array} ids 任务id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actTask/doneList 已办列表
*@apiName 接口名46
*@apiGroup 任务管理接口
*@apiParam {string} name name[非必填].
*@apiParam {string} categoryId categoryId[非必填].
*@apiParam {integer} priority priority[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actTask/getBackList/{procInstId} 获取可返回的节点
*@apiName 接口名47
*@apiGroup 任务管理接口
*@apiParam {string} procInstId procInstId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actTask/historicFlow/{id} 流程流转历史
*@apiName 接口名48
*@apiGroup 任务管理接口
*@apiParam {string} id 流程实例id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actTask/pass 任务节点审批通过
*@apiName 接口名49
*@apiGroup 任务管理接口
*@apiParam {string} id 任务id[非必填].
*@apiParam {string} procInstId 流程实例id[非必填].
*@apiParam {array} assignees 下个节点审批人[非必填].
*@apiParam {integer} priority 优先级[非必填].
*@apiParam {string} comment 意见评论[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/actTask/passAll 批量通过
*@apiName 接口名50
*@apiGroup 任务管理接口
*@apiParam {array} ids 任务ids[非必填].
*@apiParam {boolean} sendMessage 是否发送站内消息[非必填].
*@apiParam {boolean} sendSms 是否发送短信通知[非必填].
*@apiParam {boolean} sendEmail 是否发送邮件通知[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/actTask/todoList 代办列表
*@apiName 接口名51
*@apiGroup 任务管理接口
*@apiParam {string} name name[非必填].
*@apiParam {string} categoryId categoryId[非必填].
*@apiParam {integer} priority priority[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/analysis/add} 通过id获取
*@apiName 接口名52
*@apiGroup 信息结构化接口
*@apiParam {string} text text[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/analysis/get} 通过id获取
*@apiName 接口名53
*@apiGroup 信息结构化接口
*@apiParam {string} text text[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "array",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/app/member/admin/add 添加用户
*@apiName 接口名54
*@apiGroup 会员管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} inviteCode 邀请码[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} nickname 昵称[非必填].
*@apiParam {string} mobile 手机[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} grade 积分 默认0[非必填].
*@apiParam {string} position 定位[非必填].
*@apiParam {string} address 地区[非必填].
*@apiParam {string} description 简介[非必填].
*@apiParam {string} inviteBy 邀请人[非必填].
*@apiParam {string} avatar 会员头像[非必填].
*@apiParam {integer} type 会员类型 默认0普通用户 1会员[非必填].
*@apiParam {integer} status 状态 默认0正常 -1拉黑禁用[非必填].
*@apiParam {integer} platform 注册平台来源 -1未知 0PC/H5 1安卓 2苹果 3微信 4支付宝 5QQ 6字节 7百度[非必填].
*@apiParam {string} permissions 拥有权限信息 多个逗号分隔 默认MEMBER[非必填].
*@apiParam {integer} vipStatus VIP状态 默认0未开通 1已开通 2已过期[非必填].
*@apiParam {string} vipStartTime 会员开通时间[非必填].
*@apiParam {string} vipEndTime 会员到期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/app/member/admin/edit 管理员修改资料
*@apiName 接口名55
*@apiGroup 会员管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} inviteCode 邀请码[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} nickname 昵称[非必填].
*@apiParam {string} mobile 手机[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} grade 积分 默认0[非必填].
*@apiParam {string} position 定位[非必填].
*@apiParam {string} address 地区[非必填].
*@apiParam {string} description 简介[非必填].
*@apiParam {string} inviteBy 邀请人[非必填].
*@apiParam {string} avatar 会员头像[非必填].
*@apiParam {integer} type 会员类型 默认0普通用户 1会员[非必填].
*@apiParam {integer} status 状态 默认0正常 -1拉黑禁用[非必填].
*@apiParam {integer} platform 注册平台来源 -1未知 0PC/H5 1安卓 2苹果 3微信 4支付宝 5QQ 6字节 7百度[非必填].
*@apiParam {string} permissions 拥有权限信息 多个逗号分隔 默认MEMBER[非必填].
*@apiParam {integer} vipStatus VIP状态 默认0未开通 1已开通 2已过期[非必填].
*@apiParam {string} vipStartTime 会员开通时间[非必填].
*@apiParam {string} vipEndTime 会员到期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/app/member/admin/status 后台禁用用户
*@apiName 接口名56
*@apiGroup 会员管理接口
*@apiParam {string} userId userId[必填].
*@apiParam {boolean} enable enable[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/app/member/delByIds 批量通过ids删除
*@apiName 接口名57
*@apiGroup 会员管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/app/member/getByCondition 多条件分页获取
*@apiName 接口名58
*@apiGroup 会员管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} inviteCode 邀请码[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} nickname 昵称[非必填].
*@apiParam {string} mobile 手机[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} grade 积分 默认0[非必填].
*@apiParam {string} position 定位[非必填].
*@apiParam {string} address 地区[非必填].
*@apiParam {string} description 简介[非必填].
*@apiParam {string} inviteBy 邀请人[非必填].
*@apiParam {string} avatar 会员头像[非必填].
*@apiParam {integer} type 会员类型 默认0普通用户 1会员[非必填].
*@apiParam {integer} status 状态 默认0正常 -1拉黑禁用[非必填].
*@apiParam {integer} platform 注册平台来源 -1未知 0PC/H5 1安卓 2苹果 3微信 4支付宝 5QQ 6字节 7百度[非必填].
*@apiParam {string} permissions 拥有权限信息 多个逗号分隔 默认MEMBER[非必填].
*@apiParam {integer} vipStatus VIP状态 默认0未开通 1已开通 2已过期[非必填].
*@apiParam {string} vipStartTime 会员开通时间[非必填].
*@apiParam {string} vipEndTime 会员到期时间[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "address": "string",
*                         "avatar": "string",
*                         "birth": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "description": "string",
*                         "email": "string",
*                         "grade": "integer",
*                         "id": "string",
*                         "inviteBy": "string",
*                         "inviteCode": "string",
*                         "mobile": "string",
*                         "nickname": "string",
*                         "password": "string",
*                         "permissions": "string",
*                         "platform": "integer",
*                         "position": "string",
*                         "sex": "string",
*                         "status": "integer",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                         "vipEndTime": "string",
*                         "vipStartTime": "string",
*                         "vipStatus": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/app/v1/member/info 获取当前登录会员信息接口
*@apiName 接口名59
*@apiGroup 会员接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "address": "string",
*               "avatar": "string",
*               "birth": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "email": "string",
*               "grade": "integer",
*               "id": "string",
*               "inviteBy": "string",
*               "inviteCode": "string",
*               "mobile": "string",
*               "nickname": "string",
*               "password": "string",
*               "permissions": "string",
*               "platform": "integer",
*               "position": "string",
*               "sex": "string",
*               "status": "integer",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "username": "string",
*               "vipEndTime": "string",
*               "vipStartTime": "string",
*               "vipStatus": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/app/v1/member/quickLogin 手机号快捷登录/注册
*@apiName 接口名60
*@apiGroup 会员接口
*@apiParam {string} mobile mobile[必填].
*@apiParam {string} inviteCode inviteCode[非必填].
*@apiParam {integer} platform platform[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/blockInfo/count 通过id获取
*@apiName 接口名61
*@apiGroup 模块信息关系表管理接口
*@apiParam {string} blockId blockId[非必填].
*@apiParam {string} id id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "integer",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/blockInfo/delByIds 批量通过id删除
*@apiName 接口名62
*@apiGroup 模块信息关系表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/blockInfo/get/{id} 通过id获取
*@apiName 接口名63
*@apiGroup 模块信息关系表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "integer",
*               "blocksId": "string",
*               "id": "string",
*               "inTime": "string",
*               "infosId": "string",
*               "isDeleted": "integer",
*               "myOrder": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/blockInfo/getAll 获取全部数据
*@apiName 接口名64
*@apiGroup 模块信息关系表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "area": "integer",
*                    "blocksId": "string",
*                    "id": "string",
*                    "inTime": "string",
*                    "infosId": "string",
*                    "isDeleted": "integer",
*                    "myOrder": "integer",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/blockInfo/getByBlockId 通过id获取
*@apiName 接口名65
*@apiGroup 模块信息关系表管理接口
*@apiParam {string} blockId blockId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "area": "integer",
*                    "blocksId": "string",
*                    "id": "string",
*                    "inTime": "string",
*                    "infosId": "string",
*                    "isDeleted": "integer",
*                    "myOrder": "integer",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/blockInfo/getByCondition 多条件分页获取
*@apiName 接口名66
*@apiGroup 模块信息关系表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} blocksId description[非必填].
*@apiParam {string} infosId description[非必填].
*@apiParam {string} inTime 入库时间[非必填].
*@apiParam {integer} area description[非必填].
*@apiParam {integer} myOrder description[非必填].
*@apiParam {integer} isDeleted description[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "integer",
*                         "blocksId": "string",
*                         "id": "string",
*                         "inTime": "string",
*                         "infosId": "string",
*                         "isDeleted": "integer",
*                         "myOrder": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/blockInfo/getByPage 分页获取
*@apiName 接口名67
*@apiGroup 模块信息关系表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "integer",
*                         "blocksId": "string",
*                         "id": "string",
*                         "inTime": "string",
*                         "infosId": "string",
*                         "isDeleted": "integer",
*                         "myOrder": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/blockInfo/list 通过id获取
*@apiName 接口名68
*@apiGroup 模块信息关系表管理接口
*@apiParam {string} channelId channelId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "array",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/blockInfo/save 保存数据
*@apiName 接口名69
*@apiGroup 模块信息关系表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} blocksId description[非必填].
*@apiParam {string} infosId description[非必填].
*@apiParam {string} inTime 入库时间[非必填].
*@apiParam {integer} area description[非必填].
*@apiParam {integer} myOrder description[非必填].
*@apiParam {integer} isDeleted description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "integer",
*               "blocksId": "string",
*               "id": "string",
*               "inTime": "string",
*               "infosId": "string",
*               "isDeleted": "integer",
*               "myOrder": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/blockInfo/update 更新数据
*@apiName 接口名70
*@apiGroup 模块信息关系表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} blocksId description[非必填].
*@apiParam {string} infosId description[非必填].
*@apiParam {string} inTime 入库时间[非必填].
*@apiParam {integer} area description[非必填].
*@apiParam {integer} myOrder description[非必填].
*@apiParam {integer} isDeleted description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "integer",
*               "blocksId": "string",
*               "id": "string",
*               "inTime": "string",
*               "infosId": "string",
*               "isDeleted": "integer",
*               "myOrder": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/category/delByIds 批量通过id删除
*@apiName 接口名71
*@apiGroup 分类管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/category/get/{id} 通过id获取
*@apiName 接口名72
*@apiGroup 分类管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/category/getAll 获取全部数据
*@apiName 接口名73
*@apiGroup 分类管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/category/getByCondition 多条件分页获取
*@apiName 接口名74
*@apiGroup 分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 分类名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/category/getByPage 分页获取
*@apiName 接口名75
*@apiGroup 分类管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/category/save 保存数据
*@apiName 接口名76
*@apiGroup 分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 分类名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/category/update 更新数据
*@apiName 接口名77
*@apiGroup 分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 分类名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/categoryGroup/delByIds 批量通过id删除
*@apiName 接口名78
*@apiGroup 分类组合管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/categoryGroup/get/{id} 通过id获取
*@apiName 接口名79
*@apiGroup 分类组合管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "category": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "keywordGroup": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/categoryGroup/getAll 获取全部数据
*@apiName 接口名80
*@apiGroup 分类组合管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "category": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "keywordGroup": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/categoryGroup/getByCondition 多条件分页获取
*@apiName 接口名81
*@apiGroup 分类组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} category 分类[非必填].
*@apiParam {string} keywordGroup 组合[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "category": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "keywordGroup": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/categoryGroup/getByPage 分页获取
*@apiName 接口名82
*@apiGroup 分类组合管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "category": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "keywordGroup": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/categoryGroup/save 保存数据
*@apiName 接口名83
*@apiGroup 分类组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} category 分类[非必填].
*@apiParam {string} keywordGroup 组合[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "category": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "keywordGroup": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/categoryGroup/update 更新数据
*@apiName 接口名84
*@apiGroup 分类组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} category 分类[非必填].
*@apiParam {string} keywordGroup 组合[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "category": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "keywordGroup": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/channel/delByIds 批量通过id删除
*@apiName 接口名85
*@apiGroup 频道管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/channel/get/{id} 通过id获取
*@apiName 接口名86
*@apiGroup 频道管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/channel/getAll 获取全部数据
*@apiName 接口名87
*@apiGroup 频道管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/channel/getByCondition 多条件分页获取
*@apiName 接口名88
*@apiGroup 频道管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 频道名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/channel/getByPage 分页获取
*@apiName 接口名89
*@apiGroup 频道管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/channel/save 保存数据
*@apiName 接口名90
*@apiGroup 频道管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 频道名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/channel/update 更新数据
*@apiName 接口名91
*@apiGroup 频道管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 频道名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/client/delByIds 批量通过id删除
*@apiName 接口名92
*@apiGroup 客户端管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/client/get/{id} 通过id获取
*@apiName 接口名93
*@apiGroup 客户端管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "clientSecret": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "homeUri": "string",
*               "id": "string",
*               "name": "string",
*               "redirectUri": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/client/getAll 获取全部数据
*@apiName 接口名94
*@apiGroup 客户端管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "clientSecret": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "homeUri": "string",
*                    "id": "string",
*                    "name": "string",
*                    "redirectUri": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/client/getByCondition 多条件分页获取
*@apiName 接口名95
*@apiGroup 客户端管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 网站名称[非必填].
*@apiParam {string} clientSecret 秘钥[非必填].
*@apiParam {string} homeUri 网站主页[非必填].
*@apiParam {string} redirectUri 成功授权后的回调地址[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "clientSecret": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "homeUri": "string",
*                         "id": "string",
*                         "name": "string",
*                         "redirectUri": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/client/getByPage 分页获取
*@apiName 接口名96
*@apiGroup 客户端管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "clientSecret": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "homeUri": "string",
*                         "id": "string",
*                         "name": "string",
*                         "redirectUri": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/client/getName/{clientId} 获取网站基本信息
*@apiName 接口名97
*@apiGroup 客户端管理接口
*@apiParam {string} clientId clientId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "string",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/client/getSecretKey 生成随机secretKey
*@apiName 接口名98
*@apiGroup 客户端管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "string",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/client/save 保存数据
*@apiName 接口名99
*@apiGroup 客户端管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 网站名称[非必填].
*@apiParam {string} clientSecret 秘钥[非必填].
*@apiParam {string} homeUri 网站主页[非必填].
*@apiParam {string} redirectUri 成功授权后的回调地址[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "clientSecret": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "homeUri": "string",
*               "id": "string",
*               "name": "string",
*               "redirectUri": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/client/update 更新数据
*@apiName 接口名100
*@apiGroup 客户端管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 网站名称[非必填].
*@apiParam {string} clientSecret 秘钥[非必填].
*@apiParam {string} homeUri 网站主页[非必填].
*@apiParam {string} redirectUri 成功授权后的回调地址[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "clientSecret": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "homeUri": "string",
*               "id": "string",
*               "name": "string",
*               "redirectUri": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/collection/delByIds 批量通过id删除
*@apiName 接口名101
*@apiGroup 收藏管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/collection/get/{id} 通过id获取
*@apiName 接口名102
*@apiGroup 收藏管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "areaId": "integer",
*               "category": "string",
*               "categoryId": "integer",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoId": "string",
*               "name": "string",
*               "remark": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*               "valid": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/collection/getAll 获取全部数据
*@apiName 接口名103
*@apiGroup 收藏管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "area": "string",
*                    "areaId": "integer",
*                    "category": "string",
*                    "categoryId": "integer",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "infoId": "string",
*                    "name": "string",
*                    "remark": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*                    "userId": "string",
*                    "valid": "integer",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/collection/getByCondition 多条件分页获取
*@apiName 接口名104
*@apiGroup 收藏管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {string} infoId 信息ID[非必填].
*@apiParam {integer} type 类型[非必填].
*@apiParam {integer} valid 有效[非必填].
*@apiParam {integer} areaId 地区ID[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {integer} categoryId 行业ID[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} url 链接[非必填].
*@apiParam {string} remark 备注[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "string",
*                         "areaId": "integer",
*                         "category": "string",
*                         "categoryId": "integer",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "infoId": "string",
*                         "name": "string",
*                         "remark": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "string",
*                         "valid": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/collection/getByPage 分页获取
*@apiName 接口名105
*@apiGroup 收藏管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "string",
*                         "areaId": "integer",
*                         "category": "string",
*                         "categoryId": "integer",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "infoId": "string",
*                         "name": "string",
*                         "remark": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "string",
*                         "valid": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/collection/remove 移除
*@apiName 接口名106
*@apiGroup 收藏管理接口
*@apiParam {string} id 收藏id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/collection/restore 恢复
*@apiName 接口名107
*@apiGroup 收藏管理接口
*@apiParam {string} id 收藏id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/collection/save 收藏
*@apiName 接口名108
*@apiGroup 收藏管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {string} infoId 信息ID[非必填].
*@apiParam {integer} type 类型[非必填].
*@apiParam {integer} valid 有效[非必填].
*@apiParam {integer} areaId 地区ID[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {integer} categoryId 行业ID[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} url 链接[非必填].
*@apiParam {string} remark 备注[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "areaId": "integer",
*               "category": "string",
*               "categoryId": "integer",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoId": "string",
*               "name": "string",
*               "remark": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*               "valid": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/collection/update 更新数据
*@apiName 接口名109
*@apiGroup 收藏管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {string} infoId 信息ID[非必填].
*@apiParam {integer} type 类型[非必填].
*@apiParam {integer} valid 有效[非必填].
*@apiParam {integer} areaId 地区ID[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {integer} categoryId 行业ID[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} url 链接[非必填].
*@apiParam {string} remark 备注[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "areaId": "integer",
*               "category": "string",
*               "categoryId": "integer",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoId": "string",
*               "name": "string",
*               "remark": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*               "valid": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/comment/delByIds 批量通过id删除
*@apiName 接口名110
*@apiGroup 项目评论表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/comment/get/{id} 通过id获取
*@apiName 接口名111
*@apiGroup 项目评论表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "avatar": "string",
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "projectId": "string",
*               "replies": [
*                     {
*                         "commentId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                    },
*               ],
*               "updateBy": "string",
*               "updateTime": "string",
*               "username": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/comment/getAll 获取全部数据
*@apiName 接口名112
*@apiGroup 项目评论表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "avatar": "string",
*                    "content": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "projectId": "string",
*                    "replies": [
*                          {
*                              "commentId": "string",
*                              "createBy": "string",
*                              "createTime": "string",
*                              "delFlag": "integer",
*                              "id": "string",
*                              "isParent": "boolean",
*                              "parentId": "string",
*                              "parentTitle": "string",
*                              "sortOrder": "number",
*                              "title": "string",
*                              "updateBy": "string",
*                              "updateTime": "string",
*                              "username": "string",
*                         },
*                    ],
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "username": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/comment/getByCondition 多条件分页获取
*@apiName 接口名113
*@apiGroup 项目评论表管理接口
*@apiParam {string} replies[0].id 唯一标识[非必填].
*@apiParam {string} replies[0].createBy 创建者[非必填].
*@apiParam {string} replies[0].createTime 创建时间[非必填].
*@apiParam {string} replies[0].updateBy 更新者[非必填].
*@apiParam {string} replies[0].updateTime 更新时间[非必填].
*@apiParam {integer} replies[0].delFlag 删除标志 默认0[非必填].
*@apiParam {string} replies[0].title 分类名称[非必填].
*@apiParam {string} replies[0].commentId 评论id[非必填].
*@apiParam {string} replies[0].parentId 父id[非必填].
*@apiParam {string} replies[0].username 用户名[非必填].
*@apiParam {boolean} replies[0].isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} replies[0].sortOrder 排序值[非必填].
*@apiParam {string} replies[0].parentTitle 父节点名称[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} content 评论内容[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "avatar": "string",
*                         "content": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "projectId": "string",
*                         "replies": [
*                               {
*                                   "commentId": "string",
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "id": "string",
*                                   "isParent": "boolean",
*                                   "parentId": "string",
*                                   "parentTitle": "string",
*                                   "sortOrder": "number",
*                                   "title": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                                   "username": "string",
*                              },
*                         ],
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/comment/getByPage 分页获取
*@apiName 接口名114
*@apiGroup 项目评论表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "avatar": "string",
*                         "content": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "projectId": "string",
*                         "replies": [
*                               {
*                                   "commentId": "string",
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "id": "string",
*                                   "isParent": "boolean",
*                                   "parentId": "string",
*                                   "parentTitle": "string",
*                                   "sortOrder": "number",
*                                   "title": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                                   "username": "string",
*                              },
*                         ],
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/comment/save 保存数据
*@apiName 接口名115
*@apiGroup 项目评论表管理接口
*@apiParam {string} replies[0].id 唯一标识[非必填].
*@apiParam {string} replies[0].createBy 创建者[非必填].
*@apiParam {string} replies[0].createTime 创建时间[非必填].
*@apiParam {string} replies[0].updateBy 更新者[非必填].
*@apiParam {string} replies[0].updateTime 更新时间[非必填].
*@apiParam {integer} replies[0].delFlag 删除标志 默认0[非必填].
*@apiParam {string} replies[0].title 分类名称[非必填].
*@apiParam {string} replies[0].commentId 评论id[非必填].
*@apiParam {string} replies[0].parentId 父id[非必填].
*@apiParam {string} replies[0].username 用户名[非必填].
*@apiParam {boolean} replies[0].isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} replies[0].sortOrder 排序值[非必填].
*@apiParam {string} replies[0].parentTitle 父节点名称[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} content 评论内容[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "avatar": "string",
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "projectId": "string",
*               "replies": [
*                     {
*                         "commentId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                    },
*               ],
*               "updateBy": "string",
*               "updateTime": "string",
*               "username": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/comment/update 更新数据
*@apiName 接口名116
*@apiGroup 项目评论表管理接口
*@apiParam {string} replies[0].id 唯一标识[非必填].
*@apiParam {string} replies[0].createBy 创建者[非必填].
*@apiParam {string} replies[0].createTime 创建时间[非必填].
*@apiParam {string} replies[0].updateBy 更新者[非必填].
*@apiParam {string} replies[0].updateTime 更新时间[非必填].
*@apiParam {integer} replies[0].delFlag 删除标志 默认0[非必填].
*@apiParam {string} replies[0].title 分类名称[非必填].
*@apiParam {string} replies[0].commentId 评论id[非必填].
*@apiParam {string} replies[0].parentId 父id[非必填].
*@apiParam {string} replies[0].username 用户名[非必填].
*@apiParam {boolean} replies[0].isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} replies[0].sortOrder 排序值[非必填].
*@apiParam {string} replies[0].parentTitle 父节点名称[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} content 评论内容[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "avatar": "string",
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "projectId": "string",
*               "replies": [
*                     {
*                         "commentId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                    },
*               ],
*               "updateBy": "string",
*               "updateTime": "string",
*               "username": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/captcha/draw/{captchaId} 根据验证码ID获取图片
*@apiName 接口名117
*@apiGroup 验证码接口
*@apiParam {string} captchaId captchaId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/captcha/init 初始化验证码
*@apiName 接口名118
*@apiGroup 验证码接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/captcha/sendEditMobileSms/{mobile} 发送修改手机短信验证码
*@apiName 接口名119
*@apiGroup 验证码接口
*@apiParam {string} mobile mobile[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/captcha/sendLoginSms/{mobile} 发送登录短信验证码
*@apiName 接口名120
*@apiGroup 验证码接口
*@apiParam {string} mobile mobile[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/captcha/sendRegistSms/{mobile} 发送注册短信验证码
*@apiName 接口名121
*@apiGroup 验证码接口
*@apiParam {string} mobile mobile[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/captcha/sendResetSms/{mobile} 发送重置密码短信验证码
*@apiName 接口名122
*@apiGroup 验证码接口
*@apiParam {string} mobile mobile[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/ip/info IP及天气相关信息
*@apiName 接口名123
*@apiGroup IP接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/needLogin 没有登录
*@apiName 接口名124
*@apiGroup Security相关接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/common/swagger/login Swagger接口文档专用登录接口 方便测试
*@apiName 接口名125
*@apiGroup Security相关接口
*@apiParam {string} username username[必填].
*@apiParam {string} password password[必填].
*@apiParam {string} captchaId 图片验证码ID[非必填].
*@apiParam {string} code 验证码[非必填].
*@apiParam {boolean} saveLogin 记住密码[非必填].
*@apiParam {string} loginUrl 可自定义登录接口地址[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/company/delByIds 批量通过id删除
*@apiName 接口名126
*@apiGroup 企业管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/company/get/{id} 根据ID获取公司信息
*@apiName 接口名127
*@apiGroup 企业管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "address": "string",
*               "category1": "string",
*               "category2": "string",
*               "companyName": "string",
*               "companyType": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "crmKhId": "string",
*               "custRightGroup": "integer",
*               "delFlag": "integer",
*               "id": "string",
*               "payEndDate": "string",
*               "product": "string",
*               "telNumber": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/company/getAll 获取全部数据
*@apiName 接口名128
*@apiGroup 企业管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "address": "string",
*                    "category1": "string",
*                    "category2": "string",
*                    "companyName": "string",
*                    "companyType": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "crmKhId": "string",
*                    "custRightGroup": "integer",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "payEndDate": "string",
*                    "product": "string",
*                    "telNumber": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/company/getByCondition 多条件分页获取
*@apiName 接口名129
*@apiGroup 企业管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} companyName 企业名[非必填].
*@apiParam {string} telNumber 公司座机[非必填].
*@apiParam {string} address 地址[非必填].
*@apiParam {string} product 主营产品[非必填].
*@apiParam {string} category1 一级行业[非必填].
*@apiParam {string} category2 二级行业[非必填].
*@apiParam {string} companyType 经营模式[非必填].
*@apiParam {integer} custRightGroup 会员级别 0 免费　1 入门 2 标准　3　VIP[非必填].
*@apiParam {string} payEndDate 会员到期时间[非必填].
*@apiParam {string} crmKhId 客户id[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "address": "string",
*                         "category1": "string",
*                         "category2": "string",
*                         "companyName": "string",
*                         "companyType": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "crmKhId": "string",
*                         "custRightGroup": "integer",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "payEndDate": "string",
*                         "product": "string",
*                         "telNumber": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/company/getByPage 分页获取
*@apiName 接口名130
*@apiGroup 企业管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "address": "string",
*                         "category1": "string",
*                         "category2": "string",
*                         "companyName": "string",
*                         "companyType": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "crmKhId": "string",
*                         "custRightGroup": "integer",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "payEndDate": "string",
*                         "product": "string",
*                         "telNumber": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/company/save 保存数据
*@apiName 接口名131
*@apiGroup 企业管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} companyName 企业名[非必填].
*@apiParam {string} telNumber 公司座机[非必填].
*@apiParam {string} address 地址[非必填].
*@apiParam {string} product 主营产品[非必填].
*@apiParam {string} category1 一级行业[非必填].
*@apiParam {string} category2 二级行业[非必填].
*@apiParam {string} companyType 经营模式[非必填].
*@apiParam {integer} custRightGroup 会员级别 0 免费　1 入门 2 标准　3　VIP[非必填].
*@apiParam {string} payEndDate 会员到期时间[非必填].
*@apiParam {string} crmKhId 客户id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "address": "string",
*               "category1": "string",
*               "category2": "string",
*               "companyName": "string",
*               "companyType": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "crmKhId": "string",
*               "custRightGroup": "integer",
*               "delFlag": "integer",
*               "id": "string",
*               "payEndDate": "string",
*               "product": "string",
*               "telNumber": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/company/update 更新数据
*@apiName 接口名132
*@apiGroup 企业管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} companyName 企业名[非必填].
*@apiParam {string} telNumber 公司座机[非必填].
*@apiParam {string} address 地址[非必填].
*@apiParam {string} product 主营产品[非必填].
*@apiParam {string} category1 一级行业[非必填].
*@apiParam {string} category2 二级行业[非必填].
*@apiParam {string} companyType 经营模式[非必填].
*@apiParam {integer} custRightGroup 会员级别 0 免费　1 入门 2 标准　3　VIP[非必填].
*@apiParam {string} payEndDate 会员到期时间[非必填].
*@apiParam {string} crmKhId 客户id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "address": "string",
*               "category1": "string",
*               "category2": "string",
*               "companyName": "string",
*               "companyType": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "crmKhId": "string",
*               "custRightGroup": "integer",
*               "delFlag": "integer",
*               "id": "string",
*               "payEndDate": "string",
*               "product": "string",
*               "telNumber": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/contact/delByIds 批量通过id删除
*@apiName 接口名133
*@apiGroup 联系人管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/contact/get/{id} 通过id获取
*@apiName 接口名134
*@apiGroup 联系人管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "contactEmail": "string",
*               "contactInfo": "string",
*               "contactPhone": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isMain": "string",
*               "memberId": "string",
*               "status": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/contact/getAll 获取全部数据
*@apiName 接口名135
*@apiGroup 联系人管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "contactEmail": "string",
*                    "contactInfo": "string",
*                    "contactPhone": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isMain": "string",
*                    "memberId": "string",
*                    "status": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/contact/getByCondition 多条件分页获取
*@apiName 接口名136
*@apiGroup 联系人管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} memberId 会员Id[非必填].
*@apiParam {string} contactInfo 联系人姓名[非必填].
*@apiParam {string} contactPhone 联系人手机号[非必填].
*@apiParam {string} contactEmail 联系人邮箱[非必填].
*@apiParam {string} isMain 是否主联系人[非必填].
*@apiParam {integer} status 是否导入成功[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "contactEmail": "string",
*                         "contactInfo": "string",
*                         "contactPhone": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isMain": "string",
*                         "memberId": "string",
*                         "status": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/contact/getByPage 分页获取
*@apiName 接口名137
*@apiGroup 联系人管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "contactEmail": "string",
*                         "contactInfo": "string",
*                         "contactPhone": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isMain": "string",
*                         "memberId": "string",
*                         "status": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/contact/save 保存数据
*@apiName 接口名138
*@apiGroup 联系人管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} memberId 会员Id[非必填].
*@apiParam {string} contactInfo 联系人姓名[非必填].
*@apiParam {string} contactPhone 联系人手机号[非必填].
*@apiParam {string} contactEmail 联系人邮箱[非必填].
*@apiParam {string} isMain 是否主联系人[非必填].
*@apiParam {integer} status 是否导入成功[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "contactEmail": "string",
*               "contactInfo": "string",
*               "contactPhone": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isMain": "string",
*               "memberId": "string",
*               "status": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/contact/update 更新数据
*@apiName 接口名139
*@apiGroup 联系人管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} memberId 会员Id[非必填].
*@apiParam {string} contactInfo 联系人姓名[非必填].
*@apiParam {string} contactPhone 联系人手机号[非必填].
*@apiParam {string} contactEmail 联系人邮箱[非必填].
*@apiParam {string} isMain 是否主联系人[非必填].
*@apiParam {integer} status 是否导入成功[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "contactEmail": "string",
*               "contactInfo": "string",
*               "contactPhone": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isMain": "string",
*               "memberId": "string",
*               "status": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/coupon/delByIds 批量通过id删除
*@apiName 接口名140
*@apiGroup 优惠券管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/coupon/get/{id} 通过id获取
*@apiName 接口名141
*@apiGroup 优惠券管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/coupon/getAll 获取全部数据
*@apiName 接口名142
*@apiGroup 优惠券管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "expireDate": "string",
*                    "id": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/coupon/getByCondition 多条件分页获取
*@apiName 接口名143
*@apiGroup 优惠券管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} expireDate 过期时间[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireDate": "string",
*                         "id": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/coupon/getByPage 分页获取
*@apiName 接口名144
*@apiGroup 优惠券管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireDate": "string",
*                         "id": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/coupon/save 保存数据
*@apiName 接口名145
*@apiGroup 优惠券管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} expireDate 过期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/coupon/update 更新数据
*@apiName 接口名146
*@apiGroup 优惠券管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} expireDate 过期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/department/add 添加
*@apiName 接口名147
*@apiGroup 部门管理接口
*@apiParam {array} mainHeader 主负责人[非必填].
*@apiParam {array} viceHeader 副负责人[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 部门名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/department/delByIds 批量通过id删除
*@apiName 接口名148
*@apiGroup 部门管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/department/edit 编辑
*@apiName 接口名149
*@apiGroup 部门管理接口
*@apiParam {array} mainHeader 主负责人[非必填].
*@apiParam {array} viceHeader 副负责人[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 部门名称[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiParam {array} mainHeader mainHeader[非必填].
*@apiParam {array} viceHeader viceHeader[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/department/getByParentId/{parentId} 通过parentId获取
*@apiName 接口名150
*@apiGroup 部门管理接口
*@apiParam {string} parentId parentId[必填].
*@apiParam {boolean} openDataFilter 是否开始数据权限过滤[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "mainHeader": "array",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "viceHeader": "array",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/department/search 部门名模糊搜索
*@apiName 接口名151
*@apiGroup 部门管理接口
*@apiParam {string} title title[必填].
*@apiParam {boolean} openDataFilter 是否开始数据权限过滤[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "mainHeader": "array",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "viceHeader": "array",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/dict/add 添加
*@apiName 接口名152
*@apiGroup 字典管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 字典名称[非必填].
*@apiParam {string} type 字典类型[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/dict/delByIds 通过id删除
*@apiName 接口名153
*@apiGroup 字典管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/dict/edit 编辑
*@apiName 接口名154
*@apiGroup 字典管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 字典名称[非必填].
*@apiParam {string} type 字典类型[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/dict/getAll 获取全部数据
*@apiName 接口名155
*@apiGroup 字典管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "description": "string",
*                    "id": "string",
*                    "sortOrder": "number",
*                    "title": "string",
*                    "type": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/dict/search 搜索字典
*@apiName 接口名156
*@apiGroup 字典管理接口
*@apiParam {string} key key[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "description": "string",
*                    "id": "string",
*                    "sortOrder": "number",
*                    "title": "string",
*                    "type": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/dictData/add 添加
*@apiName 接口名157
*@apiGroup 字典数据管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 数据名称[非必填].
*@apiParam {string} value 数据值[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {string} dictId 所属字典[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/dictData/delByIds 批量通过id删除
*@apiName 接口名158
*@apiGroup 字典数据管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/dictData/edit 编辑
*@apiName 接口名159
*@apiGroup 字典数据管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 数据名称[非必填].
*@apiParam {string} value 数据值[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {string} dictId 所属字典[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/dictData/getByCondition 多条件分页获取用户列表
*@apiName 接口名160
*@apiGroup 字典数据管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 数据名称[非必填].
*@apiParam {string} value 数据值[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {string} dictId 所属字典[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "description": "string",
*                         "dictId": "string",
*                         "id": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "value": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/dictData/getByType/{type} 通过类型获取
*@apiName 接口名161
*@apiGroup 字典数据管理接口
*@apiParam {string} type type[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/email/editEmail 修改邮箱或重置密码
*@apiName 接口名162
*@apiGroup 邮箱验证接口
*@apiParam {string} email email[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/email/resetByEmail 通过邮箱重置密码
*@apiName 接口名163
*@apiGroup 邮箱验证接口
*@apiParam {string} email email[必填].
*@apiParam {string} password password[必填].
*@apiParam {string} passStrength passStrength[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/email/sendEditCode/{email} 发送修改邮箱验证码
*@apiName 接口名164
*@apiGroup 邮箱验证接口
*@apiParam {string} email email[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/email/sendResetCode/{email} 发送重置密码邮箱验证码
*@apiName 接口名165
*@apiGroup 邮箱验证接口
*@apiParam {string} email email[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/file/copy 文件复制
*@apiName 接口名166
*@apiGroup 文件管理管理接口
*@apiParam {string} id id[必填].
*@apiParam {string} key key[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/file/delete 文件删除
*@apiName 接口名167
*@apiGroup 文件管理管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/file/getByCondition 多条件分页获取
*@apiName 接口名168
*@apiGroup 文件管理管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 原文件名[非必填].
*@apiParam {integer} size 大小[非必填].
*@apiParam {string} type 文件类型[非必填].
*@apiParam {string} url 路径[非必填].
*@apiParam {integer} location 存储位置 0本地 1七牛 2阿里 3腾讯 4MinIO[非必填].
*@apiParam {string} nickname 上传者用户名[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "fkey": "string",
*                         "id": "string",
*                         "location": "integer",
*                         "name": "string",
*                         "nickname": "string",
*                         "size": "integer",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/file/rename 文件重命名
*@apiName 接口名169
*@apiGroup 文件管理管理接口
*@apiParam {string} id id[必填].
*@apiParam {string} newKey newKey[必填].
*@apiParam {string} newName newName[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/file/view/{id} 本地存储预览文件
*@apiName 接口名170
*@apiGroup 文件管理管理接口
*@apiParam {string} id id[必填].
*@apiParam {string} filename filename[非必填].
*@apiParam {boolean} preview preview[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/generate/getEntityData/{path} 通过实体类生成Vue代码Json数据
*@apiName 接口名171
*@apiGroup Vue代码生成
*@apiParam {string} path path[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/generate/table/{vueName}/{rowNum} 增删改表格生成
*@apiName 接口名172
*@apiGroup Vue代码生成
*@apiParam {string} vueName vueName[必填].
*@apiParam {integer} rowNum rowNum[必填].
*@apiParam {type} fields fields[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/generate/tree/{vueName}/{rowNum} 树形结构生成
*@apiName 接口名173
*@apiGroup Vue代码生成
*@apiParam {string} vueName vueName[必填].
*@apiParam {integer} rowNum rowNum[必填].
*@apiParam {type} fields fields[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/group/delByIds 批量通过id删除
*@apiName 接口名174
*@apiGroup 组合管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/group/get/{id} 通过id获取
*@apiName 接口名175
*@apiGroup 组合管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "keywordGroup": "string",
*               "name": "string",
*               "operator": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/group/getAll 获取全部数据
*@apiName 接口名176
*@apiGroup 组合管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "keywordGroup": "string",
*                    "name": "string",
*                    "operator": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/group/getByCondition 多条件分页获取
*@apiName 接口名177
*@apiGroup 组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 关键词[非必填].
*@apiParam {string} keywordGroup 关键词库[非必填].
*@apiParam {integer} operator 操作符[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "keywordGroup": "string",
*                         "name": "string",
*                         "operator": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/group/getByPage 分页获取
*@apiName 接口名178
*@apiGroup 组合管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "keywordGroup": "string",
*                         "name": "string",
*                         "operator": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/group/save 保存数据
*@apiName 接口名179
*@apiGroup 组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 关键词[非必填].
*@apiParam {string} keywordGroup 关键词库[非必填].
*@apiParam {integer} operator 操作符[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "keywordGroup": "string",
*               "name": "string",
*               "operator": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/group/update 更新数据
*@apiName 接口名180
*@apiGroup 组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 关键词[非必填].
*@apiParam {string} keywordGroup 关键词库[非必填].
*@apiParam {integer} operator 操作符[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "keywordGroup": "string",
*               "name": "string",
*               "operator": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/invitation/delByIds 批量通过id删除
*@apiName 接口名181
*@apiGroup 邀请码管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/invitation/get/{id} 通过id获取
*@apiName 接口名182
*@apiGroup 邀请码管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "inviterId": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/invitation/getAll 获取全部数据
*@apiName 接口名183
*@apiGroup 邀请码管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "expireDate": "string",
*                    "id": "string",
*                    "inviterId": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/invitation/getByCondition 多条件分页获取
*@apiName 接口名184
*@apiGroup 邀请码管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} inviterId 邀请人ID[非必填].
*@apiParam {string} expireDate 过期时间[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireDate": "string",
*                         "id": "string",
*                         "inviterId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/invitation/getByPage 分页获取
*@apiName 接口名185
*@apiGroup 邀请码管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireDate": "string",
*                         "id": "string",
*                         "inviterId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/invitation/save 保存数据
*@apiName 接口名186
*@apiGroup 邀请码管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} inviterId 邀请人ID[非必填].
*@apiParam {string} expireDate 过期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "inviterId": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/invitation/update 更新数据
*@apiName 接口名187
*@apiGroup 邀请码管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} inviterId 邀请人ID[非必填].
*@apiParam {string} expireDate 过期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "inviterId": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/itemDesc/delByIds 批量通过id删除
*@apiName 接口名188
*@apiGroup 商品详情管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/itemDesc/get/{id} 通过id获取
*@apiName 接口名189
*@apiGroup 商品详情管理接口
*@apiParam {integer} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "created": "string",
*               "id": "integer",
*               "itemDesc": "string",
*               "updated": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/itemDesc/getAll 获取全部数据
*@apiName 接口名190
*@apiGroup 商品详情管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "created": "string",
*                    "id": "integer",
*                    "itemDesc": "string",
*                    "updated": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/itemDesc/getByCondition 多条件分页获取
*@apiName 接口名191
*@apiGroup 商品详情管理接口
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {string} itemDesc 商品描述[非必填].
*@apiParam {string} created 创建时间[非必填].
*@apiParam {string} updated 更新时间[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "created": "string",
*                         "id": "integer",
*                         "itemDesc": "string",
*                         "updated": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/itemDesc/getByPage 分页获取
*@apiName 接口名192
*@apiGroup 商品详情管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "created": "string",
*                         "id": "integer",
*                         "itemDesc": "string",
*                         "updated": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/itemDesc/save 保存数据
*@apiName 接口名193
*@apiGroup 商品详情管理接口
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {string} itemDesc 商品描述[非必填].
*@apiParam {string} created 创建时间[非必填].
*@apiParam {string} updated 更新时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "created": "string",
*               "id": "integer",
*               "itemDesc": "string",
*               "updated": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/itemDesc/update 更新数据
*@apiName 接口名194
*@apiGroup 商品详情管理接口
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {string} itemDesc 商品描述[非必填].
*@apiParam {string} created 创建时间[非必填].
*@apiParam {string} updated 更新时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "created": "string",
*               "id": "integer",
*               "itemDesc": "string",
*               "updated": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/leave/add 添加申请草稿状态
*@apiName 接口名195
*@apiGroup 请假申请接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} type 请假类型[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} description 说明[非必填].
*@apiParam {string} startDate 开始日期[非必填].
*@apiParam {string} endDate 截止日期[非必填].
*@apiParam {integer} duration 请假时长（小时）[非必填].
*@apiParam {string} procDefId procDefId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/leave/delByIds 批量通过id删除
*@apiName 接口名196
*@apiGroup 请假申请接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/leave/get/{id} 通过id获取
*@apiName 接口名197
*@apiGroup 请假申请接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "duration": "integer",
*               "endDate": "string",
*               "id": "string",
*               "startDate": "string",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/leave/getAll 获取全部数据
*@apiName 接口名198
*@apiGroup 请假申请接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "description": "string",
*                    "duration": "integer",
*                    "endDate": "string",
*                    "id": "string",
*                    "startDate": "string",
*                    "title": "string",
*                    "type": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/leave/getByPage 分页获取
*@apiName 接口名199
*@apiGroup 请假申请接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "description": "string",
*                         "duration": "integer",
*                         "endDate": "string",
*                         "id": "string",
*                         "startDate": "string",
*                         "title": "string",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/leave/save 保存数据
*@apiName 接口名200
*@apiGroup 请假申请接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} type 请假类型[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} description 说明[非必填].
*@apiParam {string} startDate 开始日期[非必填].
*@apiParam {string} endDate 截止日期[非必填].
*@apiParam {integer} duration 请假时长（小时）[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "duration": "integer",
*               "endDate": "string",
*               "id": "string",
*               "startDate": "string",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/leave/update 更新数据
*@apiName 接口名201
*@apiGroup 请假申请接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} type 请假类型[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} description 说明[非必填].
*@apiParam {string} startDate 开始日期[非必填].
*@apiParam {string} endDate 截止日期[非必填].
*@apiParam {integer} duration 请假时长（小时）[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "duration": "integer",
*               "endDate": "string",
*               "id": "string",
*               "startDate": "string",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/log/delAll 全部删除
*@apiName 接口名202
*@apiGroup 日志管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/log/delByIds 批量删除
*@apiName 接口名203
*@apiGroup 日志管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/log/getAllByPage 分页获取全部
*@apiName 接口名204
*@apiGroup 日志管理接口
*@apiParam {integer} type type[非必填].
*@apiParam {string} key key[必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/message/add 添加消息
*@apiName 接口名205
*@apiGroup 消息内容管理接口
*@apiParam {array} userIds 发送指定用户id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} content 内容[非必填].
*@apiParam {string} type 消息类型[非必填].
*@apiParam {boolean} createSend 新创建账号也推送[非必填].
*@apiParam {integer} range 发送范围[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/message/delByIds 删除消息
*@apiName 接口名206
*@apiGroup 消息内容管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/message/edit 编辑消息
*@apiName 接口名207
*@apiGroup 消息内容管理接口
*@apiParam {array} userIds 发送指定用户id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} content 内容[非必填].
*@apiParam {string} type 消息类型[非必填].
*@apiParam {boolean} createSend 新创建账号也推送[非必填].
*@apiParam {integer} range 发送范围[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/message/get/{id} 通过id获取
*@apiName 接口名208
*@apiGroup 消息内容管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "createBy": "string",
*               "createSend": "boolean",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "range": "integer",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userIds": "array",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/message/getByCondition 多条件分页获取
*@apiName 接口名209
*@apiGroup 消息内容管理接口
*@apiParam {array} userIds 发送指定用户id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} content 内容[非必填].
*@apiParam {string} type 消息类型[非必填].
*@apiParam {boolean} createSend 新创建账号也推送[非必填].
*@apiParam {integer} range 发送范围[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "content": "string",
*                         "createBy": "string",
*                         "createSend": "boolean",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "range": "integer",
*                         "title": "string",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userIds": "array",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/message/share 微信分享信息
*@apiName 接口名210
*@apiGroup 消息内容管理接口
*@apiParam {array} userIds 发送指定用户id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} content 内容[非必填].
*@apiParam {string} type 消息类型[非必填].
*@apiParam {boolean} createSend 新创建账号也推送[非必填].
*@apiParam {integer} range 发送范围[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/messageSend/delByIds 批量通过id删除
*@apiName 接口名211
*@apiGroup 消息发送管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/messageSend/get/{id} 通过id获取
*@apiName 接口名212
*@apiGroup 消息发送管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "messageId": "string",
*               "nickname": "string",
*               "status": "integer",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*               "username": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/messageSend/getAll 获取全部数据
*@apiName 接口名213
*@apiGroup 消息发送管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "content": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "messageId": "string",
*                    "nickname": "string",
*                    "status": "integer",
*                    "title": "string",
*                    "type": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "userId": "string",
*                    "username": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/messageSend/getByCondition 多条件分页获取
*@apiName 接口名214
*@apiGroup 消息发送管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} messageId 关联消息id[非必填].
*@apiParam {string} userId 关联用户id[非必填].
*@apiParam {integer} status 状态 0默认未读 1已读 2回收站[非必填].
*@apiParam {string} username 发送登录名[非必填].
*@apiParam {string} nickname 发送用户名[非必填].
*@apiParam {string} title 消息标题[非必填].
*@apiParam {string} content 消息内容[非必填].
*@apiParam {string} type 消息类型[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "content": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "messageId": "string",
*                         "nickname": "string",
*                         "status": "integer",
*                         "title": "string",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "string",
*                         "username": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/messageSend/getByPage 分页获取
*@apiName 接口名215
*@apiGroup 消息发送管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "content": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "messageId": "string",
*                         "nickname": "string",
*                         "status": "integer",
*                         "title": "string",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "string",
*                         "username": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/messageSend/save 保存数据
*@apiName 接口名216
*@apiGroup 消息发送管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} messageId 关联消息id[非必填].
*@apiParam {string} userId 关联用户id[非必填].
*@apiParam {integer} status 状态 0默认未读 1已读 2回收站[非必填].
*@apiParam {string} username 发送登录名[非必填].
*@apiParam {string} nickname 发送用户名[非必填].
*@apiParam {string} title 消息标题[非必填].
*@apiParam {string} content 消息内容[非必填].
*@apiParam {string} type 消息类型[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "messageId": "string",
*               "nickname": "string",
*               "status": "integer",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*               "username": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/messageSend/update 更新数据
*@apiName 接口名217
*@apiGroup 消息发送管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} messageId 关联消息id[非必填].
*@apiParam {string} userId 关联用户id[非必填].
*@apiParam {integer} status 状态 0默认未读 1已读 2回收站[非必填].
*@apiParam {string} username 发送登录名[非必填].
*@apiParam {string} nickname 发送用户名[非必填].
*@apiParam {string} title 消息标题[非必填].
*@apiParam {string} content 消息内容[非必填].
*@apiParam {string} type 消息类型[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "messageId": "string",
*               "nickname": "string",
*               "status": "integer",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*               "username": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/module/delByIds 批量通过id删除
*@apiName 接口名218
*@apiGroup 模块管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/module/get/{id} 通过id获取
*@apiName 接口名219
*@apiGroup 模块管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "name": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/module/getAll 获取全部数据
*@apiName 接口名220
*@apiGroup 模块管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "name": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/module/getByCondition 多条件分页获取
*@apiName 接口名221
*@apiGroup 模块管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 模块名称[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "name": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/module/getByPage 分页获取
*@apiName 接口名222
*@apiGroup 模块管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "name": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/module/save 保存数据
*@apiName 接口名223
*@apiGroup 模块管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 模块名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "name": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/module/update 更新数据
*@apiName 接口名224
*@apiGroup 模块管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 模块名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "name": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/newBlock/delByIds 批量通过id删除
*@apiName 接口名225
*@apiGroup 模块表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/newBlock/find 通过id获取
*@apiName 接口名226
*@apiGroup 模块表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "id": "string",
*                    "name": "string",
*                    "sphinxQuery": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/newBlock/get/{id} 通过id获取
*@apiName 接口名227
*@apiGroup 模块表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "string",
*               "name": "string",
*               "sphinxQuery": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/newBlock/getAll 获取全部数据
*@apiName 接口名228
*@apiGroup 模块表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "id": "string",
*                    "name": "string",
*                    "sphinxQuery": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/newBlock/getByCondition 多条件分页获取
*@apiName 接口名229
*@apiGroup 模块表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} name description[非必填].
*@apiParam {string} sphinxQuery 关键词[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "string",
*                         "name": "string",
*                         "sphinxQuery": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/newBlock/getByPage 分页获取
*@apiName 接口名230
*@apiGroup 模块表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "string",
*                         "name": "string",
*                         "sphinxQuery": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/newBlock/save 保存数据
*@apiName 接口名231
*@apiGroup 模块表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} name description[非必填].
*@apiParam {string} sphinxQuery 关键词[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "string",
*               "name": "string",
*               "sphinxQuery": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/newBlock/update 更新数据
*@apiName 接口名232
*@apiGroup 模块表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} name description[非必填].
*@apiParam {string} sphinxQuery 关键词[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "string",
*               "name": "string",
*               "sphinxQuery": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/news/delByIds 批量通过id删除
*@apiName 接口名233
*@apiGroup 新闻管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/news/get/{id} 通过id获取
*@apiName 接口名234
*@apiGroup 新闻管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/news/getAll 获取全部数据
*@apiName 接口名235
*@apiGroup 新闻管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "content": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "title": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/news/getByCondition 多条件分页获取
*@apiName 接口名236
*@apiGroup 新闻管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} content 正文[非必填].
*@apiParam {integer} type 类型[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "content": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "title": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/news/getByPage 分页获取
*@apiName 接口名237
*@apiGroup 新闻管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "content": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "title": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/news/save 保存数据
*@apiName 接口名238
*@apiGroup 新闻管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} content 正文[非必填].
*@apiParam {integer} type 类型[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/news/update 更新数据
*@apiName 接口名239
*@apiGroup 新闻管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} content 正文[非必填].
*@apiParam {integer} type 类型[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/oauth2/authorize 认证获取code
*@apiName 接口名240
*@apiGroup OAuth2认证接口
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} client_id 客户端id[非必填].
*@apiParam {string} redirect_uri 成功授权后回调地址[非必填].
*@apiParam {string} response_type 授权类型为code[非必填].
*@apiParam {string} state 客户端状态值[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/oauth2/authorized 已认证过获取code
*@apiName 接口名241
*@apiGroup OAuth2认证接口
*@apiParam {string} username 用户名[非必填].
*@apiParam {string} client_id 客户端id[非必填].
*@apiParam {string} redirect_uri 成功授权后回调地址[非必填].
*@apiParam {string} state 客户端状态值[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/oauth2/token 获取accessToken令牌
*@apiName 接口名242
*@apiGroup OAuth2认证接口
*@apiParam {string} grant_type 授权类型[非必填].
*@apiParam {string} client_id 客户端id[非必填].
*@apiParam {string} client_secret 客户端秘钥[非必填].
*@apiParam {string} code 认证返回的code[非必填].
*@apiParam {string} refresh_token 刷新token[非必填].
*@apiParam {string} redirect_uri 成功授权后回调地址[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/oauth2/user 获取用户信息
*@apiName 接口名243
*@apiGroup OAuth2认证接口
*@apiParam {string} access_token 令牌[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/order/cancel/{orderId} 订单取消
*@apiName 接口名244
*@apiGroup 订单管理接口
*@apiParam {integer} orderId orderId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/order/delByIds 批量通过id删除
*@apiName 接口名245
*@apiGroup 订单管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/order/get/{id} 订单详情页
*@apiName 接口名246
*@apiGroup 订单管理接口
*@apiParam {integer} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "buyerComment": "boolean",
*               "buyerMessage": "string",
*               "buyerNick": "string",
*               "closeTime": "string",
*               "consignTime": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "duration": "integer",
*               "endTime": "string",
*               "id": "integer",
*               "payment": "number",
*               "paymentTime": "string",
*               "paymentType": "integer",
*               "picPath": "string",
*               "postFee": "number",
*               "productId": "integer",
*               "sellPoint": "string",
*               "shippingCode": "string",
*               "shippingName": "string",
*               "status": "integer",
*               "title": "string",
*               "totalFee": "number",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/order/getAll 获取全部数据
*@apiName 接口名247
*@apiGroup 订单管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "buyerComment": "boolean",
*                    "buyerMessage": "string",
*                    "buyerNick": "string",
*                    "closeTime": "string",
*                    "consignTime": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "duration": "integer",
*                    "endTime": "string",
*                    "id": "integer",
*                    "payment": "number",
*                    "paymentTime": "string",
*                    "paymentType": "integer",
*                    "picPath": "string",
*                    "postFee": "number",
*                    "productId": "integer",
*                    "sellPoint": "string",
*                    "shippingCode": "string",
*                    "shippingName": "string",
*                    "status": "integer",
*                    "title": "string",
*                    "totalFee": "number",
*                    "updateTime": "string",
*                    "url": "string",
*                    "userId": "integer",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/order/getByCondition 多条件分页获取
*@apiName 接口名248
*@apiGroup 订单管理接口
*@apiParam {integer} id 订单id[非必填].
*@apiParam {number} payment 实付金额[非必填].
*@apiParam {integer} paymentType 支付类型 1在线支付 2货到付款[非必填].
*@apiParam {number} postFee 邮费[非必填].
*@apiParam {integer} status 状态 0未付款 1已付款 2已取消[非必填].
*@apiParam {string} createTime 订单创建时间[非必填].
*@apiParam {string} updateTime 订单更新时间[非必填].
*@apiParam {string} paymentTime 付款时间[非必填].
*@apiParam {string} consignTime 发货时间[非必填].
*@apiParam {string} endTime 交易完成时间[非必填].
*@apiParam {string} closeTime 交易关闭时间[非必填].
*@apiParam {string} shippingName 物流名称[非必填].
*@apiParam {string} shippingCode 物流单号[非必填].
*@apiParam {integer} userId 用户id[非必填].
*@apiParam {string} buyerMessage 买家留言[非必填].
*@apiParam {string} buyerNick 买家昵称[非必填].
*@apiParam {boolean} buyerComment 买家是否已经评价[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} productId 商品id[非必填].
*@apiParam {string} title 商品标题[非必填].
*@apiParam {number} totalFee 商品总金额[非必填].
*@apiParam {integer} duration 有效期　单位：月 默认12[非必填].
*@apiParam {string} picPath 商品图片地址[非必填].
*@apiParam {string} sellPoint 商品卖点[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "buyerComment": "boolean",
*                         "buyerMessage": "string",
*                         "buyerNick": "string",
*                         "closeTime": "string",
*                         "consignTime": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "duration": "integer",
*                         "endTime": "string",
*                         "id": "integer",
*                         "payment": "number",
*                         "paymentTime": "string",
*                         "paymentType": "integer",
*                         "picPath": "string",
*                         "postFee": "number",
*                         "productId": "integer",
*                         "sellPoint": "string",
*                         "shippingCode": "string",
*                         "shippingName": "string",
*                         "status": "integer",
*                         "title": "string",
*                         "totalFee": "number",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/order/getByPage 分页获取
*@apiName 接口名249
*@apiGroup 订单管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "buyerComment": "boolean",
*                         "buyerMessage": "string",
*                         "buyerNick": "string",
*                         "closeTime": "string",
*                         "consignTime": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "duration": "integer",
*                         "endTime": "string",
*                         "id": "integer",
*                         "payment": "number",
*                         "paymentTime": "string",
*                         "paymentType": "integer",
*                         "picPath": "string",
*                         "postFee": "number",
*                         "productId": "integer",
*                         "sellPoint": "string",
*                         "shippingCode": "string",
*                         "shippingName": "string",
*                         "status": "integer",
*                         "title": "string",
*                         "totalFee": "number",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/order/save 保存数据
*@apiName 接口名250
*@apiGroup 订单管理接口
*@apiParam {integer} id 订单id[非必填].
*@apiParam {number} payment 实付金额[非必填].
*@apiParam {integer} paymentType 支付类型 1在线支付 2货到付款[非必填].
*@apiParam {number} postFee 邮费[非必填].
*@apiParam {integer} status 状态 0未付款 1已付款 2已取消[非必填].
*@apiParam {string} createTime 订单创建时间[非必填].
*@apiParam {string} updateTime 订单更新时间[非必填].
*@apiParam {string} paymentTime 付款时间[非必填].
*@apiParam {string} consignTime 发货时间[非必填].
*@apiParam {string} endTime 交易完成时间[非必填].
*@apiParam {string} closeTime 交易关闭时间[非必填].
*@apiParam {string} shippingName 物流名称[非必填].
*@apiParam {string} shippingCode 物流单号[非必填].
*@apiParam {integer} userId 用户id[非必填].
*@apiParam {string} buyerMessage 买家留言[非必填].
*@apiParam {string} buyerNick 买家昵称[非必填].
*@apiParam {boolean} buyerComment 买家是否已经评价[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} productId 商品id[非必填].
*@apiParam {string} title 商品标题[非必填].
*@apiParam {number} totalFee 商品总金额[非必填].
*@apiParam {integer} duration 有效期　单位：月 默认12[非必填].
*@apiParam {string} picPath 商品图片地址[非必填].
*@apiParam {string} sellPoint 商品卖点[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "buyerComment": "boolean",
*               "buyerMessage": "string",
*               "buyerNick": "string",
*               "closeTime": "string",
*               "consignTime": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "duration": "integer",
*               "endTime": "string",
*               "id": "integer",
*               "payment": "number",
*               "paymentTime": "string",
*               "paymentType": "integer",
*               "picPath": "string",
*               "postFee": "number",
*               "productId": "integer",
*               "sellPoint": "string",
*               "shippingCode": "string",
*               "shippingName": "string",
*               "status": "integer",
*               "title": "string",
*               "totalFee": "number",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/order/update 更新数据
*@apiName 接口名251
*@apiGroup 订单管理接口
*@apiParam {integer} id 订单id[非必填].
*@apiParam {number} payment 实付金额[非必填].
*@apiParam {integer} paymentType 支付类型 1在线支付 2货到付款[非必填].
*@apiParam {number} postFee 邮费[非必填].
*@apiParam {integer} status 状态 0未付款 1已付款 2已取消[非必填].
*@apiParam {string} createTime 订单创建时间[非必填].
*@apiParam {string} updateTime 订单更新时间[非必填].
*@apiParam {string} paymentTime 付款时间[非必填].
*@apiParam {string} consignTime 发货时间[非必填].
*@apiParam {string} endTime 交易完成时间[非必填].
*@apiParam {string} closeTime 交易关闭时间[非必填].
*@apiParam {string} shippingName 物流名称[非必填].
*@apiParam {string} shippingCode 物流单号[非必填].
*@apiParam {integer} userId 用户id[非必填].
*@apiParam {string} buyerMessage 买家留言[非必填].
*@apiParam {string} buyerNick 买家昵称[非必填].
*@apiParam {boolean} buyerComment 买家是否已经评价[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} productId 商品id[非必填].
*@apiParam {string} title 商品标题[非必填].
*@apiParam {number} totalFee 商品总金额[非必填].
*@apiParam {integer} duration 有效期　单位：月 默认12[非必填].
*@apiParam {string} picPath 商品图片地址[非必填].
*@apiParam {string} sellPoint 商品卖点[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "buyerComment": "boolean",
*               "buyerMessage": "string",
*               "buyerNick": "string",
*               "closeTime": "string",
*               "consignTime": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "duration": "integer",
*               "endTime": "string",
*               "id": "integer",
*               "payment": "number",
*               "paymentTime": "string",
*               "paymentType": "integer",
*               "picPath": "string",
*               "postFee": "number",
*               "productId": "integer",
*               "sellPoint": "string",
*               "shippingCode": "string",
*               "shippingName": "string",
*               "status": "integer",
*               "title": "string",
*               "totalFee": "number",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/orderItem/delByIds 批量通过id删除
*@apiName 接口名252
*@apiGroup 订单详情管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/orderItem/get/{id} 订单详情页
*@apiName 接口名253
*@apiGroup 订单详情管理接口
*@apiParam {integer} id id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createTime": "string",
*               "duration": "integer",
*               "id": "integer",
*               "itemId": "integer",
*               "num": "integer",
*               "orderId": "integer",
*               "picPath": "string",
*               "price": "number",
*               "status": "integer",
*               "title": "string",
*               "totalFee": "number",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/orderItem/getAll 获取全部数据
*@apiName 接口名254
*@apiGroup 订单详情管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createTime": "string",
*                    "duration": "integer",
*                    "id": "integer",
*                    "itemId": "integer",
*                    "num": "integer",
*                    "orderId": "integer",
*                    "picPath": "string",
*                    "price": "number",
*                    "status": "integer",
*                    "title": "string",
*                    "totalFee": "number",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/orderItem/getByCondition 多条件分页获取
*@apiName 接口名255
*@apiGroup 订单详情管理接口
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {integer} itemId 商品id[非必填].
*@apiParam {integer} orderId 订单id[非必填].
*@apiParam {integer} num 商品购买数量[非必填].
*@apiParam {string} title 商品标题[非必填].
*@apiParam {integer} duration 有效期　单位：月 默认12[非必填].
*@apiParam {number} price 商品单价[非必填].
*@apiParam {number} totalFee 商品总金额[非必填].
*@apiParam {string} picPath 商品图片地址[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {integer} status 订单状态[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createTime": "string",
*                         "duration": "integer",
*                         "id": "integer",
*                         "itemId": "integer",
*                         "num": "integer",
*                         "orderId": "integer",
*                         "picPath": "string",
*                         "price": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "totalFee": "number",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/orderItem/getByPage 分页获取
*@apiName 接口名256
*@apiGroup 订单详情管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createTime": "string",
*                         "duration": "integer",
*                         "id": "integer",
*                         "itemId": "integer",
*                         "num": "integer",
*                         "orderId": "integer",
*                         "picPath": "string",
*                         "price": "number",
*                         "status": "integer",
*                         "title": "string",
*                         "totalFee": "number",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/orderItem/save 保存数据
*@apiName 接口名257
*@apiGroup 订单详情管理接口
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {integer} itemId 商品id[非必填].
*@apiParam {integer} orderId 订单id[非必填].
*@apiParam {integer} num 商品购买数量[非必填].
*@apiParam {string} title 商品标题[非必填].
*@apiParam {integer} duration 有效期　单位：月 默认12[非必填].
*@apiParam {number} price 商品单价[非必填].
*@apiParam {number} totalFee 商品总金额[非必填].
*@apiParam {string} picPath 商品图片地址[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {integer} status 订单状态[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createTime": "string",
*               "duration": "integer",
*               "id": "integer",
*               "itemId": "integer",
*               "num": "integer",
*               "orderId": "integer",
*               "picPath": "string",
*               "price": "number",
*               "status": "integer",
*               "title": "string",
*               "totalFee": "number",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/orderItem/update 更新数据
*@apiName 接口名258
*@apiGroup 订单详情管理接口
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {integer} itemId 商品id[非必填].
*@apiParam {integer} orderId 订单id[非必填].
*@apiParam {integer} num 商品购买数量[非必填].
*@apiParam {string} title 商品标题[非必填].
*@apiParam {integer} duration 有效期　单位：月 默认12[非必填].
*@apiParam {number} price 商品单价[非必填].
*@apiParam {number} totalFee 商品总金额[非必填].
*@apiParam {string} picPath 商品图片地址[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {integer} status 订单状态[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createTime": "string",
*               "duration": "integer",
*               "id": "integer",
*               "itemId": "integer",
*               "num": "integer",
*               "orderId": "integer",
*               "picPath": "string",
*               "price": "number",
*               "status": "integer",
*               "title": "string",
*               "totalFee": "number",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/pay/alipay 支付宝支付
*@apiName 接口名259
*@apiGroup 支付管理接口
*@apiParam {string} orderId orderId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/pay/alipay/notify 支付宝异步通知
*@apiName 接口名260
*@apiGroup 支付管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/pay/alipay/return 支付宝同步通知
*@apiName 接口名261
*@apiGroup 支付管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "empty": "boolean",
*          "model": "object",
*          "modelMap": "object",
*          "reference": "boolean",
*          "status": "string",
*          "view": {
*               "contentType": "string",
*          },
*          "viewName": "string",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/permission/add 添加
*@apiName 接口名262
*@apiGroup 菜单-权限管理接口
*@apiParam {array} permTypes 页面拥有的权限类型[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 菜单/权限名称[非必填].
*@apiParam {boolean} showAlways 始终显示 默认是[非必填].
*@apiParam {integer} level 层级[非必填].
*@apiParam {integer} type 类型 -1顶部菜单 0页面 1具体操作[非必填].
*@apiParam {string} title 菜单标题[非必填].
*@apiParam {string} path 页面路径/资源链接url[非必填].
*@apiParam {string} component 前端组件[非必填].
*@apiParam {string} icon 图标[非必填].
*@apiParam {string} buttonType 按钮权限类型[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {string} description 说明备注[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} url 网页链接[非必填].
*@apiParam {boolean} expand 节点展开 前端所需[非必填].
*@apiParam {boolean} checked 是否勾选 前端所需[非必填].
*@apiParam {boolean} selected 是否选中 前端所需[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "buttonType": "string",
*               "checked": "boolean",
*               "children": "array",
*               "component": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "expand": "boolean",
*               "icon": "string",
*               "id": "string",
*               "level": "integer",
*               "name": "string",
*               "parentId": "string",
*               "path": "string",
*               "permTypes": "array",
*               "selected": "boolean",
*               "showAlways": "boolean",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/permission/delByIds 批量通过id删除
*@apiName 接口名263
*@apiGroup 菜单-权限管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/permission/edit 编辑
*@apiName 接口名264
*@apiGroup 菜单-权限管理接口
*@apiParam {array} permTypes 页面拥有的权限类型[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 菜单/权限名称[非必填].
*@apiParam {boolean} showAlways 始终显示 默认是[非必填].
*@apiParam {integer} level 层级[非必填].
*@apiParam {integer} type 类型 -1顶部菜单 0页面 1具体操作[非必填].
*@apiParam {string} title 菜单标题[非必填].
*@apiParam {string} path 页面路径/资源链接url[非必填].
*@apiParam {string} component 前端组件[非必填].
*@apiParam {string} icon 图标[非必填].
*@apiParam {string} buttonType 按钮权限类型[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {string} description 说明备注[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} url 网页链接[非必填].
*@apiParam {boolean} expand 节点展开 前端所需[非必填].
*@apiParam {boolean} checked 是否勾选 前端所需[非必填].
*@apiParam {boolean} selected 是否选中 前端所需[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "buttonType": "string",
*               "checked": "boolean",
*               "children": "array",
*               "component": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "expand": "boolean",
*               "icon": "string",
*               "id": "string",
*               "level": "integer",
*               "name": "string",
*               "parentId": "string",
*               "path": "string",
*               "permTypes": "array",
*               "selected": "boolean",
*               "showAlways": "boolean",
*               "sortOrder": "number",
*               "status": "integer",
*               "title": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/permission/getAllList 获取权限菜单树
*@apiName 接口名265
*@apiGroup 菜单-权限管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "array",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/permission/getMenuList 获取用户页面菜单数据
*@apiName 接口名266
*@apiGroup 菜单-权限管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "array",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/permission/search 搜索菜单
*@apiName 接口名267
*@apiGroup 菜单-权限管理接口
*@apiParam {string} title title[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "array",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/product/delByIds 批量通过id删除
*@apiName 接口名268
*@apiGroup 产品表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/product/get/{id} 通过id获取
*@apiName 接口名269
*@apiGroup 产品表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "channelId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "created": "string",
*               "delFlag": "integer",
*               "duration": "string",
*               "id": "string",
*               "image": "string",
*               "price": "string",
*               "sellPoint": "string",
*               "status": "integer",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "updated": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/product/getAll 获取全部数据
*@apiName 接口名270
*@apiGroup 产品表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "channelId": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "created": "string",
*                    "delFlag": "integer",
*                    "duration": "string",
*                    "id": "string",
*                    "image": "string",
*                    "price": "string",
*                    "sellPoint": "string",
*                    "status": "integer",
*                    "title": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "updated": "string",
*                    "url": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/product/getByCondition 多条件分页获取
*@apiName 接口名271
*@apiGroup 产品表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 名称[非必填].
*@apiParam {string} sellPoint 卖点[非必填].
*@apiParam {string} price 价格[非必填].
*@apiParam {string} image 图片[非必填].
*@apiParam {string} channelId 频道ID[非必填].
*@apiParam {string} duration 有效期[非必填].
*@apiParam {integer} status 商品状态 1正常 0下架[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiParam {string} created 创建时间[非必填].
*@apiParam {string} updated 更新时间[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "channelId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "created": "string",
*                         "delFlag": "integer",
*                         "duration": "string",
*                         "id": "string",
*                         "image": "string",
*                         "price": "string",
*                         "sellPoint": "string",
*                         "status": "integer",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "updated": "string",
*                         "url": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/product/getByPage 分页获取
*@apiName 接口名272
*@apiGroup 产品表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "channelId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "created": "string",
*                         "delFlag": "integer",
*                         "duration": "string",
*                         "id": "string",
*                         "image": "string",
*                         "price": "string",
*                         "sellPoint": "string",
*                         "status": "integer",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "updated": "string",
*                         "url": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/product/save 保存数据
*@apiName 接口名273
*@apiGroup 产品表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 名称[非必填].
*@apiParam {string} sellPoint 卖点[非必填].
*@apiParam {string} price 价格[非必填].
*@apiParam {string} image 图片[非必填].
*@apiParam {string} channelId 频道ID[非必填].
*@apiParam {string} duration 有效期[非必填].
*@apiParam {integer} status 商品状态 1正常 0下架[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiParam {string} created 创建时间[非必填].
*@apiParam {string} updated 更新时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "channelId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "created": "string",
*               "delFlag": "integer",
*               "duration": "string",
*               "id": "string",
*               "image": "string",
*               "price": "string",
*               "sellPoint": "string",
*               "status": "integer",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "updated": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/product/update 更新数据
*@apiName 接口名274
*@apiGroup 产品表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 名称[非必填].
*@apiParam {string} sellPoint 卖点[非必填].
*@apiParam {string} price 价格[非必填].
*@apiParam {string} image 图片[非必填].
*@apiParam {string} channelId 频道ID[非必填].
*@apiParam {string} duration 有效期[非必填].
*@apiParam {integer} status 商品状态 1正常 0下架[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiParam {string} created 创建时间[非必填].
*@apiParam {string} updated 更新时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "channelId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "created": "string",
*               "delFlag": "integer",
*               "duration": "string",
*               "id": "string",
*               "image": "string",
*               "price": "string",
*               "sellPoint": "string",
*               "status": "integer",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "updated": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/productKeywords/delByIds 批量通过id删除
*@apiName 接口名275
*@apiGroup 产品关键词表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/productKeywords/get/{id} 通过id获取
*@apiName 接口名276
*@apiGroup 产品关键词表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "categoryId": "integer",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "pkeywords": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/productKeywords/getAll 获取全部数据
*@apiName 接口名277
*@apiGroup 产品关键词表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "categoryId": "integer",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "pkeywords": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/productKeywords/getByCondition 多条件分页获取
*@apiName 接口名278
*@apiGroup 产品关键词表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} categoryId description[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "categoryId": "integer",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "pkeywords": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/productKeywords/getByPage 分页获取
*@apiName 接口名279
*@apiGroup 产品关键词表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "categoryId": "integer",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "pkeywords": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/productKeywords/save 保存数据
*@apiName 接口名280
*@apiGroup 产品关键词表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} categoryId description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "categoryId": "integer",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "pkeywords": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/productKeywords/update 更新数据
*@apiName 接口名281
*@apiGroup 产品关键词表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} categoryId description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "categoryId": "integer",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "pkeywords": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/project/change 状态变更
*@apiName 接口名282
*@apiGroup 项目管理接口
*@apiParam {string} id 项目id[非必填].
*@apiParam {integer} status 项目状态[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/project/delByIds 批量通过id删除
*@apiName 接口名283
*@apiGroup 项目管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/project/get/{id} 项目详情
*@apiName 接口名284
*@apiGroup 项目管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "acontact": "string",
*               "address": "string",
*               "aemail": "string",
*               "aparty": "string",
*               "aphone": "string",
*               "apost": "string",
*               "aqq": "string",
*               "area": "string",
*               "areaId": "string",
*               "asex": "string",
*               "awechat": "string",
*               "company": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "endTime": "string",
*               "id": "string",
*               "investMoney": "string",
*               "investSource": "string",
*               "manager": "string",
*               "name": "string",
*               "period": "string",
*               "phase": "string",
*               "startTime": "string",
*               "status": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/project/getAll 获取全部数据
*@apiName 接口名285
*@apiGroup 项目管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "acontact": "string",
*                    "address": "string",
*                    "aemail": "string",
*                    "aparty": "string",
*                    "aphone": "string",
*                    "apost": "string",
*                    "aqq": "string",
*                    "area": "string",
*                    "areaId": "string",
*                    "asex": "string",
*                    "awechat": "string",
*                    "company": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "description": "string",
*                    "endTime": "string",
*                    "id": "string",
*                    "investMoney": "string",
*                    "investSource": "string",
*                    "manager": "string",
*                    "name": "string",
*                    "period": "string",
*                    "phase": "string",
*                    "startTime": "string",
*                    "status": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/project/getByCondition 多条件分页获取
*@apiName 接口名286
*@apiGroup 项目管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 项目名称[非必填].
*@apiParam {string} description 项目说明[非必填].
*@apiParam {string} manager 负责人[非必填].
*@apiParam {integer} status 项目状态 0 跟进中 1 完成 2放弃[非必填].
*@apiParam {string} period 建设周期[非必填].
*@apiParam {string} phase 进展阶段[非必填].
*@apiParam {string} investSource 资金来源[非必填].
*@apiParam {string} investMoney 投资金额[非必填].
*@apiParam {string} address 详细地址[非必填].
*@apiParam {string} area 项目所在地[非必填].
*@apiParam {string} areaId 地区[非必填].
*@apiParam {string} company 建设单位[非必填].
*@apiParam {string} startTime 开始时间[非必填].
*@apiParam {string} endTime 结束时间[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "acontact": "string",
*                         "address": "string",
*                         "aemail": "string",
*                         "aparty": "string",
*                         "aphone": "string",
*                         "apost": "string",
*                         "aqq": "string",
*                         "area": "string",
*                         "areaId": "string",
*                         "asex": "string",
*                         "awechat": "string",
*                         "company": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "description": "string",
*                         "endTime": "string",
*                         "id": "string",
*                         "investMoney": "string",
*                         "investSource": "string",
*                         "manager": "string",
*                         "name": "string",
*                         "period": "string",
*                         "phase": "string",
*                         "startTime": "string",
*                         "status": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/project/getByPage 分页获取
*@apiName 接口名287
*@apiGroup 项目管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "acontact": "string",
*                         "address": "string",
*                         "aemail": "string",
*                         "aparty": "string",
*                         "aphone": "string",
*                         "apost": "string",
*                         "aqq": "string",
*                         "area": "string",
*                         "areaId": "string",
*                         "asex": "string",
*                         "awechat": "string",
*                         "company": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "description": "string",
*                         "endTime": "string",
*                         "id": "string",
*                         "investMoney": "string",
*                         "investSource": "string",
*                         "manager": "string",
*                         "name": "string",
*                         "period": "string",
*                         "phase": "string",
*                         "startTime": "string",
*                         "status": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/project/save 新建项目
*@apiName 接口名288
*@apiGroup 项目管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 项目名称[非必填].
*@apiParam {string} description 项目说明[非必填].
*@apiParam {string} manager 负责人[非必填].
*@apiParam {integer} status 项目状态 0 跟进中 1 完成 2放弃[非必填].
*@apiParam {string} period 建设周期[非必填].
*@apiParam {string} phase 进展阶段[非必填].
*@apiParam {string} investSource 资金来源[非必填].
*@apiParam {string} investMoney 投资金额[非必填].
*@apiParam {string} address 详细地址[非必填].
*@apiParam {string} area 项目所在地[非必填].
*@apiParam {string} areaId 地区[非必填].
*@apiParam {string} company 建设单位[非必填].
*@apiParam {string} startTime 开始时间[非必填].
*@apiParam {string} endTime 结束时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "acontact": "string",
*               "address": "string",
*               "aemail": "string",
*               "aparty": "string",
*               "aphone": "string",
*               "apost": "string",
*               "aqq": "string",
*               "area": "string",
*               "areaId": "string",
*               "asex": "string",
*               "awechat": "string",
*               "company": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "endTime": "string",
*               "id": "string",
*               "investMoney": "string",
*               "investSource": "string",
*               "manager": "string",
*               "name": "string",
*               "period": "string",
*               "phase": "string",
*               "startTime": "string",
*               "status": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/project/update 更新数据
*@apiName 接口名289
*@apiGroup 项目管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 项目名称[非必填].
*@apiParam {string} description 项目说明[非必填].
*@apiParam {string} manager 负责人[非必填].
*@apiParam {integer} status 项目状态 0 跟进中 1 完成 2放弃[非必填].
*@apiParam {string} period 建设周期[非必填].
*@apiParam {string} phase 进展阶段[非必填].
*@apiParam {string} investSource 资金来源[非必填].
*@apiParam {string} investMoney 投资金额[非必填].
*@apiParam {string} address 详细地址[非必填].
*@apiParam {string} area 项目所在地[非必填].
*@apiParam {string} areaId 地区[非必填].
*@apiParam {string} company 建设单位[非必填].
*@apiParam {string} startTime 开始时间[非必填].
*@apiParam {string} endTime 结束时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "acontact": "string",
*               "address": "string",
*               "aemail": "string",
*               "aparty": "string",
*               "aphone": "string",
*               "apost": "string",
*               "aqq": "string",
*               "area": "string",
*               "areaId": "string",
*               "asex": "string",
*               "awechat": "string",
*               "company": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "description": "string",
*               "endTime": "string",
*               "id": "string",
*               "investMoney": "string",
*               "investSource": "string",
*               "manager": "string",
*               "name": "string",
*               "period": "string",
*               "phase": "string",
*               "startTime": "string",
*               "status": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectContact/delByIds 批量通过id删除
*@apiName 接口名290
*@apiGroup 项目联系人表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectContact/get/{id} 通过id获取
*@apiName 接口名291
*@apiGroup 项目联系人表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "company": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "department": "string",
*               "email": "string",
*               "id": "string",
*               "mobile": "string",
*               "name": "string",
*               "projectId": "string",
*               "sex": "string",
*               "telNumber": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectContact/getAll 获取全部数据
*@apiName 接口名292
*@apiGroup 项目联系人表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "company": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "department": "string",
*                    "email": "string",
*                    "id": "string",
*                    "mobile": "string",
*                    "name": "string",
*                    "projectId": "string",
*                    "sex": "string",
*                    "telNumber": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectContact/getByCondition 多条件分页获取
*@apiName 接口名293
*@apiGroup 项目联系人表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} name 姓名[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} company 公司[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} telNumber 公司座机[非必填].
*@apiParam {string} mobile 手机[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "company": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "department": "string",
*                         "email": "string",
*                         "id": "string",
*                         "mobile": "string",
*                         "name": "string",
*                         "projectId": "string",
*                         "sex": "string",
*                         "telNumber": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectContact/getByPage 分页获取
*@apiName 接口名294
*@apiGroup 项目联系人表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "company": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "department": "string",
*                         "email": "string",
*                         "id": "string",
*                         "mobile": "string",
*                         "name": "string",
*                         "projectId": "string",
*                         "sex": "string",
*                         "telNumber": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectContact/save 保存数据
*@apiName 接口名295
*@apiGroup 项目联系人表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} name 姓名[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} company 公司[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} telNumber 公司座机[非必填].
*@apiParam {string} mobile 手机[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "company": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "department": "string",
*               "email": "string",
*               "id": "string",
*               "mobile": "string",
*               "name": "string",
*               "projectId": "string",
*               "sex": "string",
*               "telNumber": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/projectContact/update 更新数据
*@apiName 接口名296
*@apiGroup 项目联系人表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} name 姓名[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} company 公司[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} telNumber 公司座机[非必填].
*@apiParam {string} mobile 手机[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "company": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "department": "string",
*               "email": "string",
*               "id": "string",
*               "mobile": "string",
*               "name": "string",
*               "projectId": "string",
*               "sex": "string",
*               "telNumber": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectFile/delByIds 批量通过id删除
*@apiName 接口名297
*@apiGroup 项目附件表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectFile/delete 文件删除
*@apiName 接口名298
*@apiGroup 项目附件表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectFile/get/{id} 通过id获取
*@apiName 接口名299
*@apiGroup 项目附件表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "fkey": "string",
*               "id": "string",
*               "location": "integer",
*               "name": "string",
*               "nickname": "string",
*               "projectId": "string",
*               "size": "integer",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectFile/getAll 获取全部数据
*@apiName 接口名300
*@apiGroup 项目附件表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "fkey": "string",
*                    "id": "string",
*                    "location": "integer",
*                    "name": "string",
*                    "nickname": "string",
*                    "projectId": "string",
*                    "size": "integer",
*                    "type": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectFile/getByCondition 多条件分页获取
*@apiName 接口名301
*@apiGroup 项目附件表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {integer} location 存储位置 0本地 1七牛 2阿里 3腾讯 4MinIO[非必填].
*@apiParam {integer} size 大小[非必填].
*@apiParam {string} type 文件类型[非必填].
*@apiParam {string} url 路径[非必填].
*@apiParam {string} nickname 上传者用户名[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "fkey": "string",
*                         "id": "string",
*                         "location": "integer",
*                         "name": "string",
*                         "nickname": "string",
*                         "projectId": "string",
*                         "size": "integer",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectFile/getByPage 分页获取
*@apiName 接口名302
*@apiGroup 项目附件表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "fkey": "string",
*                         "id": "string",
*                         "location": "integer",
*                         "name": "string",
*                         "nickname": "string",
*                         "projectId": "string",
*                         "size": "integer",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectFile/save 保存数据
*@apiName 接口名303
*@apiGroup 项目附件表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {integer} location 存储位置 0本地 1七牛 2阿里 3腾讯 4MinIO[非必填].
*@apiParam {integer} size 大小[非必填].
*@apiParam {string} type 文件类型[非必填].
*@apiParam {string} url 路径[非必填].
*@apiParam {string} nickname 上传者用户名[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "fkey": "string",
*               "id": "string",
*               "location": "integer",
*               "name": "string",
*               "nickname": "string",
*               "projectId": "string",
*               "size": "integer",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/projectFile/update 更新数据
*@apiName 接口名304
*@apiGroup 项目附件表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {integer} location 存储位置 0本地 1七牛 2阿里 3腾讯 4MinIO[非必填].
*@apiParam {integer} size 大小[非必填].
*@apiParam {string} type 文件类型[非必填].
*@apiParam {string} url 路径[非必填].
*@apiParam {string} nickname 上传者用户名[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "fkey": "string",
*               "id": "string",
*               "location": "integer",
*               "name": "string",
*               "nickname": "string",
*               "projectId": "string",
*               "size": "integer",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectFile/upload 文件上传
*@apiName 接口名305
*@apiGroup 项目附件表管理接口
*@apiParam {file} file file[非必填].
*@apiParam {string} base64 base64[非必填].
*@apiParam {string} projectId projectId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectInfo/delByIds 批量通过id删除
*@apiName 接口名306
*@apiGroup 项目公告关系表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectInfo/get/{id} 通过id获取
*@apiName 接口名307
*@apiGroup 项目公告关系表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoId": "string",
*               "projectId": "string",
*               "publishDate": "string",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectInfo/getAll 获取全部数据
*@apiName 接口名308
*@apiGroup 项目公告关系表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "area": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "infoId": "string",
*                    "projectId": "string",
*                    "publishDate": "string",
*                    "title": "string",
*                    "type": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectInfo/getByCondition 多条件分页获取
*@apiName 接口名309
*@apiGroup 项目公告关系表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} infoId 公告ID[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} type 公告类型[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} url 链接[非必填].
*@apiParam {string} publishDate 发布日期[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "infoId": "string",
*                         "projectId": "string",
*                         "publishDate": "string",
*                         "title": "string",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectInfo/getByPage 分页获取
*@apiName 接口名310
*@apiGroup 项目公告关系表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "infoId": "string",
*                         "projectId": "string",
*                         "publishDate": "string",
*                         "title": "string",
*                         "type": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectInfo/getByProjectId 多条件分页获取
*@apiName 接口名311
*@apiGroup 项目公告关系表管理接口
*@apiParam {string} projectId projectId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "area": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "infoId": "string",
*                    "projectId": "string",
*                    "publishDate": "string",
*                    "title": "string",
*                    "type": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectInfo/save 保存数据
*@apiName 接口名312
*@apiGroup 项目公告关系表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} infoId 公告ID[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} type 公告类型[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} url 链接[非必填].
*@apiParam {string} publishDate 发布日期[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoId": "string",
*               "projectId": "string",
*               "publishDate": "string",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/projectInfo/update 更新数据
*@apiName 接口名313
*@apiGroup 项目公告关系表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} infoId 公告ID[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} type 公告类型[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} url 链接[非必填].
*@apiParam {string} publishDate 发布日期[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoId": "string",
*               "projectId": "string",
*               "publishDate": "string",
*               "title": "string",
*               "type": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectUser/delByIds 批量通过id删除
*@apiName 接口名314
*@apiGroup 项目参与人关系表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectUser/get/{id} 通过id获取
*@apiName 接口名315
*@apiGroup 项目参与人关系表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "projectId": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectUser/getAll 获取全部数据
*@apiName 接口名316
*@apiGroup 项目参与人关系表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "projectId": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "userId": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectUser/getByCondition 多条件分页获取
*@apiName 接口名317
*@apiGroup 项目参与人关系表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {integer} type 用户类型 0创建人 1参与人[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "projectId": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/projectUser/getByPage 分页获取
*@apiName 接口名318
*@apiGroup 项目参与人关系表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "projectId": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/projectUser/save 保存数据
*@apiName 接口名319
*@apiGroup 项目参与人关系表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {integer} type 用户类型 0创建人 1参与人[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "projectId": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/projectUser/update 更新数据
*@apiName 接口名320
*@apiGroup 项目参与人关系表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} projectId 项目ID[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {integer} type 用户类型 0创建人 1参与人[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "projectId": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishContent/delByIds 批量通过id删除
*@apiName 接口名321
*@apiGroup 网站信息正文表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishContent/get/{id} 通过id获取
*@apiName 接口名322
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "description": "string",
*               "id": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishContent/getAll 获取全部数据
*@apiName 接口名323
*@apiGroup 网站信息正文表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "description": "string",
*                    "id": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishContent/getByCondition 多条件分页获取
*@apiName 接口名324
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} description description[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "description": "string",
*                         "id": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishContent/getByPage 分页获取
*@apiName 接口名325
*@apiGroup 网站信息正文表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "description": "string",
*                         "id": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishContent/save 保存数据
*@apiName 接口名326
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} description description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "description": "string",
*               "id": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/publishContent/update 更新数据
*@apiName 接口名327
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} description description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "description": "string",
*               "id": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishInfo/delByIds 批量通过id删除
*@apiName 接口名328
*@apiGroup 网站信息表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishInfo/get/{id} 通过id获取
*@apiName 接口名329
*@apiGroup 网站信息表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "category": "string",
*               "id": "string",
*               "publishDate": "string",
*               "publishEndDate": "string",
*               "tableName": "string",
*               "tableName2": "string",
*               "title": "string",
*               "type": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishInfo/getAll 获取全部数据
*@apiName 接口名330
*@apiGroup 网站信息表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "area": "string",
*                    "category": "string",
*                    "id": "string",
*                    "publishDate": "string",
*                    "publishEndDate": "string",
*                    "tableName": "string",
*                    "tableName2": "string",
*                    "title": "string",
*                    "type": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishInfo/getByCondition 多条件分页获取
*@apiName 接口名331
*@apiGroup 网站信息表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} areaId 地区id[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} categoryId 行业id[非必填].
*@apiParam {string} type 公告类型[非必填].
*@apiParam {string} stringb 招标人[非必填].
*@apiParam {string} publishDate 发布日期称[非必填].
*@apiParam {string} publishEndDate 截止日期[非必填].
*@apiParam {string} tableName 一级分类[非必填].
*@apiParam {string} tableName2 二级分类[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "string",
*                         "category": "string",
*                         "id": "string",
*                         "publishDate": "string",
*                         "publishEndDate": "string",
*                         "tableName": "string",
*                         "tableName2": "string",
*                         "title": "string",
*                         "type": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishInfo/getByPage 分页获取
*@apiName 接口名332
*@apiGroup 网站信息表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "string",
*                         "category": "string",
*                         "id": "string",
*                         "publishDate": "string",
*                         "publishEndDate": "string",
*                         "tableName": "string",
*                         "tableName2": "string",
*                         "title": "string",
*                         "type": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishInfo/save 保存数据
*@apiName 接口名333
*@apiGroup 网站信息表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} areaId 地区id[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} categoryId 行业id[非必填].
*@apiParam {string} type 公告类型[非必填].
*@apiParam {string} stringb 招标人[非必填].
*@apiParam {string} publishDate 发布日期称[非必填].
*@apiParam {string} publishEndDate 截止日期[非必填].
*@apiParam {string} tableName 一级分类[非必填].
*@apiParam {string} tableName2 二级分类[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "category": "string",
*               "id": "string",
*               "publishDate": "string",
*               "publishEndDate": "string",
*               "tableName": "string",
*               "tableName2": "string",
*               "title": "string",
*               "type": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/publishInfo/update 更新数据
*@apiName 接口名334
*@apiGroup 网站信息表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} title 标题[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} areaId 地区id[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} categoryId 行业id[非必填].
*@apiParam {string} type 公告类型[非必填].
*@apiParam {string} stringb 招标人[非必填].
*@apiParam {string} publishDate 发布日期称[非必填].
*@apiParam {string} publishEndDate 截止日期[非必填].
*@apiParam {string} tableName 一级分类[非必填].
*@apiParam {string} tableName2 二级分类[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "category": "string",
*               "id": "string",
*               "publishDate": "string",
*               "publishEndDate": "string",
*               "tableName": "string",
*               "tableName2": "string",
*               "title": "string",
*               "type": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishResult/delByIds 批量通过id删除
*@apiName 接口名335
*@apiGroup 结构化信息结果表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishResult/get/{id} 通过id获取
*@apiName 接口名336
*@apiGroup 结构化信息结果表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "areaId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "deadline": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoType": "string",
*               "keywords": "string",
*               "publishDate": "string",
*               "tenderee": "string",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishResult/getAll 获取全部数据
*@apiName 接口名337
*@apiGroup 结构化信息结果表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "areaId": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "deadline": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "infoType": "string",
*                    "keywords": "string",
*                    "publishDate": "string",
*                    "tenderee": "string",
*                    "title": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishResult/getByCondition 多条件分页获取
*@apiName 接口名338
*@apiGroup 结构化信息结果表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} keywords 关键词，招标内容[非必填].
*@apiParam {string} title 标题，项目名称[非必填].
*@apiParam {string} tenderee 招标人，甲方[非必填].
*@apiParam {string} areaId 地区id[非必填].
*@apiParam {integer} type 公告类型[非必填].
*@apiParam {string} infoType 公告类型，前端展示[非必填].
*@apiParam {string} publishDate 发布日期[非必填].
*@apiParam {string} deadline 截止日期[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "areaId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "deadline": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "infoType": "string",
*                         "keywords": "string",
*                         "publishDate": "string",
*                         "tenderee": "string",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishResult/getByPage 分页获取
*@apiName 接口名339
*@apiGroup 结构化信息结果表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "areaId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "deadline": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "infoType": "string",
*                         "keywords": "string",
*                         "publishDate": "string",
*                         "tenderee": "string",
*                         "title": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishResult/save 保存数据
*@apiName 接口名340
*@apiGroup 结构化信息结果表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} keywords 关键词，招标内容[非必填].
*@apiParam {string} title 标题，项目名称[非必填].
*@apiParam {string} tenderee 招标人，甲方[非必填].
*@apiParam {string} areaId 地区id[非必填].
*@apiParam {integer} type 公告类型[非必填].
*@apiParam {string} infoType 公告类型，前端展示[非必填].
*@apiParam {string} publishDate 发布日期[非必填].
*@apiParam {string} deadline 截止日期[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "areaId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "deadline": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoType": "string",
*               "keywords": "string",
*               "publishDate": "string",
*               "tenderee": "string",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/publishResult/update 更新数据
*@apiName 接口名341
*@apiGroup 结构化信息结果表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} keywords 关键词，招标内容[非必填].
*@apiParam {string} title 标题，项目名称[非必填].
*@apiParam {string} tenderee 招标人，甲方[非必填].
*@apiParam {string} areaId 地区id[非必填].
*@apiParam {integer} type 公告类型[非必填].
*@apiParam {string} infoType 公告类型，前端展示[非必填].
*@apiParam {string} publishDate 发布日期[非必填].
*@apiParam {string} deadline 截止日期[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "areaId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "deadline": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoType": "string",
*               "keywords": "string",
*               "publishDate": "string",
*               "tenderee": "string",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishText/delByIds 批量通过id删除
*@apiName 接口名342
*@apiGroup 网站信息正文表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishText/get/{id} 通过id获取
*@apiName 接口名343
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "description": "string",
*               "id": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishText/getAll 获取全部数据
*@apiName 接口名344
*@apiGroup 网站信息正文表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "description": "string",
*                    "id": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishText/getByCondition 多条件分页获取
*@apiName 接口名345
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} description description[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "description": "string",
*                         "id": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/publishText/getByPage 分页获取
*@apiName 接口名346
*@apiGroup 网站信息正文表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "description": "string",
*                         "id": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/publishText/save 保存数据
*@apiName 接口名347
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} description description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "description": "string",
*               "id": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/publishText/update 更新数据
*@apiName 接口名348
*@apiGroup 网站信息正文表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} description description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "description": "string",
*               "id": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/pvLog/count pv
*@apiName 接口名349
*@apiGroup Pv日志管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/pvLog/delByIds 批量通过id删除
*@apiName 接口名350
*@apiGroup Pv日志管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/pvLog/get/{id} 通过id获取
*@apiName 接口名351
*@apiGroup Pv日志管理接口
*@apiParam {integer} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "disc": "integer",
*               "id": "integer",
*               "infoId": "integer",
*               "ip": "integer",
*               "jsession": "integer",
*               "lastmodify": {
*                    "date": "integer",
*                    "day": "integer",
*                    "hours": "integer",
*                    "minutes": "integer",
*                    "month": "integer",
*                    "nanos": "integer",
*                    "seconds": "integer",
*                    "time": "integer",
*                    "timezoneOffset": "integer",
*                    "year": "integer",
*               },
*               "memberId": "integer",
*               "searchId": "integer",
*               "status": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/pvLog/getAll 获取全部数据
*@apiName 接口名352
*@apiGroup Pv日志管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "disc": "integer",
*                    "id": "integer",
*                    "infoId": "integer",
*                    "ip": "integer",
*                    "jsession": "integer",
*                    "lastmodify": {
*                         "date": "integer",
*                         "day": "integer",
*                         "hours": "integer",
*                         "minutes": "integer",
*                         "month": "integer",
*                         "nanos": "integer",
*                         "seconds": "integer",
*                         "time": "integer",
*                         "timezoneOffset": "integer",
*                         "year": "integer",
*                    },
*                    "memberId": "integer",
*                    "searchId": "integer",
*                    "status": "integer",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/pvLog/getByCondition 多条件分页获取
*@apiName 接口名353
*@apiGroup Pv日志管理接口
*@apiParam {integer} lastmodify.nanos description[非必填].
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {integer} jsession description[非必填].
*@apiParam {integer} memberId 采招网会员ID[非必填].
*@apiParam {integer} ip description[非必填].
*@apiParam {integer} status description[非必填].
*@apiParam {integer} disc description[非必填].
*@apiParam {integer} infoId description[非必填].
*@apiParam {integer} searchId description[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "disc": "integer",
*                         "id": "integer",
*                         "infoId": "integer",
*                         "ip": "integer",
*                         "jsession": "integer",
*                         "lastmodify": {
*                              "date": "integer",
*                              "day": "integer",
*                              "hours": "integer",
*                              "minutes": "integer",
*                              "month": "integer",
*                              "nanos": "integer",
*                              "seconds": "integer",
*                              "time": "integer",
*                              "timezoneOffset": "integer",
*                              "year": "integer",
*                         },
*                         "memberId": "integer",
*                         "searchId": "integer",
*                         "status": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/pvLog/getByPage 分页获取
*@apiName 接口名354
*@apiGroup Pv日志管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "disc": "integer",
*                         "id": "integer",
*                         "infoId": "integer",
*                         "ip": "integer",
*                         "jsession": "integer",
*                         "lastmodify": {
*                              "date": "integer",
*                              "day": "integer",
*                              "hours": "integer",
*                              "minutes": "integer",
*                              "month": "integer",
*                              "nanos": "integer",
*                              "seconds": "integer",
*                              "time": "integer",
*                              "timezoneOffset": "integer",
*                              "year": "integer",
*                         },
*                         "memberId": "integer",
*                         "searchId": "integer",
*                         "status": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/pvLog/save 保存数据
*@apiName 接口名355
*@apiGroup Pv日志管理接口
*@apiParam {integer} lastmodify.nanos description[非必填].
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {integer} jsession description[非必填].
*@apiParam {integer} memberId 采招网会员ID[非必填].
*@apiParam {integer} ip description[非必填].
*@apiParam {integer} status description[非必填].
*@apiParam {integer} disc description[非必填].
*@apiParam {integer} infoId description[非必填].
*@apiParam {integer} searchId description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "disc": "integer",
*               "id": "integer",
*               "infoId": "integer",
*               "ip": "integer",
*               "jsession": "integer",
*               "lastmodify": {
*                    "date": "integer",
*                    "day": "integer",
*                    "hours": "integer",
*                    "minutes": "integer",
*                    "month": "integer",
*                    "nanos": "integer",
*                    "seconds": "integer",
*                    "time": "integer",
*                    "timezoneOffset": "integer",
*                    "year": "integer",
*               },
*               "memberId": "integer",
*               "searchId": "integer",
*               "status": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/pvLog/update 更新数据
*@apiName 接口名356
*@apiGroup Pv日志管理接口
*@apiParam {integer} lastmodify.nanos description[非必填].
*@apiParam {integer} id 唯一标识[非必填].
*@apiParam {integer} jsession description[非必填].
*@apiParam {integer} memberId 采招网会员ID[非必填].
*@apiParam {integer} ip description[非必填].
*@apiParam {integer} status description[非必填].
*@apiParam {integer} disc description[非必填].
*@apiParam {integer} infoId description[非必填].
*@apiParam {integer} searchId description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "disc": "integer",
*               "id": "integer",
*               "infoId": "integer",
*               "ip": "integer",
*               "jsession": "integer",
*               "lastmodify": {
*                    "date": "integer",
*                    "day": "integer",
*                    "hours": "integer",
*                    "minutes": "integer",
*                    "month": "integer",
*                    "nanos": "integer",
*                    "seconds": "integer",
*                    "time": "integer",
*                    "timezoneOffset": "integer",
*                    "year": "integer",
*               },
*               "memberId": "integer",
*               "searchId": "integer",
*               "status": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/quartzJob/add 添加定时任务
*@apiName 接口名357
*@apiGroup 定时任务管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} jobClassName 任务类名[非必填].
*@apiParam {string} cronExpression cron表达式[非必填].
*@apiParam {string} parameter 参数[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {integer} status 状态 0正常 -1停止[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/quartzJob/delByIds 删除定时任务
*@apiName 接口名358
*@apiGroup 定时任务管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/quartzJob/edit 更新定时任务
*@apiName 接口名359
*@apiGroup 定时任务管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} jobClassName 任务类名[非必填].
*@apiParam {string} cronExpression cron表达式[非必填].
*@apiParam {string} parameter 参数[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {integer} status 状态 0正常 -1停止[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/quartzJob/getAllByPage 获取所有定时任务
*@apiName 接口名360
*@apiGroup 定时任务管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "cronExpression": "string",
*                         "delFlag": "integer",
*                         "description": "string",
*                         "id": "string",
*                         "jobClassName": "string",
*                         "parameter": "string",
*                         "status": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/quartzJob/pause 暂停定时任务
*@apiName 接口名361
*@apiGroup 定时任务管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} jobClassName 任务类名[非必填].
*@apiParam {string} cronExpression cron表达式[非必填].
*@apiParam {string} parameter 参数[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {integer} status 状态 0正常 -1停止[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/quartzJob/resume 恢复定时任务
*@apiName 接口名362
*@apiGroup 定时任务管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} jobClassName 任务类名[非必填].
*@apiParam {string} cronExpression cron表达式[非必填].
*@apiParam {string} parameter 参数[非必填].
*@apiParam {string} description 备注[非必填].
*@apiParam {integer} status 状态 0正常 -1停止[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/redis/delAll 全部删除
*@apiName 接口名363
*@apiGroup Redis缓存管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/redis/delByKeys 批量删除
*@apiName 接口名364
*@apiGroup Redis缓存管理接口
*@apiParam {array} keys keys[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/redis/getAllByPage 分页获取全部
*@apiName 接口名365
*@apiGroup Redis缓存管理接口
*@apiParam {string} key key[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "expireTime": "integer",
*                         "key": "string",
*                         "value": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/redis/getByKey/{key} 通过key获取
*@apiName 接口名366
*@apiGroup Redis缓存管理接口
*@apiParam {string} key key[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/redis/getKeySize 获取实时key大小
*@apiName 接口名367
*@apiGroup Redis缓存管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/redis/getMemory 获取实时内存大小
*@apiName 接口名368
*@apiGroup Redis缓存管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/redis/info 获取Redis信息
*@apiName 接口名369
*@apiGroup Redis缓存管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/redis/save 添加或编辑
*@apiName 接口名370
*@apiGroup Redis缓存管理接口
*@apiParam {string} key key[必填].
*@apiParam {string} value value[必填].
*@apiParam {integer} expireTime expireTime[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/relate/delByIds 解绑
*@apiName 接口名371
*@apiGroup 社交账号接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/relate/findByCondition 多条件分页获取
*@apiName 接口名372
*@apiGroup 社交账号接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} openId 社交账号唯一id[非必填].
*@apiParam {integer} platform 社交账号平台 0Github 1QQ 2微信 3微博[非必填].
*@apiParam {string} username 社交账号用户名[非必填].
*@apiParam {string} avatar 头像[非必填].
*@apiParam {string} relateUsername 绑定用户账号[非必填].
*@apiParam {boolean} isRelated 是否绑定[非必填].
*@apiParam {string} nickname 绑定用户名[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/relate/getRelatedInfo/{username} 获取绑定账号信息
*@apiName 接口名373
*@apiGroup 社交账号接口
*@apiParam {string} username username[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "github": "boolean",
*               "githubId": "string",
*               "githubUsername": "string",
*               "qq": "boolean",
*               "qqId": "string",
*               "qqUsername": "string",
*               "wechat": "boolean",
*               "wechatId": "string",
*               "wechatUsername": "string",
*               "weibo": "boolean",
*               "weiboId": "string",
*               "weiboUsername": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/reply/add 添加
*@apiName 接口名374
*@apiGroup 评论回复表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 分类名称[非必填].
*@apiParam {string} commentId 评论id[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/reply/delByIds 批量通过id删除
*@apiName 接口名375
*@apiGroup 评论回复表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/reply/edit 编辑
*@apiName 接口名376
*@apiGroup 评论回复表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} title 分类名称[非必填].
*@apiParam {string} commentId 评论id[非必填].
*@apiParam {string} parentId 父id[非必填].
*@apiParam {string} username 用户名[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/reply/getByParentId/{parentId} 通过id获取
*@apiName 接口名377
*@apiGroup 评论回复表管理接口
*@apiParam {string} parentId parentId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "commentId": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "title": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "username": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/reply/search 名称模糊搜索
*@apiName 接口名378
*@apiGroup 评论回复表管理接口
*@apiParam {string} title title[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "commentId": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "title": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "username": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/role/delByIds 批量通过ids删除
*@apiName 接口名379
*@apiGroup 角色管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/role/edit 更新数据
*@apiName 接口名380
*@apiGroup 角色管理接口
*@apiParam {string} permissions[0].id 唯一标识[非必填].
*@apiParam {string} permissions[0].createBy 创建者[非必填].
*@apiParam {string} permissions[0].createTime 创建时间[非必填].
*@apiParam {string} permissions[0].updateBy 更新者[非必填].
*@apiParam {string} permissions[0].updateTime 更新时间[非必填].
*@apiParam {integer} permissions[0].delFlag 删除标志 默认0[非必填].
*@apiParam {string} permissions[0].roleId 角色id[非必填].
*@apiParam {string} permissions[0].permissionId 权限id[非必填].
*@apiParam {string} departments[0].id 唯一标识[非必填].
*@apiParam {string} departments[0].createBy 创建者[非必填].
*@apiParam {string} departments[0].createTime 创建时间[非必填].
*@apiParam {string} departments[0].updateBy 更新者[非必填].
*@apiParam {string} departments[0].updateTime 更新时间[非必填].
*@apiParam {integer} departments[0].delFlag 删除标志 默认0[非必填].
*@apiParam {string} departments[0].roleId 角色id[非必填].
*@apiParam {string} departments[0].departmentId 部门id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 角色名 以ROLE_开头[非必填].
*@apiParam {boolean} defaultRole 是否为注册默认角色[非必填].
*@apiParam {integer} dataType 数据权限类型 0全部默认 1自定义 2本部门及以下 3本部门 4仅本人[非必填].
*@apiParam {string} description 备注[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "dataType": "integer",
*               "defaultRole": "boolean",
*               "delFlag": "integer",
*               "departments": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "departmentId": "string",
*                         "id": "string",
*                         "roleId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "description": "string",
*               "id": "string",
*               "name": "string",
*               "permissions": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "permissionId": "string",
*                         "roleId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/role/editRoleDep 编辑角色分配数据权限
*@apiName 接口名381
*@apiGroup 角色管理接口
*@apiParam {string} roleId roleId[必填].
*@apiParam {integer} dataType dataType[必填].
*@apiParam {array} depIds depIds[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/role/editRolePerm 编辑角色分配菜单权限
*@apiName 接口名382
*@apiGroup 角色管理接口
*@apiParam {string} roleId roleId[必填].
*@apiParam {array} permIds permIds[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/role/getAllByPage 分页获取角色
*@apiName 接口名383
*@apiGroup 角色管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "dataType": "integer",
*                         "defaultRole": "boolean",
*                         "delFlag": "integer",
*                         "departments": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "departmentId": "string",
*                                   "id": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "description": "string",
*                         "id": "string",
*                         "name": "string",
*                         "permissions": [
*                               {
*                                   "createBy": "string",
*                                   "createTime": "string",
*                                   "delFlag": "integer",
*                                   "id": "string",
*                                   "permissionId": "string",
*                                   "roleId": "string",
*                                   "updateBy": "string",
*                                   "updateTime": "string",
*                              },
*                         ],
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/role/getAllList 获取全部角色
*@apiName 接口名384
*@apiGroup 角色管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/role/save 保存数据
*@apiName 接口名385
*@apiGroup 角色管理接口
*@apiParam {string} permissions[0].id 唯一标识[非必填].
*@apiParam {string} permissions[0].createBy 创建者[非必填].
*@apiParam {string} permissions[0].createTime 创建时间[非必填].
*@apiParam {string} permissions[0].updateBy 更新者[非必填].
*@apiParam {string} permissions[0].updateTime 更新时间[非必填].
*@apiParam {integer} permissions[0].delFlag 删除标志 默认0[非必填].
*@apiParam {string} permissions[0].roleId 角色id[非必填].
*@apiParam {string} permissions[0].permissionId 权限id[非必填].
*@apiParam {string} departments[0].id 唯一标识[非必填].
*@apiParam {string} departments[0].createBy 创建者[非必填].
*@apiParam {string} departments[0].createTime 创建时间[非必填].
*@apiParam {string} departments[0].updateBy 更新者[非必填].
*@apiParam {string} departments[0].updateTime 更新时间[非必填].
*@apiParam {integer} departments[0].delFlag 删除标志 默认0[非必填].
*@apiParam {string} departments[0].roleId 角色id[非必填].
*@apiParam {string} departments[0].departmentId 部门id[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 角色名 以ROLE_开头[非必填].
*@apiParam {boolean} defaultRole 是否为注册默认角色[非必填].
*@apiParam {integer} dataType 数据权限类型 0全部默认 1自定义 2本部门及以下 3本部门 4仅本人[非必填].
*@apiParam {string} description 备注[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "dataType": "integer",
*               "defaultRole": "boolean",
*               "delFlag": "integer",
*               "departments": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "departmentId": "string",
*                         "id": "string",
*                         "roleId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "description": "string",
*               "id": "string",
*               "name": "string",
*               "permissions": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "permissionId": "string",
*                         "roleId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/role/setDefault 设置或取消默认角色
*@apiName 接口名386
*@apiGroup 角色管理接口
*@apiParam {string} id id[必填].
*@apiParam {boolean} isDefault isDefault[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/search/bidSearch 查项目
*@apiName 接口名387
*@apiGroup 开放搜索接口
*@apiParam {string} keyword keyword[必填].
*@apiParam {integer} page page[必填].
*@apiParam {integer} rows rows[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/search/comSearch 查企业
*@apiName 接口名388
*@apiGroup 开放搜索接口
*@apiParam {string} keyword keyword[必填].
*@apiParam {integer} page page[必填].
*@apiParam {integer} rows rows[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/search/nzjSearch 项目信息高级搜索
*@apiName 接口名389
*@apiGroup 开放搜索接口
*@apiParam {string} keyword 关键字[非必填].
*@apiParam {array} table 分类[非必填].
*@apiParam {array} area 地区[非必填].
*@apiParam {array} category1 一级行业[非必填].
*@apiParam {array} category2 二级行业[非必填].
*@apiParam {array} stage 阶段[非必填].
*@apiParam {integer} range 时间范围[非必填].
*@apiParam {string} startTime 开始时间[非必填].
*@apiParam {string} endTime 结束时间[非必填].
*@apiParam {integer} page 页数[非必填].
*@apiParam {integer} rows 行数[非必填].
*@apiParam {integer} type 检索范围[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/search/test 高级搜索测试
*@apiName 接口名390
*@apiGroup 开放搜索接口
*@apiParam {array} keywords keywords[非必填].
*@apiParam {integer} type type[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/search/ztbSearch 招标采购信息搜索
*@apiName 接口名391
*@apiGroup 开放搜索接口
*@apiParam {string} keyword 关键字[非必填].
*@apiParam {array} table 分类[非必填].
*@apiParam {array} area 地区[非必填].
*@apiParam {array} category 行业[非必填].
*@apiParam {integer} range 时间范围[非必填].
*@apiParam {string} startTime 开始时间[非必填].
*@apiParam {string} endTime 结束时间[非必填].
*@apiParam {integer} page 页数[非必填].
*@apiParam {integer} rows 行数[非必填].
*@apiParam {integer} searchRange 检索范围[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/searchGroup/delByIds 批量通过id删除
*@apiName 接口名392
*@apiGroup 搜索组合管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/searchGroup/disable 后台停用订阅
*@apiName 接口名393
*@apiGroup 搜索组合管理接口
*@apiParam {string} groupId 组合id[非必填].
*@apiParam {integer} type 订阅类型[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/searchGroup/enable 后台启用订阅
*@apiName 接口名394
*@apiGroup 搜索组合管理接口
*@apiParam {string} groupId 组合id[非必填].
*@apiParam {integer} type 订阅类型[非必填].
*@apiParam {integer} total 总条数[非必填].
*@apiParam {boolean} update 是否更新[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/searchGroup/get/{id} 通过id获取
*@apiName 接口名395
*@apiGroup 搜索组合管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "category": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "dateRange": "integer",
*               "delFlag": "integer",
*               "endTime": "string",
*               "id": "string",
*               "infoType": "string",
*               "isApp": "boolean",
*               "isEmail": "boolean",
*               "isSms": "boolean",
*               "isWechat": "boolean",
*               "keyword": "string",
*               "name": "string",
*               "primaryIndustry": "string",
*               "searchRange": "integer",
*               "secondaryIndustry": "string",
*               "stage": "string",
*               "startTime": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/searchGroup/getAll 获取全部数据
*@apiName 接口名396
*@apiGroup 搜索组合管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "area": "string",
*                    "category": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "dateRange": "integer",
*                    "delFlag": "integer",
*                    "endTime": "string",
*                    "id": "string",
*                    "infoType": "string",
*                    "isApp": "boolean",
*                    "isEmail": "boolean",
*                    "isSms": "boolean",
*                    "isWechat": "boolean",
*                    "keyword": "string",
*                    "name": "string",
*                    "primaryIndustry": "string",
*                    "searchRange": "integer",
*                    "secondaryIndustry": "string",
*                    "stage": "string",
*                    "startTime": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "userId": "integer",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/searchGroup/getByPage 分页获取
*@apiName 接口名397
*@apiGroup 搜索组合管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "area": "string",
*                         "category": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "dateRange": "integer",
*                         "delFlag": "integer",
*                         "endTime": "string",
*                         "id": "string",
*                         "infoType": "string",
*                         "isApp": "boolean",
*                         "isEmail": "boolean",
*                         "isSms": "boolean",
*                         "isWechat": "boolean",
*                         "keyword": "string",
*                         "name": "string",
*                         "primaryIndustry": "string",
*                         "searchRange": "integer",
*                         "secondaryIndustry": "string",
*                         "stage": "string",
*                         "startTime": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "integer",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/searchGroup/save 保存
*@apiName 接口名398
*@apiGroup 搜索组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} userId 用户ID[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} infoType 信息类型 1　工程招标 2　货物招标 3　服务招标 4　中标公示 5　招标预告 6　政府采购 7　企业采购　3030 VIP项目 3020 项目核准批复 3050　项目动态 3070　项目跟踪[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} primaryIndustry 一级行业[非必填].
*@apiParam {string} secondaryIndustry 二级行业[非必填].
*@apiParam {string} stage 进展阶段　0 项目进展阶段　2　项目建议书阶段 3　可行性研究报告阶段 4　项目审批阶段 6　工程设计 10　施工准备 11　在建阶段[非必填].
*@apiParam {integer} searchRange 检索范围　默认0 标题加内容　1标题 2内容 3招标编号[非必填].
*@apiParam {integer} type 订阅条件类型　默认0 招标与采购　1拟在建[非必填].
*@apiParam {integer} dateRange 时间范围 0近一天 1近一周 2近两周 3近一月 4近三月 5近半年 6近一年[非必填].
*@apiParam {string} startTime 起始时间[非必填].
*@apiParam {string} endTime 结束时间[非必填].
*@apiParam {string} keyword 关键词[非必填].
*@apiParam {boolean} isEmail 是否启用邮件订阅[非必填].
*@apiParam {boolean} isWechat 是否启用微信订阅[非必填].
*@apiParam {boolean} isSms 是否启用短信订阅[非必填].
*@apiParam {boolean} isApp 是否启用App订阅[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "category": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "dateRange": "integer",
*               "delFlag": "integer",
*               "endTime": "string",
*               "id": "string",
*               "infoType": "string",
*               "isApp": "boolean",
*               "isEmail": "boolean",
*               "isSms": "boolean",
*               "isWechat": "boolean",
*               "keyword": "string",
*               "name": "string",
*               "primaryIndustry": "string",
*               "searchRange": "integer",
*               "secondaryIndustry": "string",
*               "stage": "string",
*               "startTime": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/searchGroup/update 更新数据
*@apiName 接口名399
*@apiGroup 搜索组合管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {integer} userId 用户ID[非必填].
*@apiParam {string} name 名称[非必填].
*@apiParam {string} area 地区[非必填].
*@apiParam {string} infoType 信息类型 1　工程招标 2　货物招标 3　服务招标 4　中标公示 5　招标预告 6　政府采购 7　企业采购　3030 VIP项目 3020 项目核准批复 3050　项目动态 3070　项目跟踪[非必填].
*@apiParam {string} category 行业[非必填].
*@apiParam {string} primaryIndustry 一级行业[非必填].
*@apiParam {string} secondaryIndustry 二级行业[非必填].
*@apiParam {string} stage 进展阶段　0 项目进展阶段　2　项目建议书阶段 3　可行性研究报告阶段 4　项目审批阶段 6　工程设计 10　施工准备 11　在建阶段[非必填].
*@apiParam {integer} searchRange 检索范围　默认0 标题加内容　1标题 2内容 3招标编号[非必填].
*@apiParam {integer} type 订阅条件类型　默认0 招标与采购　1拟在建[非必填].
*@apiParam {integer} dateRange 时间范围 0近一天 1近一周 2近两周 3近一月 4近三月 5近半年 6近一年[非必填].
*@apiParam {string} startTime 起始时间[非必填].
*@apiParam {string} endTime 结束时间[非必填].
*@apiParam {string} keyword 关键词[非必填].
*@apiParam {boolean} isEmail 是否启用邮件订阅[非必填].
*@apiParam {boolean} isWechat 是否启用微信订阅[非必填].
*@apiParam {boolean} isSms 是否启用短信订阅[非必填].
*@apiParam {boolean} isApp 是否启用App订阅[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "area": "string",
*               "category": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "dateRange": "integer",
*               "delFlag": "integer",
*               "endTime": "string",
*               "id": "string",
*               "infoType": "string",
*               "isApp": "boolean",
*               "isEmail": "boolean",
*               "isSms": "boolean",
*               "isWechat": "boolean",
*               "keyword": "string",
*               "name": "string",
*               "primaryIndustry": "string",
*               "searchRange": "integer",
*               "secondaryIndustry": "string",
*               "stage": "string",
*               "startTime": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/email 查看email配置
*@apiName 接口名400
*@apiGroup 基本配置接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "changed": "boolean",
*               "host": "string",
*               "password": "string",
*               "username": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/setting/email/set email配置
*@apiName 接口名401
*@apiGroup 基本配置接口
*@apiParam {string} host 邮箱服务器[非必填].
*@apiParam {string} username 发送者邮箱账号[非必填].
*@apiParam {string} password 邮箱授权码[非必填].
*@apiParam {boolean} changed 是否改变secrectKey[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/notice 查看公告配置
*@apiName 接口名402
*@apiGroup 基本配置接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": "string",
*               "duration": "integer",
*               "open": "boolean",
*               "position": "string",
*               "title": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/setting/notice/set 其他配置
*@apiName 接口名403
*@apiGroup 基本配置接口
*@apiParam {boolean} open 公告开关[非必填].
*@apiParam {string} position 展示页面[非必填].
*@apiParam {integer} duration 展示时长[非必填].
*@apiParam {string} title 公告标题[非必填].
*@apiParam {string} content 公告内容[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/oss/check 检查OSS配置
*@apiName 接口名404
*@apiGroup 基本配置接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/setting/oss/set OSS配置
*@apiName 接口名405
*@apiGroup 基本配置接口
*@apiParam {string} serviceName 服务商[非必填].
*@apiParam {string} accessKey ak[非必填].
*@apiParam {string} secretKey sk[非必填].
*@apiParam {string} endpoint endpoint域名[非必填].
*@apiParam {string} bucket bucket空间[非必填].
*@apiParam {string} http http[非必填].
*@apiParam {integer} zone zone存储区域[非必填].
*@apiParam {string} bucketRegion bucket存储区域[非必填].
*@apiParam {string} filePath 本地存储路径[非必填].
*@apiParam {boolean} changed 是否改变secrectKey[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/oss/{serviceName} 查看OSS配置
*@apiName 接口名406
*@apiGroup 基本配置接口
*@apiParam {string} serviceName serviceName[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "accessKey": "string",
*               "bucket": "string",
*               "bucketRegion": "string",
*               "changed": "boolean",
*               "endpoint": "string",
*               "filePath": "string",
*               "http": "string",
*               "secretKey": "string",
*               "serviceName": "string",
*               "zone": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/other 查看其他配置
*@apiName 接口名407
*@apiGroup 基本配置接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "blacklist": "string",
*               "domain": "string",
*               "ssoDomain": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/setting/other/set 其他配置
*@apiName 接口名408
*@apiGroup 基本配置接口
*@apiParam {string} domain 域名[非必填].
*@apiParam {string} ssoDomain 单点登录域名[非必填].
*@apiParam {string} blacklist IP黑名单[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/seeSecret/{settingName} 查看私密配置
*@apiName 接口名409
*@apiGroup 基本配置接口
*@apiParam {string} settingName settingName[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/setting/sms/set 短信配置
*@apiName 接口名410
*@apiGroup 基本配置接口
*@apiParam {string} serviceName 服务商[非必填].
*@apiParam {string} accessKey ak[非必填].
*@apiParam {string} secretKey sk[非必填].
*@apiParam {string} signName 签名[非必填].
*@apiParam {string} bucket bucket空间[非必填].
*@apiParam {integer} type 使用场景类型[非必填].
*@apiParam {string} templateCode 模版code[非必填].
*@apiParam {boolean} changed 是否改变secrectKey[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/sms/templateCode/{type} 查看短信模板配置
*@apiName 接口名411
*@apiGroup 基本配置接口
*@apiParam {integer} type type[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "string",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/sms/{serviceName} 查看短信配置
*@apiName 接口名412
*@apiGroup 基本配置接口
*@apiParam {string} serviceName serviceName[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "accessKey": "string",
*               "bucket": "string",
*               "changed": "boolean",
*               "secretKey": "string",
*               "serviceName": "string",
*               "signName": "string",
*               "templateCode": "string",
*               "type": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/setting/vaptcha 查看vaptcha配置
*@apiName 接口名413
*@apiGroup 基本配置接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "changed": "boolean",
*               "scene": "string",
*               "secretKey": "string",
*               "vid": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/setting/vaptcha/set vaptcha配置
*@apiName 接口名414
*@apiGroup 基本配置接口
*@apiParam {string} vid vid[非必填].
*@apiParam {string} secretKey secretKey[非必填].
*@apiParam {string} scene 场景[非必填].
*@apiParam {boolean} changed 是否改变secretkey[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/getJWT 获取JWT
*@apiName 接口名415
*@apiGroup 绑定第三方账号接口
*@apiParam {string} JWTKey JWTKey[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/github/callback 获取accessToken
*@apiName 接口名416
*@apiGroup Github登录接口
*@apiParam {string} code code[非必填].
*@apiParam {string} state state[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/github/login 获取github认证链接
*@apiName 接口名417
*@apiGroup Github登录接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/qq/callback 获取accessToken
*@apiName 接口名418
*@apiGroup QQ登录接口
*@apiParam {string} code code[非必填].
*@apiParam {string} state state[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/qq/login 获取qq认证链接
*@apiName 接口名419
*@apiGroup QQ登录接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/social/relate 绑定账号
*@apiName 接口名420
*@apiGroup 绑定第三方账号接口
*@apiParam {boolean} isLogin isLogin[必填].
*@apiParam {string} username username[非必填].
*@apiParam {string} password password[非必填].
*@apiParam {integer} socialType socialType[必填].
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/wechat/callback 获取accessToken
*@apiName 接口名421
*@apiGroup 微信登录接口
*@apiParam {string} code code[非必填].
*@apiParam {string} state state[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/wechat/login 获取wechat认证链接
*@apiName 接口名422
*@apiGroup 微信登录接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/weibo/callback 获取accessToken
*@apiName 接口名423
*@apiGroup 微博登录接口
*@apiParam {string} code code[非必填].
*@apiParam {string} state state[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/social/weibo/login 获取微博认证链接
*@apiName 接口名424
*@apiGroup 微博登录接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/structure/get/{id} 通过id获取
*@apiName 接口名425
*@apiGroup 信息结构化接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "areaId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "deadline": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoType": "string",
*               "keywords": "string",
*               "publishDate": "string",
*               "tenderee": "string",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/structure/index/{id} 通过id获取
*@apiName 接口名426
*@apiGroup 信息结构化接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "areaId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "deadline": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "infoType": "string",
*               "keywords": "string",
*               "publishDate": "string",
*               "tenderee": "string",
*               "title": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/structure/lexer/{id} 通过id获取
*@apiName 接口名427
*@apiGroup 信息结构化接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "string",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/structureLog/delByIds 批量通过id删除
*@apiName 接口名428
*@apiGroup 结构化日志表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/structureLog/get/{id} 通过id获取
*@apiName 接口名429
*@apiGroup 结构化日志表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "blockId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireCount": "string",
*               "id": "string",
*               "infoId": "string",
*               "lastId": "string",
*               "processCount": "string",
*               "publishDate": "string",
*               "startTime": "string",
*               "status": "integer",
*               "totalCount": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/structureLog/getAll 获取全部数据
*@apiName 接口名430
*@apiGroup 结构化日志表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "blockId": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "expireCount": "string",
*                    "id": "string",
*                    "infoId": "string",
*                    "lastId": "string",
*                    "processCount": "string",
*                    "publishDate": "string",
*                    "startTime": "string",
*                    "status": "integer",
*                    "totalCount": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/structureLog/getByCondition 多条件分页获取
*@apiName 接口名431
*@apiGroup 结构化日志表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} blockId 模块id[非必填].
*@apiParam {string} lastId 上一条处理信息入库id[非必填].
*@apiParam {string} infoId 上一条处理信息id[非必填].
*@apiParam {string} totalCount 待处理信息总条数[非必填].
*@apiParam {string} expireCount 过期信息条数[非必填].
*@apiParam {string} processCount 处理信息条数[非必填].
*@apiParam {string} publishDate 上一条处理信息发布日期[非必填].
*@apiParam {string} startTime 任务开始时间[非必填].
*@apiParam {integer} status 邮件发送状态 0未处理 1已发送[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "blockId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireCount": "string",
*                         "id": "string",
*                         "infoId": "string",
*                         "lastId": "string",
*                         "processCount": "string",
*                         "publishDate": "string",
*                         "startTime": "string",
*                         "status": "integer",
*                         "totalCount": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/structureLog/getByPage 分页获取
*@apiName 接口名432
*@apiGroup 结构化日志表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "blockId": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireCount": "string",
*                         "id": "string",
*                         "infoId": "string",
*                         "lastId": "string",
*                         "processCount": "string",
*                         "publishDate": "string",
*                         "startTime": "string",
*                         "status": "integer",
*                         "totalCount": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/structureLog/save 保存数据
*@apiName 接口名433
*@apiGroup 结构化日志表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} blockId 模块id[非必填].
*@apiParam {string} lastId 上一条处理信息入库id[非必填].
*@apiParam {string} infoId 上一条处理信息id[非必填].
*@apiParam {string} totalCount 待处理信息总条数[非必填].
*@apiParam {string} expireCount 过期信息条数[非必填].
*@apiParam {string} processCount 处理信息条数[非必填].
*@apiParam {string} publishDate 上一条处理信息发布日期[非必填].
*@apiParam {string} startTime 任务开始时间[非必填].
*@apiParam {integer} status 邮件发送状态 0未处理 1已发送[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "blockId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireCount": "string",
*               "id": "string",
*               "infoId": "string",
*               "lastId": "string",
*               "processCount": "string",
*               "publishDate": "string",
*               "startTime": "string",
*               "status": "integer",
*               "totalCount": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/structureLog/update 更新数据
*@apiName 接口名434
*@apiGroup 结构化日志表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} blockId 模块id[非必填].
*@apiParam {string} lastId 上一条处理信息入库id[非必填].
*@apiParam {string} infoId 上一条处理信息id[非必填].
*@apiParam {string} totalCount 待处理信息总条数[非必填].
*@apiParam {string} expireCount 过期信息条数[非必填].
*@apiParam {string} processCount 处理信息条数[非必填].
*@apiParam {string} publishDate 上一条处理信息发布日期[非必填].
*@apiParam {string} startTime 任务开始时间[非必填].
*@apiParam {integer} status 邮件发送状态 0未处理 1已发送[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "blockId": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireCount": "string",
*               "id": "string",
*               "infoId": "string",
*               "lastId": "string",
*               "processCount": "string",
*               "publishDate": "string",
*               "startTime": "string",
*               "status": "integer",
*               "totalCount": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/subscribe/channel 我的频道
*@apiName 接口名435
*@apiGroup 频道订阅管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "expireDate": "string",
*                    "id": "string",
*                    "image": "string",
*                    "productId": "string",
*                    "productName": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*                    "userId": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/subscribe/delByIds 批量通过id删除
*@apiName 接口名436
*@apiGroup 频道订阅管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/subscribe/get/{id} 通过id获取
*@apiName 接口名437
*@apiGroup 频道订阅管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "image": "string",
*               "productId": "string",
*               "productName": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/subscribe/getAll 获取全部数据
*@apiName 接口名438
*@apiGroup 频道订阅管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "expireDate": "string",
*                    "id": "string",
*                    "image": "string",
*                    "productId": "string",
*                    "productName": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*                    "userId": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/subscribe/getByCondition 多条件分页获取
*@apiName 接口名439
*@apiGroup 频道订阅管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} productId 产品ID[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {string} image 图片[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiParam {string} expireDate 截止日期[非必填].
*@apiParam {string} productName 产品名称[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireDate": "string",
*                         "id": "string",
*                         "image": "string",
*                         "productId": "string",
*                         "productName": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/subscribe/getByPage 分页获取
*@apiName 接口名440
*@apiGroup 频道订阅管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireDate": "string",
*                         "id": "string",
*                         "image": "string",
*                         "productId": "string",
*                         "productName": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/subscribe/save 保存数据
*@apiName 接口名441
*@apiGroup 频道订阅管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} productId 产品ID[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {string} image 图片[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiParam {string} expireDate 截止日期[非必填].
*@apiParam {string} productName 产品名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "image": "string",
*               "productId": "string",
*               "productName": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/subscribe/test 保存数据
*@apiName 接口名442
*@apiGroup 频道订阅管理接口
*@apiParam {string} itemId itemId[非必填].
*@apiParam {integer} duration duration[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "image": "string",
*               "productId": "string",
*               "productName": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/subscribe/update 更新数据
*@apiName 接口名443
*@apiGroup 频道订阅管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} productId 产品ID[非必填].
*@apiParam {string} userId 用户ID[非必填].
*@apiParam {string} image 图片[非必填].
*@apiParam {string} url 频道地址[非必填].
*@apiParam {string} expireDate 截止日期[非必填].
*@apiParam {string} productName 产品名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireDate": "string",
*               "id": "string",
*               "image": "string",
*               "productId": "string",
*               "productName": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/tagKeywords/delByIds 批量通过id删除
*@apiName 接口名444
*@apiGroup 打标签关键词表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/tagKeywords/get/{id} 通过id获取
*@apiName 接口名445
*@apiGroup 打标签关键词表管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "string",
*               "keywords": "string",
*               "tagType": "string",
*               "words": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/tagKeywords/getAll 获取全部数据
*@apiName 接口名446
*@apiGroup 打标签关键词表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "id": "string",
*                    "keywords": "string",
*                    "tagType": "string",
*                    "words": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/tagKeywords/getByCondition 多条件分页获取
*@apiName 接口名447
*@apiGroup 打标签关键词表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} words description[非必填].
*@apiParam {string} keywords description[非必填].
*@apiParam {string} tagType 标签类型[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "string",
*                         "keywords": "string",
*                         "tagType": "string",
*                         "words": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/tagKeywords/getByPage 分页获取
*@apiName 接口名448
*@apiGroup 打标签关键词表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "string",
*                         "keywords": "string",
*                         "tagType": "string",
*                         "words": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/tagKeywords/save 保存数据
*@apiName 接口名449
*@apiGroup 打标签关键词表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} words description[非必填].
*@apiParam {string} keywords description[非必填].
*@apiParam {string} tagType 标签类型[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "string",
*               "keywords": "string",
*               "tagType": "string",
*               "words": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/tagKeywords/update 更新数据
*@apiName 接口名450
*@apiGroup 打标签关键词表管理接口
*@apiParam {string} id description[非必填].
*@apiParam {string} words description[非必填].
*@apiParam {string} keywords description[非必填].
*@apiParam {string} tagType 标签类型[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "string",
*               "keywords": "string",
*               "tagType": "string",
*               "words": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/task/delAll 通过id获取
*@apiName 接口名451
*@apiGroup 结构化任务接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/task/get 通过id获取
*@apiName 接口名452
*@apiGroup 结构化任务接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "string",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/task/getAll 通过id获取
*@apiName 接口名453
*@apiGroup 结构化任务接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "string",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/team/delByIds 批量通过id删除
*@apiName 接口名454
*@apiGroup 团队管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/team/get/{id} 通过id获取
*@apiName 接口名455
*@apiGroup 团队管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "name": "string",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/team/getAll 获取全部数据
*@apiName 接口名456
*@apiGroup 团队管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "isParent": "boolean",
*                    "name": "string",
*                    "parentId": "string",
*                    "parentTitle": "string",
*                    "sortOrder": "number",
*                    "status": "integer",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/team/getByCondition 多条件分页获取
*@apiName 接口名457
*@apiGroup 团队管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 团队名称[非必填].
*@apiParam {string} parentId 父部门id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "name": "string",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/team/getByPage 分页获取
*@apiName 接口名458
*@apiGroup 团队管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "isParent": "boolean",
*                         "name": "string",
*                         "parentId": "string",
*                         "parentTitle": "string",
*                         "sortOrder": "number",
*                         "status": "integer",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/team/save 保存数据
*@apiName 接口名459
*@apiGroup 团队管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 团队名称[非必填].
*@apiParam {string} parentId 父部门id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "name": "string",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/team/update 更新数据
*@apiName 接口名460
*@apiGroup 团队管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 团队名称[非必填].
*@apiParam {string} parentId 父部门id[非必填].
*@apiParam {boolean} isParent 是否为父节点(含子节点) 默认false[非必填].
*@apiParam {number} sortOrder 排序值[非必填].
*@apiParam {integer} type 类型 0分组 1分类[非必填].
*@apiParam {integer} status 是否启用 0启用 -1禁用[非必填].
*@apiParam {string} parentTitle 父节点名称[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "isParent": "boolean",
*               "name": "string",
*               "parentId": "string",
*               "parentTitle": "string",
*               "sortOrder": "number",
*               "status": "integer",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/template/delByIds 批量通过id删除
*@apiName 接口名461
*@apiGroup 模板管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/template/get/{id} 通过id获取
*@apiName 接口名462
*@apiGroup 模板管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "modules": "string",
*               "name": "string",
*               "realUrl": "string",
*               "router": "string",
*               "siteId": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "useRoute": "boolean",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/template/getAll 获取全部数据
*@apiName 接口名463
*@apiGroup 模板管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "modules": "string",
*                    "name": "string",
*                    "realUrl": "string",
*                    "router": "string",
*                    "siteId": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*                    "useRoute": "boolean",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/template/getByCondition 多条件分页获取
*@apiName 接口名464
*@apiGroup 模板管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 页面名称[非必填].
*@apiParam {string} url 页面url[非必填].
*@apiParam {string} realUrl 页面实际url[非必填].
*@apiParam {boolean} useRoute 是否启用路由规则[非必填].
*@apiParam {string} router 路由规则[非必填].
*@apiParam {string} siteId 所属站点ID[非必填].
*@apiParam {string} modules 模块[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "modules": "string",
*                         "name": "string",
*                         "realUrl": "string",
*                         "router": "string",
*                         "siteId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "useRoute": "boolean",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/template/getByPage 分页获取
*@apiName 接口名465
*@apiGroup 模板管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "modules": "string",
*                         "name": "string",
*                         "realUrl": "string",
*                         "router": "string",
*                         "siteId": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "useRoute": "boolean",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/template/save 保存数据
*@apiName 接口名466
*@apiGroup 模板管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 页面名称[非必填].
*@apiParam {string} url 页面url[非必填].
*@apiParam {string} realUrl 页面实际url[非必填].
*@apiParam {boolean} useRoute 是否启用路由规则[非必填].
*@apiParam {string} router 路由规则[非必填].
*@apiParam {string} siteId 所属站点ID[非必填].
*@apiParam {string} modules 模块[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "modules": "string",
*               "name": "string",
*               "realUrl": "string",
*               "router": "string",
*               "siteId": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "useRoute": "boolean",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/template/update 更新数据
*@apiName 接口名467
*@apiGroup 模板管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} name 页面名称[非必填].
*@apiParam {string} url 页面url[非必填].
*@apiParam {string} realUrl 页面实际url[非必填].
*@apiParam {boolean} useRoute 是否启用路由规则[非必填].
*@apiParam {string} router 路由规则[非必填].
*@apiParam {string} siteId 所属站点ID[非必填].
*@apiParam {string} modules 模块[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "modules": "string",
*               "name": "string",
*               "realUrl": "string",
*               "router": "string",
*               "siteId": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "useRoute": "boolean",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/test/lockAndLimit 同步锁限流测试
*@apiName 接口名468
*@apiGroup 测试接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/add 添加用户
*@apiName 接口名469
*@apiGroup 微信二维码接口
*@apiParam {string} companyId companyId[必填].
*@apiParam {string} company company[必填].
*@apiParam {string} phone phone[必填].
*@apiParam {string} name name[必填].
*@apiParam {integer} type type[必填].
*@apiParam {string} department department[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/batchAdd 批量添加用户
*@apiName 接口名470
*@apiGroup 微信二维码接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/create/{str} 获取凭证
*@apiName 接口名471
*@apiGroup 微信二维码接口
*@apiParam {string} str str[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/createQrcode 生成二维码
*@apiName 接口名472
*@apiGroup 微信二维码接口
*@apiParam {string} inviterId inviterId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/del 采招网跳转登录接口
*@apiName 接口名473
*@apiGroup 微信二维码接口
*@apiParam {string} sessionId sessionId[必填].
*@apiParam {string} id id[必填].
*@apiParam {boolean} saveLogin saveLogin[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/encode 加密服务
*@apiName 接口名474
*@apiGroup 微信二维码接口
*@apiParam {string} username username[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/ticket/export 错误报告导出测试
*@apiName 接口名475
*@apiGroup 微信二维码接口
*@apiParam {type} users users[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/findBy 通过openId查找用户
*@apiName 接口名476
*@apiGroup 微信二维码接口
*@apiParam {string} openId openId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/get 通过key获取
*@apiName 接口名477
*@apiGroup 微信二维码接口
*@apiParam {string} sessionId sessionId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/getWxToken 获取微信token
*@apiName 接口名478
*@apiGroup 微信二维码接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/hash 邀请用户
*@apiName 接口名479
*@apiGroup 微信二维码接口
*@apiParam {string} phone phone[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/hash2 邀请用户
*@apiName 接口名480
*@apiGroup 微信二维码接口
*@apiParam {string} phone phone[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/invite 邀请用户
*@apiName 接口名481
*@apiGroup 微信二维码接口
*@apiParam {string} inviteId inviteId[必填].
*@apiParam {string} phone phone[必填].
*@apiParam {string} name name[必填].
*@apiParam {string} department department[必填].
*@apiParam {boolean} flag flag[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/ticket/login 采招网跳转登录接口
*@apiName 接口名482
*@apiGroup 微信二维码接口
*@apiParam {string} sessionId sessionId[必填].
*@apiParam {boolean} saveLogin saveLogin[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/ticket/login2 短信登录接口
*@apiName 接口名483
*@apiGroup 微信二维码接口
*@apiParam {string} username username[必填].
*@apiParam {boolean} saveLogin saveLogin[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/login3 采招网跳转登录接口
*@apiName 接口名484
*@apiGroup 微信二维码接口
*@apiParam {string} mobile mobile[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/put 采招网跳转登录接口
*@apiName 接口名485
*@apiGroup 微信二维码接口
*@apiParam {string} sessionId sessionId[必填].
*@apiParam {string} id id[必填].
*@apiParam {boolean} saveLogin saveLogin[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/receive 接收凭证
*@apiName 接口名486
*@apiGroup 微信二维码接口
*@apiParam {string} ticket ticket[必填].
*@apiParam {string} openId openId[必填].
*@apiParam {string} id id[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/unbind 解绑微信
*@apiName 接口名487
*@apiGroup 微信二维码接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/user/{id} 通过openId查找用户
*@apiName 接口名488
*@apiGroup 微信二维码接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/ticket/wechat 获取绑定微信二维码
*@apiName 接口名489
*@apiGroup 微信二维码接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/topicCategory/delByIds 批量通过id删除
*@apiName 接口名490
*@apiGroup 专题分类管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/topicCategory/get/{id} 通过id获取
*@apiName 接口名491
*@apiGroup 专题分类管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/topicCategory/getAll 获取全部数据
*@apiName 接口名492
*@apiGroup 专题分类管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/topicCategory/getByCondition 多条件分页获取
*@apiName 接口名493
*@apiGroup 专题分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/topicCategory/getByPage 分页获取
*@apiName 接口名494
*@apiGroup 专题分类管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/topicCategory/save 保存数据
*@apiName 接口名495
*@apiGroup 专题分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/topicCategory/update 更新数据
*@apiName 接口名496
*@apiGroup 专题分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/upload/file 文件上传
*@apiName 接口名497
*@apiGroup 文件上传接口
*@apiParam {file} file file[非必填].
*@apiParam {string} base64 base64[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/admin/add 添加用户
*@apiName 接口名498
*@apiGroup 用户接口
*@apiParam {string} roles[0].id id[非必填].
*@apiParam {string} roles[0].name 角色名 以ROLE_开头[非必填].
*@apiParam {string} roles[0].description 备注[非必填].
*@apiParam {string} permissions[0].title 菜单标题[非必填].
*@apiParam {string} permissions[0].path 页面路径/资源链接url[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 登录名[非必填].
*@apiParam {string} loginId 用户名[非必填].
*@apiParam {integer} loginIdHash 用户名哈希[非必填].
*@apiParam {integer} loginVer 用户名版本[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} pwdSalt 密码盐值[非必填].
*@apiParam {integer} pwdVer 密码版本[非必填].
*@apiParam {string} pwdCrypt 密码类型[非必填].
*@apiParam {string} nickname 用户名/昵称/姓名[非必填].
*@apiParam {string} mobile description[非必填].
*@apiParam {integer} mobileHash description[非必填].
*@apiParam {integer} mobileVer description[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} wechat 微信[非必填].
*@apiParam {string} app app[非必填].
*@apiParam {string} address 省市县地址[非必填].
*@apiParam {string} street 街道地址[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} passStrength 密码强度[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiParam {integer} type 用户类型 0普通用户 1管理员[非必填].
*@apiParam {integer} status 状态 默认0正常 1待审核 -1拉黑[非必填].
*@apiParam {string} description 描述/详情/备注[非必填].
*@apiParam {string} departmentId 所属部门id[非必填].
*@apiParam {string} departmentTitle 所属部门名称[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} companyId 所属公司id[非必填].
*@apiParam {string} companyName 所属公司名称[非必填].
*@apiParam {integer} registerType 注册类型 默认0正常 1手动创建 2微信邀请 3批量导入[非必填].
*@apiParam {string} crmLxrId 联系人id[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} defaultRole 导入数据时使用[非必填].
*@apiParam {string} creator 创建人[非必填].
*@apiParam {string} memberType 会员级别[非必填].
*@apiParam {string} expireTime 到期时间[非必填].
*@apiParam {string} contact 专属客服[非必填].
*@apiParam {string} contactPhone 客服电话[非必填].
*@apiParam {array} roleIds roleIds[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/admin/batchAdd 批量添加用户
*@apiName 接口名499
*@apiGroup 用户接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/admin/disable/{userId} 后台禁用用户
*@apiName 接口名500
*@apiGroup 用户接口
*@apiParam {string} userId 用户唯一id标识[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/admin/edit 管理员修改资料
*@apiName 接口名501
*@apiGroup 用户接口
*@apiParam {string} roles[0].id id[非必填].
*@apiParam {string} roles[0].name 角色名 以ROLE_开头[非必填].
*@apiParam {string} roles[0].description 备注[非必填].
*@apiParam {string} permissions[0].title 菜单标题[非必填].
*@apiParam {string} permissions[0].path 页面路径/资源链接url[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 登录名[非必填].
*@apiParam {string} loginId 用户名[非必填].
*@apiParam {integer} loginIdHash 用户名哈希[非必填].
*@apiParam {integer} loginVer 用户名版本[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} pwdSalt 密码盐值[非必填].
*@apiParam {integer} pwdVer 密码版本[非必填].
*@apiParam {string} pwdCrypt 密码类型[非必填].
*@apiParam {string} nickname 用户名/昵称/姓名[非必填].
*@apiParam {string} mobile description[非必填].
*@apiParam {integer} mobileHash description[非必填].
*@apiParam {integer} mobileVer description[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} wechat 微信[非必填].
*@apiParam {string} app app[非必填].
*@apiParam {string} address 省市县地址[非必填].
*@apiParam {string} street 街道地址[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} passStrength 密码强度[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiParam {integer} type 用户类型 0普通用户 1管理员[非必填].
*@apiParam {integer} status 状态 默认0正常 1待审核 -1拉黑[非必填].
*@apiParam {string} description 描述/详情/备注[非必填].
*@apiParam {string} departmentId 所属部门id[非必填].
*@apiParam {string} departmentTitle 所属部门名称[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} companyId 所属公司id[非必填].
*@apiParam {string} companyName 所属公司名称[非必填].
*@apiParam {integer} registerType 注册类型 默认0正常 1手动创建 2微信邀请 3批量导入[非必填].
*@apiParam {string} crmLxrId 联系人id[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} defaultRole 导入数据时使用[非必填].
*@apiParam {string} creator 创建人[非必填].
*@apiParam {string} memberType 会员级别[非必填].
*@apiParam {string} expireTime 到期时间[非必填].
*@apiParam {string} contact 专属客服[非必填].
*@apiParam {string} contactPhone 客服电话[非必填].
*@apiParam {array} roleIds roleIds[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/admin/enable/{userId} 后台启用用户
*@apiName 接口名502
*@apiGroup 用户接口
*@apiParam {string} userId 用户唯一id标识[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/admin/remove 后台移除用户
*@apiName 接口名503
*@apiGroup 用户接口
*@apiParam {string} userId 用户唯一id标识[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/batchImport 批量导入分账号
*@apiName 接口名504
*@apiGroup 用户接口
*@apiParam {type} users users[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/changeMobile 修改绑定手机
*@apiName 接口名505
*@apiGroup 用户接口
*@apiParam {string} mobile mobile[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/delByIds 批量通过ids删除
*@apiName 接口名506
*@apiGroup 用户接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/edit 修改用户自己资料
*@apiName 接口名507
*@apiGroup 用户接口
*@apiParam {string} roles[0].id id[非必填].
*@apiParam {string} roles[0].name 角色名 以ROLE_开头[非必填].
*@apiParam {string} roles[0].description 备注[非必填].
*@apiParam {string} permissions[0].title 菜单标题[非必填].
*@apiParam {string} permissions[0].path 页面路径/资源链接url[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 登录名[非必填].
*@apiParam {string} loginId 用户名[非必填].
*@apiParam {integer} loginIdHash 用户名哈希[非必填].
*@apiParam {integer} loginVer 用户名版本[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} pwdSalt 密码盐值[非必填].
*@apiParam {integer} pwdVer 密码版本[非必填].
*@apiParam {string} pwdCrypt 密码类型[非必填].
*@apiParam {string} nickname 用户名/昵称/姓名[非必填].
*@apiParam {string} mobile description[非必填].
*@apiParam {integer} mobileHash description[非必填].
*@apiParam {integer} mobileVer description[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} wechat 微信[非必填].
*@apiParam {string} app app[非必填].
*@apiParam {string} address 省市县地址[非必填].
*@apiParam {string} street 街道地址[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} passStrength 密码强度[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiParam {integer} type 用户类型 0普通用户 1管理员[非必填].
*@apiParam {integer} status 状态 默认0正常 1待审核 -1拉黑[非必填].
*@apiParam {string} description 描述/详情/备注[非必填].
*@apiParam {string} departmentId 所属部门id[非必填].
*@apiParam {string} departmentTitle 所属部门名称[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} companyId 所属公司id[非必填].
*@apiParam {string} companyName 所属公司名称[非必填].
*@apiParam {integer} registerType 注册类型 默认0正常 1手动创建 2微信邀请 3批量导入[非必填].
*@apiParam {string} crmLxrId 联系人id[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} defaultRole 导入数据时使用[非必填].
*@apiParam {string} creator 创建人[非必填].
*@apiParam {string} memberType 会员级别[非必填].
*@apiParam {string} expireTime 到期时间[非必填].
*@apiParam {string} contact 专属客服[非必填].
*@apiParam {string} contactPhone 客服电话[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/export 错误报告导出测试
*@apiName 接口名508
*@apiGroup 用户接口
*@apiParam {type} users users[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/findAll 获取全部用户数据
*@apiName 接口名509
*@apiGroup 用户接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "address": "string",
*                    "app": "string",
*                    "avatar": "string",
*                    "birth": "string",
*                    "companyId": "string",
*                    "companyName": "string",
*                    "contact": "string",
*                    "contactPhone": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "creator": "string",
*                    "crmLxrId": "string",
*                    "defaultRole": "integer",
*                    "delFlag": "integer",
*                    "department": "string",
*                    "departmentId": "string",
*                    "departmentTitle": "string",
*                    "description": "string",
*                    "email": "string",
*                    "expireTime": "string",
*                    "id": "string",
*                    "loginId": "string",
*                    "loginIdHash": "integer",
*                    "loginVer": "integer",
*                    "memberType": "string",
*                    "mobile": "string",
*                    "mobileHash": "integer",
*                    "mobileVer": "integer",
*                    "nickname": "string",
*                    "passStrength": "string",
*                    "password": "string",
*                    "permissions": [
*                          {
*                              "path": "string",
*                              "title": "string",
*                         },
*                    ],
*                    "pv": "array",
*                    "pwdCrypt": "string",
*                    "pwdSalt": "string",
*                    "pwdVer": "integer",
*                    "registerType": "integer",
*                    "roles": [
*                          {
*                              "description": "string",
*                              "id": "string",
*                              "name": "string",
*                         },
*                    ],
*                    "sex": "string",
*                    "status": "integer",
*                    "street": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "username": "string",
*                    "wechat": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/getAll 获取全部用户数据
*@apiName 接口名510
*@apiGroup 用户接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "address": "string",
*                    "app": "string",
*                    "avatar": "string",
*                    "birth": "string",
*                    "companyId": "string",
*                    "companyName": "string",
*                    "contact": "string",
*                    "contactPhone": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "creator": "string",
*                    "crmLxrId": "string",
*                    "defaultRole": "integer",
*                    "delFlag": "integer",
*                    "department": "string",
*                    "departmentId": "string",
*                    "departmentTitle": "string",
*                    "description": "string",
*                    "email": "string",
*                    "expireTime": "string",
*                    "id": "string",
*                    "loginId": "string",
*                    "loginIdHash": "integer",
*                    "loginVer": "integer",
*                    "memberType": "string",
*                    "mobile": "string",
*                    "mobileHash": "integer",
*                    "mobileVer": "integer",
*                    "nickname": "string",
*                    "passStrength": "string",
*                    "password": "string",
*                    "permissions": [
*                          {
*                              "path": "string",
*                              "title": "string",
*                         },
*                    ],
*                    "pv": "array",
*                    "pwdCrypt": "string",
*                    "pwdSalt": "string",
*                    "pwdVer": "integer",
*                    "registerType": "integer",
*                    "roles": [
*                          {
*                              "description": "string",
*                              "id": "string",
*                              "name": "string",
*                         },
*                    ],
*                    "sex": "string",
*                    "status": "integer",
*                    "street": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "username": "string",
*                    "wechat": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/getByCondition 多条件分页获取用户列表
*@apiName 接口名511
*@apiGroup 用户接口
*@apiParam {string} roles[0].id id[非必填].
*@apiParam {string} roles[0].name 角色名 以ROLE_开头[非必填].
*@apiParam {string} roles[0].description 备注[非必填].
*@apiParam {string} permissions[0].title 菜单标题[非必填].
*@apiParam {string} permissions[0].path 页面路径/资源链接url[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 登录名[非必填].
*@apiParam {string} loginId 用户名[非必填].
*@apiParam {integer} loginIdHash 用户名哈希[非必填].
*@apiParam {integer} loginVer 用户名版本[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} pwdSalt 密码盐值[非必填].
*@apiParam {integer} pwdVer 密码版本[非必填].
*@apiParam {string} pwdCrypt 密码类型[非必填].
*@apiParam {string} nickname 用户名/昵称/姓名[非必填].
*@apiParam {string} mobile description[非必填].
*@apiParam {integer} mobileHash description[非必填].
*@apiParam {integer} mobileVer description[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} wechat 微信[非必填].
*@apiParam {string} app app[非必填].
*@apiParam {string} address 省市县地址[非必填].
*@apiParam {string} street 街道地址[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} passStrength 密码强度[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiParam {integer} type 用户类型 0普通用户 1管理员[非必填].
*@apiParam {integer} status 状态 默认0正常 1待审核 -1拉黑[非必填].
*@apiParam {string} description 描述/详情/备注[非必填].
*@apiParam {string} departmentId 所属部门id[非必填].
*@apiParam {string} departmentTitle 所属部门名称[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} companyId 所属公司id[非必填].
*@apiParam {string} companyName 所属公司名称[非必填].
*@apiParam {integer} registerType 注册类型 默认0正常 1手动创建 2微信邀请 3批量导入[非必填].
*@apiParam {string} crmLxrId 联系人id[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} defaultRole 导入数据时使用[非必填].
*@apiParam {string} creator 创建人[非必填].
*@apiParam {string} memberType 会员级别[非必填].
*@apiParam {string} expireTime 到期时间[非必填].
*@apiParam {string} contact 专属客服[非必填].
*@apiParam {string} contactPhone 客服电话[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "address": "string",
*                         "app": "string",
*                         "avatar": "string",
*                         "birth": "string",
*                         "companyId": "string",
*                         "companyName": "string",
*                         "contact": "string",
*                         "contactPhone": "string",
*                         "createBy": "string",
*                         "createTime": "string",
*                         "creator": "string",
*                         "crmLxrId": "string",
*                         "defaultRole": "integer",
*                         "delFlag": "integer",
*                         "department": "string",
*                         "departmentId": "string",
*                         "departmentTitle": "string",
*                         "description": "string",
*                         "email": "string",
*                         "expireTime": "string",
*                         "id": "string",
*                         "loginId": "string",
*                         "loginIdHash": "integer",
*                         "loginVer": "integer",
*                         "memberType": "string",
*                         "mobile": "string",
*                         "mobileHash": "integer",
*                         "mobileVer": "integer",
*                         "nickname": "string",
*                         "passStrength": "string",
*                         "password": "string",
*                         "permissions": [
*                               {
*                                   "path": "string",
*                                   "title": "string",
*                              },
*                         ],
*                         "pv": "array",
*                         "pwdCrypt": "string",
*                         "pwdSalt": "string",
*                         "pwdVer": "integer",
*                         "registerType": "integer",
*                         "roles": [
*                               {
*                                   "description": "string",
*                                   "id": "string",
*                                   "name": "string",
*                              },
*                         ],
*                         "sex": "string",
*                         "status": "integer",
*                         "street": "string",
*                         "type": "integer",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "username": "string",
*                         "wechat": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/getByDepartmentId/{departmentId} 多条件分页获取用户列表
*@apiName 接口名512
*@apiGroup 用户接口
*@apiParam {string} departmentId departmentId[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "address": "string",
*                    "app": "string",
*                    "avatar": "string",
*                    "birth": "string",
*                    "companyId": "string",
*                    "companyName": "string",
*                    "contact": "string",
*                    "contactPhone": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "creator": "string",
*                    "crmLxrId": "string",
*                    "defaultRole": "integer",
*                    "delFlag": "integer",
*                    "department": "string",
*                    "departmentId": "string",
*                    "departmentTitle": "string",
*                    "description": "string",
*                    "email": "string",
*                    "expireTime": "string",
*                    "id": "string",
*                    "loginId": "string",
*                    "loginIdHash": "integer",
*                    "loginVer": "integer",
*                    "memberType": "string",
*                    "mobile": "string",
*                    "mobileHash": "integer",
*                    "mobileVer": "integer",
*                    "nickname": "string",
*                    "passStrength": "string",
*                    "password": "string",
*                    "permissions": [
*                          {
*                              "path": "string",
*                              "title": "string",
*                         },
*                    ],
*                    "pv": "array",
*                    "pwdCrypt": "string",
*                    "pwdSalt": "string",
*                    "pwdVer": "integer",
*                    "registerType": "integer",
*                    "roles": [
*                          {
*                              "description": "string",
*                              "id": "string",
*                              "name": "string",
*                         },
*                    ],
*                    "sex": "string",
*                    "status": "integer",
*                    "street": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "username": "string",
*                    "wechat": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/importData 导入用户数据
*@apiName 接口名513
*@apiGroup 用户接口
*@apiParam {type} users users[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/info 获取当前登录用户接口
*@apiName 接口名514
*@apiGroup 用户接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "address": "string",
*               "app": "string",
*               "avatar": "string",
*               "birth": "string",
*               "companyId": "string",
*               "companyName": "string",
*               "contact": "string",
*               "contactPhone": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "creator": "string",
*               "crmLxrId": "string",
*               "defaultRole": "integer",
*               "delFlag": "integer",
*               "department": "string",
*               "departmentId": "string",
*               "departmentTitle": "string",
*               "description": "string",
*               "email": "string",
*               "expireTime": "string",
*               "id": "string",
*               "loginId": "string",
*               "loginIdHash": "integer",
*               "loginVer": "integer",
*               "memberType": "string",
*               "mobile": "string",
*               "mobileHash": "integer",
*               "mobileVer": "integer",
*               "nickname": "string",
*               "passStrength": "string",
*               "password": "string",
*               "permissions": [
*                     {
*                         "path": "string",
*                         "title": "string",
*                    },
*               ],
*               "pv": "array",
*               "pwdCrypt": "string",
*               "pwdSalt": "string",
*               "pwdVer": "integer",
*               "registerType": "integer",
*               "roles": [
*                     {
*                         "description": "string",
*                         "id": "string",
*                         "name": "string",
*                    },
*               ],
*               "sex": "string",
*               "status": "integer",
*               "street": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "username": "string",
*               "wechat": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/info2 获取当前登录用户接口手机号不加密
*@apiName 接口名515
*@apiGroup 用户接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "address": "string",
*               "app": "string",
*               "avatar": "string",
*               "birth": "string",
*               "companyId": "string",
*               "companyName": "string",
*               "contact": "string",
*               "contactPhone": "string",
*               "createBy": "string",
*               "createTime": "string",
*               "creator": "string",
*               "crmLxrId": "string",
*               "defaultRole": "integer",
*               "delFlag": "integer",
*               "department": "string",
*               "departmentId": "string",
*               "departmentTitle": "string",
*               "description": "string",
*               "email": "string",
*               "expireTime": "string",
*               "id": "string",
*               "loginId": "string",
*               "loginIdHash": "integer",
*               "loginVer": "integer",
*               "memberType": "string",
*               "mobile": "string",
*               "mobileHash": "integer",
*               "mobileVer": "integer",
*               "nickname": "string",
*               "passStrength": "string",
*               "password": "string",
*               "permissions": [
*                     {
*                         "path": "string",
*                         "title": "string",
*                    },
*               ],
*               "pv": "array",
*               "pwdCrypt": "string",
*               "pwdSalt": "string",
*               "pwdVer": "integer",
*               "registerType": "integer",
*               "roles": [
*                     {
*                         "description": "string",
*                         "id": "string",
*                         "name": "string",
*                    },
*               ],
*               "sex": "string",
*               "status": "integer",
*               "street": "string",
*               "type": "integer",
*               "updateBy": "string",
*               "updateTime": "string",
*               "username": "string",
*               "wechat": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/modifyPass 修改密码
*@apiName 接口名516
*@apiGroup 用户接口
*@apiParam {string} password 旧密码[非必填].
*@apiParam {string} newPass 新密码[非必填].
*@apiParam {string} passStrength 密码强度[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/regist 注册用户
*@apiName 接口名517
*@apiGroup 用户接口
*@apiParam {string} roles[0].id id[非必填].
*@apiParam {string} roles[0].name 角色名 以ROLE_开头[非必填].
*@apiParam {string} roles[0].description 备注[非必填].
*@apiParam {string} permissions[0].title 菜单标题[非必填].
*@apiParam {string} permissions[0].path 页面路径/资源链接url[非必填].
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} username 登录名[非必填].
*@apiParam {string} loginId 用户名[非必填].
*@apiParam {integer} loginIdHash 用户名哈希[非必填].
*@apiParam {integer} loginVer 用户名版本[非必填].
*@apiParam {string} password 密码[非必填].
*@apiParam {string} pwdSalt 密码盐值[非必填].
*@apiParam {integer} pwdVer 密码版本[非必填].
*@apiParam {string} pwdCrypt 密码类型[非必填].
*@apiParam {string} nickname 用户名/昵称/姓名[非必填].
*@apiParam {string} mobile description[非必填].
*@apiParam {integer} mobileHash description[非必填].
*@apiParam {integer} mobileVer description[非必填].
*@apiParam {string} email 邮箱[非必填].
*@apiParam {string} wechat 微信[非必填].
*@apiParam {string} app app[非必填].
*@apiParam {string} address 省市县地址[非必填].
*@apiParam {string} street 街道地址[非必填].
*@apiParam {string} sex 性别[非必填].
*@apiParam {string} passStrength 密码强度[非必填].
*@apiParam {string} avatar 用户头像[非必填].
*@apiParam {integer} type 用户类型 0普通用户 1管理员[非必填].
*@apiParam {integer} status 状态 默认0正常 1待审核 -1拉黑[非必填].
*@apiParam {string} description 描述/详情/备注[非必填].
*@apiParam {string} departmentId 所属部门id[非必填].
*@apiParam {string} departmentTitle 所属部门名称[非必填].
*@apiParam {string} department 所属部门[非必填].
*@apiParam {string} companyId 所属公司id[非必填].
*@apiParam {string} companyName 所属公司名称[非必填].
*@apiParam {integer} registerType 注册类型 默认0正常 1手动创建 2微信邀请 3批量导入[非必填].
*@apiParam {string} crmLxrId 联系人id[非必填].
*@apiParam {string} birth 生日[非必填].
*@apiParam {integer} defaultRole 导入数据时使用[非必填].
*@apiParam {string} creator 创建人[非必填].
*@apiParam {string} memberType 会员级别[非必填].
*@apiParam {string} expireTime 到期时间[非必填].
*@apiParam {string} contact 专属客服[非必填].
*@apiParam {string} contactPhone 客服电话[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/resetByMobile 通过短信重置密码
*@apiName 接口名518
*@apiGroup 用户接口
*@apiParam {string} mobile mobile[必填].
*@apiParam {string} password password[必填].
*@apiParam {string} passStrength passStrength[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/resetPass 重置密码
*@apiName 接口名519
*@apiGroup 用户接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/user/searchByName/{username} 通过用户名搜索用户
*@apiName 接口名520
*@apiGroup 用户接口
*@apiParam {string} username username[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "address": "string",
*                    "app": "string",
*                    "avatar": "string",
*                    "birth": "string",
*                    "companyId": "string",
*                    "companyName": "string",
*                    "contact": "string",
*                    "contactPhone": "string",
*                    "createBy": "string",
*                    "createTime": "string",
*                    "creator": "string",
*                    "crmLxrId": "string",
*                    "defaultRole": "integer",
*                    "delFlag": "integer",
*                    "department": "string",
*                    "departmentId": "string",
*                    "departmentTitle": "string",
*                    "description": "string",
*                    "email": "string",
*                    "expireTime": "string",
*                    "id": "string",
*                    "loginId": "string",
*                    "loginIdHash": "integer",
*                    "loginVer": "integer",
*                    "memberType": "string",
*                    "mobile": "string",
*                    "mobileHash": "integer",
*                    "mobileVer": "integer",
*                    "nickname": "string",
*                    "passStrength": "string",
*                    "password": "string",
*                    "permissions": [
*                          {
*                              "path": "string",
*                              "title": "string",
*                         },
*                    ],
*                    "pv": "array",
*                    "pwdCrypt": "string",
*                    "pwdSalt": "string",
*                    "pwdVer": "integer",
*                    "registerType": "integer",
*                    "roles": [
*                          {
*                              "description": "string",
*                              "id": "string",
*                              "name": "string",
*                         },
*                    ],
*                    "sex": "string",
*                    "status": "integer",
*                    "street": "string",
*                    "type": "integer",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "username": "string",
*                    "wechat": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/sendPassword 发送密码
*@apiName 接口名521
*@apiGroup 用户接口
*@apiParam {string} mobile mobile[非必填].
*@apiParam {string} lxr lxr[非必填].
*@apiParam {string} loginid loginid[非必填].
*@apiParam {string} pwd pwd[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/smsLogin 短信登录接口
*@apiName 接口名522
*@apiGroup 用户接口
*@apiParam {string} mobile mobile[必填].
*@apiParam {boolean} saveLogin saveLogin[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/user/unlock 解锁验证密码
*@apiName 接口名523
*@apiGroup 用户接口
*@apiParam {string} password password[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/userMemberMeta/delByIds 批量通过id删除
*@apiName 接口名524
*@apiGroup 员工--会员关系表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMemberMeta/get/{id} 通过id获取
*@apiName 接口名525
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "integer",
*               "isDeleted": "integer",
*               "saddress": "string",
*               "scode": "string",
*               "sfax": "string",
*               "sid": "string",
*               "smail": "string",
*               "smailpersonal": "string",
*               "smobile": "string",
*               "sname": "string",
*               "spostcode": "string",
*               "stel": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMemberMeta/getAll 获取全部数据
*@apiName 接口名526
*@apiGroup 员工--会员关系表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "id": "integer",
*                    "isDeleted": "integer",
*                    "saddress": "string",
*                    "scode": "string",
*                    "sfax": "string",
*                    "sid": "string",
*                    "smail": "string",
*                    "smailpersonal": "string",
*                    "smobile": "string",
*                    "sname": "string",
*                    "spostcode": "string",
*                    "stel": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMemberMeta/getByCondition 多条件分页获取
*@apiName 接口名527
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id description[非必填].
*@apiParam {string} staffId 客服ID[非必填].
*@apiParam {integer} memberId 采招网会员ID[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "integer",
*                         "isDeleted": "integer",
*                         "saddress": "string",
*                         "scode": "string",
*                         "sfax": "string",
*                         "sid": "string",
*                         "smail": "string",
*                         "smailpersonal": "string",
*                         "smobile": "string",
*                         "sname": "string",
*                         "spostcode": "string",
*                         "stel": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMemberMeta/getByMemberId 多条件分页获取
*@apiName 接口名528
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} memberId memberId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "integer",
*               "isDeleted": "integer",
*               "saddress": "string",
*               "scode": "string",
*               "sfax": "string",
*               "sid": "string",
*               "smail": "string",
*               "smailpersonal": "string",
*               "smobile": "string",
*               "sname": "string",
*               "spostcode": "string",
*               "stel": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMemberMeta/getByPage 分页获取
*@apiName 接口名529
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "integer",
*                         "isDeleted": "integer",
*                         "saddress": "string",
*                         "scode": "string",
*                         "sfax": "string",
*                         "sid": "string",
*                         "smail": "string",
*                         "smailpersonal": "string",
*                         "smobile": "string",
*                         "sname": "string",
*                         "spostcode": "string",
*                         "stel": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/userMemberMeta/save 保存数据
*@apiName 接口名530
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id description[非必填].
*@apiParam {string} staffId 客服ID[非必填].
*@apiParam {integer} memberId 采招网会员ID[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "integer",
*               "isDeleted": "integer",
*               "saddress": "string",
*               "scode": "string",
*               "sfax": "string",
*               "sid": "string",
*               "smail": "string",
*               "smailpersonal": "string",
*               "smobile": "string",
*               "sname": "string",
*               "spostcode": "string",
*               "stel": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/userMemberMeta/update 更新数据
*@apiName 接口名531
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id description[非必填].
*@apiParam {string} staffId 客服ID[非必填].
*@apiParam {integer} memberId 采招网会员ID[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "integer",
*               "isDeleted": "integer",
*               "saddress": "string",
*               "scode": "string",
*               "sfax": "string",
*               "sid": "string",
*               "smail": "string",
*               "smailpersonal": "string",
*               "smobile": "string",
*               "sname": "string",
*               "spostcode": "string",
*               "stel": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/userMeta/delByIds 批量通过id删除
*@apiName 接口名532
*@apiGroup 员工--会员关系表管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMeta/get/{id} 通过id获取
*@apiName 接口名533
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "integer",
*               "isDeleted": "integer",
*               "saddress": "string",
*               "scode": "string",
*               "sfax": "string",
*               "sid": "string",
*               "smail": "string",
*               "smailpersonal": "string",
*               "smobile": "string",
*               "sname": "string",
*               "spostcode": "string",
*               "stel": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMeta/getAll 获取全部数据
*@apiName 接口名534
*@apiGroup 员工--会员关系表管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "id": "integer",
*                    "isDeleted": "integer",
*                    "saddress": "string",
*                    "scode": "string",
*                    "sfax": "string",
*                    "sid": "string",
*                    "smail": "string",
*                    "smailpersonal": "string",
*                    "smobile": "string",
*                    "sname": "string",
*                    "spostcode": "string",
*                    "stel": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMeta/getByCondition 多条件分页获取
*@apiName 接口名535
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id description[非必填].
*@apiParam {string} sid description[非必填].
*@apiParam {string} scode description[非必填].
*@apiParam {string} sname description[非必填].
*@apiParam {string} saddress description[非必填].
*@apiParam {string} spostcode description[非必填].
*@apiParam {string} stel description[非必填].
*@apiParam {string} smobile description[非必填].
*@apiParam {string} smail description[非必填].
*@apiParam {string} smailpersonal description[非必填].
*@apiParam {string} sfax description[非必填].
*@apiParam {integer} isDeleted description[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "integer",
*                         "isDeleted": "integer",
*                         "saddress": "string",
*                         "scode": "string",
*                         "sfax": "string",
*                         "sid": "string",
*                         "smail": "string",
*                         "smailpersonal": "string",
*                         "smobile": "string",
*                         "sname": "string",
*                         "spostcode": "string",
*                         "stel": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userMeta/getByPage 分页获取
*@apiName 接口名536
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "id": "integer",
*                         "isDeleted": "integer",
*                         "saddress": "string",
*                         "scode": "string",
*                         "sfax": "string",
*                         "sid": "string",
*                         "smail": "string",
*                         "smailpersonal": "string",
*                         "smobile": "string",
*                         "sname": "string",
*                         "spostcode": "string",
*                         "stel": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/userMeta/save 保存数据
*@apiName 接口名537
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id description[非必填].
*@apiParam {string} sid description[非必填].
*@apiParam {string} scode description[非必填].
*@apiParam {string} sname description[非必填].
*@apiParam {string} saddress description[非必填].
*@apiParam {string} spostcode description[非必填].
*@apiParam {string} stel description[非必填].
*@apiParam {string} smobile description[非必填].
*@apiParam {string} smail description[非必填].
*@apiParam {string} smailpersonal description[非必填].
*@apiParam {string} sfax description[非必填].
*@apiParam {integer} isDeleted description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "integer",
*               "isDeleted": "integer",
*               "saddress": "string",
*               "scode": "string",
*               "sfax": "string",
*               "sid": "string",
*               "smail": "string",
*               "smailpersonal": "string",
*               "smobile": "string",
*               "sname": "string",
*               "spostcode": "string",
*               "stel": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/userMeta/update 更新数据
*@apiName 接口名538
*@apiGroup 员工--会员关系表管理接口
*@apiParam {integer} id description[非必填].
*@apiParam {string} sid description[非必填].
*@apiParam {string} scode description[非必填].
*@apiParam {string} sname description[非必填].
*@apiParam {string} saddress description[非必填].
*@apiParam {string} spostcode description[非必填].
*@apiParam {string} stel description[非必填].
*@apiParam {string} smobile description[非必填].
*@apiParam {string} smail description[非必填].
*@apiParam {string} smailpersonal description[非必填].
*@apiParam {string} sfax description[非必填].
*@apiParam {integer} isDeleted description[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "id": "integer",
*               "isDeleted": "integer",
*               "saddress": "string",
*               "scode": "string",
*               "sfax": "string",
*               "sid": "string",
*               "smail": "string",
*               "smailpersonal": "string",
*               "smobile": "string",
*               "sname": "string",
*               "spostcode": "string",
*               "stel": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/userRole/delByIds 批量通过id删除
*@apiName 接口名539
*@apiGroup 分类管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userRole/get/{id} 通过id获取
*@apiName 接口名540
*@apiGroup 分类管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "roleId": "string",
*               "roleName": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userRole/getAll 获取全部数据
*@apiName 接口名541
*@apiGroup 分类管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "id": "string",
*                    "roleId": "string",
*                    "roleName": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "userId": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userRole/getByCondition 多条件分页获取
*@apiName 接口名542
*@apiGroup 分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} userId 用户唯一id[非必填].
*@apiParam {string} roleId 角色唯一id[非必填].
*@apiParam {string} roleName 角色名[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "roleId": "string",
*                         "roleName": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/userRole/getByPage 分页获取
*@apiName 接口名543
*@apiGroup 分类管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "id": "string",
*                         "roleId": "string",
*                         "roleName": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/userRole/save 保存数据
*@apiName 接口名544
*@apiGroup 分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} userId 用户唯一id[非必填].
*@apiParam {string} roleId 角色唯一id[非必填].
*@apiParam {string} roleName 角色名[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "roleId": "string",
*               "roleName": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/userRole/update 更新数据
*@apiName 接口名545
*@apiGroup 分类管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} userId 用户唯一id[非必填].
*@apiParam {string} roleId 角色唯一id[非必填].
*@apiParam {string} roleName 角色名[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "id": "string",
*               "roleId": "string",
*               "roleName": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/wechat/notify 微信支付通知
*@apiName 接口名546
*@apiGroup 微信支付管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/wechat/pay 微信支付
*@apiName 接口名547
*@apiGroup 微信支付管理接口
*@apiParam {string} orderId orderId[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/wechatTicket/delByIds 批量通过id删除
*@apiName 接口名548
*@apiGroup 微信二维码管理接口
*@apiParam {array} ids ids[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": "object",
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/wechatTicket/get/{id} 通过id获取
*@apiName 接口名549
*@apiGroup 微信二维码管理接口
*@apiParam {string} id id[必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireTime": "string",
*               "expire_seconds": "integer",
*               "id": "string",
*               "ticket": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/wechatTicket/getAll 获取全部数据
*@apiName 接口名550
*@apiGroup 微信二维码管理接口
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": [
*                {
*                    "createBy": "string",
*                    "createTime": "string",
*                    "delFlag": "integer",
*                    "expireTime": "string",
*                    "expire_seconds": "integer",
*                    "id": "string",
*                    "ticket": "string",
*                    "updateBy": "string",
*                    "updateTime": "string",
*                    "url": "string",
*                    "userId": "string",
*               },
*          ],
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/wechatTicket/getByCondition 多条件分页获取
*@apiName 接口名551
*@apiGroup 微信二维码管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} ticket 获取的二维码ticket，凭借此ticket可以在有效时间内换取二维码.[非必填].
*@apiParam {integer} expireSeconds 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天）。[非必填].
*@apiParam {string} url 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片[非必填].
*@apiParam {string} userId 使用者id[非必填].
*@apiParam {string} expireTime 过期时间[非必填].
*@apiParam {string} startDate 起始日期[非必填].
*@apiParam {string} endDate 结束日期[非必填].
*@apiParam {string} status 是否到期 0 未到期　1 已到期[非必填].
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireTime": "string",
*                         "expire_seconds": "integer",
*                         "id": "string",
*                         "ticket": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {get} /studio/wechatTicket/getByPage 分页获取
*@apiName 接口名552
*@apiGroup 微信二维码管理接口
*@apiParam {integer} pageNumber 页号[非必填].
*@apiParam {integer} pageSize 页面大小[非必填].
*@apiParam {string} sort 排序字段[非必填].
*@apiParam {string} order 排序方式 asc/desc[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "content": [
*                     {
*                         "createBy": "string",
*                         "createTime": "string",
*                         "delFlag": "integer",
*                         "expireTime": "string",
*                         "expire_seconds": "integer",
*                         "id": "string",
*                         "ticket": "string",
*                         "updateBy": "string",
*                         "updateTime": "string",
*                         "url": "string",
*                         "userId": "string",
*                    },
*               ],
*               "empty": "boolean",
*               "first": "boolean",
*               "last": "boolean",
*               "number": "integer",
*               "numberOfElements": "integer",
*               "pageable": {
*                    "offset": "integer",
*                    "pageNumber": "integer",
*                    "pageSize": "integer",
*                    "paged": "boolean",
*                    "sort": {
*                         "empty": "boolean",
*                         "sorted": "boolean",
*                         "unsorted": "boolean",
*                    },
*                    "unpaged": "boolean",
*               },
*               "size": "integer",
*               "sort": {
*                    "empty": "boolean",
*                    "sorted": "boolean",
*                    "unsorted": "boolean",
*               },
*               "totalElements": "integer",
*               "totalPages": "integer",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {post} /studio/wechatTicket/save 保存数据
*@apiName 接口名553
*@apiGroup 微信二维码管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} ticket 获取的二维码ticket，凭借此ticket可以在有效时间内换取二维码.[非必填].
*@apiParam {integer} expireSeconds 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天）。[非必填].
*@apiParam {string} url 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片[非必填].
*@apiParam {string} userId 使用者id[非必填].
*@apiParam {string} expireTime 过期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireTime": "string",
*               "expire_seconds": "integer",
*               "id": "string",
*               "ticket": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /studio/wechatTicket/update 更新数据
*@apiName 接口名554
*@apiGroup 微信二维码管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} createBy 创建者[非必填].
*@apiParam {string} createTime 创建时间[非必填].
*@apiParam {string} updateBy 更新者[非必填].
*@apiParam {string} updateTime 更新时间[非必填].
*@apiParam {integer} delFlag 删除标志 默认0[非必填].
*@apiParam {string} ticket 获取的二维码ticket，凭借此ticket可以在有效时间内换取二维码.[非必填].
*@apiParam {integer} expireSeconds 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天）。[非必填].
*@apiParam {string} url 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片[非必填].
*@apiParam {string} userId 使用者id[非必填].
*@apiParam {string} expireTime 过期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "createBy": "string",
*               "createTime": "string",
*               "delFlag": "integer",
*               "expireTime": "string",
*               "expire_seconds": "integer",
*               "id": "string",
*               "ticket": "string",
*               "updateBy": "string",
*               "updateTime": "string",
*               "url": "string",
*               "userId": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/

/****
*@api {put} /update 更新数据
*@apiName 接口名555
*@apiGroup 老网站会员表管理接口
*@apiParam {string} id 唯一标识[非必填].
*@apiParam {string} companyName 企业名[非必填].
*@apiParam {integer} custRightGroup 会员级别 0 免费　1 入门 2 标准　3　VIP[非必填].
*@apiParam {string} payEndDate 会员到期时间[非必填].
*@apiSuccessExample Success-Response:
*HTTP/1.1 200 OK
*{
*          "code": "integer",
*          "message": "string",
*          "result": {
*               "companyName": "string",
*               "custRightGroup": "integer",
*               "id": "string",
*               "payEndDate": "string",
*          },
*          "success": "boolean",
*          "timestamp": "integer",
*}

*@apiErrorExample Error-Response:
*HTTP/1.1 code201 Created
*@apiErrorExample Error-Response:
*HTTP/1.1 code401 Unauthorized
*@apiErrorExample Error-Response:
*HTTP/1.1 code403 Forbidden
*@apiErrorExample Error-Response:
*HTTP/1.1 code404 Not Found
*/
