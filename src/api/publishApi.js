import {
  getRequest,
  postRequest,postBodyRequest
} from '@/libs/axios';
/* 
  首页
*/
// 30天发布统计
export const getPublishCount = (params = {}) => {
  return getRequest('/zizhu/home/publish_count', params)
}

// 提醒
export const getMessages = (params = {}) => {
  return getRequest('/zizhu/home/showMessage', params)
}

// 所有公告
export const getAllNotice = (params = {}) => {
  return postBodyRequest('/zizhu/home/all_notice', params)
}

/* 
  项目
*/
// 查询项目列表
export const getProjectList = (params = {}) => {
  return getRequest('/project/project_list', params)
}

// 查询项目关联公告列表
export const getRelationList = (params = {}) => {
  return getRequest('/project/relate_notie_list', params)
}

// 新建项目-返回项目编号
export const getProjectNum = (params = {}) => {
  return getRequest('/project/get_project_number', params)
}

// 新建/编辑招标项目
export const saveProject = (params = {}) => {
  return postBodyRequest('/project/save_project', params)
}

// 资金来源
export const saveFund = (params = {}) => {
  return postBodyRequest('/project/save_fund', params)
}

// 查询项目信息/回显
export const projectView = (params = {}) => {
  return getRequest('/project/project_view', params)
}

// 新建/编辑 招标人/招标代理机构信息
export const saveAgent = (params = {}) => {
  // return postBodyRequest('/project/save_agent', params);
  return postBodyRequest('/project/save_agent', params);
}

// 查询 招标人/招标代理机构信息/回显
export const agentView = (params = {}) => {
  return getRequest('/project/agent_view', params)
}

// 项目标段信息列表
export const getBidList = (params = {}) => {
  return getRequest('/project/bidsection_list', params)
}

// 获取标段编号
export const getBidNum = (params = {}) => {
  return getRequest('/project/get_section_number', params)
}

// 新增/编辑 标段信息
export const saveProjectBid = (params = {}) => {
  return postBodyRequest('/project/save_bidsection', params)
}

// 删除标段
export const delProBidId = (params = {}) => {
  return getRequest('/project/bidsection_delete', params)
}

// 项目提交
export const projectSubmit = (params = {}) => {
  return getRequest('/project/project_submit', params)
}

// 项目详情
export const projectDetail = (params = {}) => {
  return getRequest('/project/project_detail', params)
}

/* 
  招标公告
*/
// 根据公告名称查询招标公告列表
export const getTenderList = (params = {}) => {
  return getRequest('/notice/getAll',params)
}

// 获取所有的已提交的项目
export const getAllProjects = (params = {}) => {
  return getRequest('/notice/findProjects',params)
}

// 新建招标公告第一步
export const tenderFirst = (params = {}) => {
  return postBodyRequest('/notice/save', params)
}

// 回显公告每一步信息
export const getTenderStep = (id,params = {}) => {
  return getRequest('/notice/findNotice/' + id, params)
}

// 获取招标人代理机构信息 （第三步）
export const getBidAgentInfo = (id,params = {}) => {
  return getRequest('/notice/findBidAgentInfo/' + id, params)
}

// 根据主键id返回指定项目的标段信息包
export const getBidProList = (id,params = {}) => {
  return getRequest('/notice/findSectionsForProject/' + id , params)
}

// 选择标段
export const saveBidsList = (params = {}) => {
  return getRequest('/notice/saveNoticeBidSection', params)
}

// 根据主键id返回招标公告标段信息包
export const getBidsList = (id,params = {}) => {
  return getRequest('/notice/findSectionsForNotice/' + id, params)
}

// 保存标段信息
export const saveTenderBid = (params = {}) => {
  return postBodyRequest('/notice/saveSectionInfo', params)
}

// 招标公告：完成创建公告
export const saveBuildNotice = (params = {}) => {
  return getRequest('/notice/buildNotice', params)
}

// 招标公告：预览
export const tenderPreView = (id, params = {}) => {
  return getRequest('/notice/findPreviewInfo/' + id, params)
}

// 招标公告：变更公告
export const changeNotice = (params = {}) => {
  return postBodyRequest('/notice/changeNotice', params)
}

// 招标公告：变更公告回显修改
export const saveChangeNotice = (params = {}) => {
  return postBodyRequest('/notice/saveChangeNotice', params)
}

// 招标公告：废标
export const invalidNotice = (params = {}) => {
  return postBodyRequest('/notice/invalidNotice', params)
}

// 招标公告：回显再修改废标
export const saveInvalidNotice = (params = {}) => {
  return postBodyRequest('/notice/saveInvalidNotice',params)
}

/* 
  资格预审
*/
// 资格预审:根据公告名称查询资格预审公告列表
export const getAllPreList = (params = {}) => {
  return getRequest('/qualification/getAll', params)
}

// 资格预审:保存第一、二步
export const savePreFirst = (params = {}) => {
  return postBodyRequest('/qualification/save', params)
}

// 资格预审:回显第一、二步
export const viewPreFirst = (id, params = {}) => {
  return getRequest('/qualification/findNotice/' + id, params)
}

// 资格预审:回显第三步信息
export const viewPreThird = (id, params = {}) => {
  return getRequest('/qualification/findBidAgentInfo/' + id, params)
}

// 资格预审:第四步 保存标段
export const savePreFourth = (params = {}) => {
  return getRequest('/qualification/saveNoticeBidSection', params)
}

// 资格预审:第四步 回显已选择的标段
export const viewPreFourth = (id,params = {}) => {
  return getRequest('/qualification/findSectionsForBidNotice/' +id, params)
}

// 资格预审:第五步 保存标段基本信息
export const savePreFive = (params = {}) => {
  return postBodyRequest('/qualification/saveSectionInfo', params)
}

// 资格预审
export const prePreView = (id, params = {}) => {
  return getRequest('/qualification/findPreviewInfo/' + id, params)
}

// 资格预审变更：第一步 保存信息
export const savePreChange = (params = {}) => {
  return postBodyRequest('/qualification/changeNotice', params)
}

// 资格预审变更：第一步 回显后编辑
export const savePreChangeEdit = (params = {}) => {
  return postBodyRequest('/qualification/saveChangeNotice', params)
}

// 资格预审：废标
export const invalidPre= (params = {}) => {
  return postBodyRequest('/qualification/invalidNotice', params)
}

// 资格预审：回显后保存废标
export const saveInvalidPre= (params = {}) => {
  return postBodyRequest('/qualification/saveInvalidNotice', params)
}

/* 
  中标候选人
*/
// 根据公告名称查询中标候选人公示列表
export const getCandidateList = (params = {}) => {
  return getRequest('/candidate/getAll', params)
}

// 查询（已提交）招标公告的下拉列表
export const getCanTenderList = (params = {}) => {
  return getRequest('/candidate/findBidNotice', params)
}

// 中标候选人:回显第一步的信息
export const viewCanInfo = (id, params = {}) => {
  return getRequest('/candidate/findNotice/' + id, params)
}

// 中标候选人公示第一步
export const saveCanFirst = (params = {}) => {
  return postBodyRequest('/candidate/save', params)
}

// 中标候选人回显招标代理机构
export const viewCanAgent = (id ,params = {}) => {
  return getRequest('/candidate/findBidAgentInfo/' + id, params)
}

// 中标候选人第三步:显示标段
export const findCanBids = (id ,params = {}) => {
  return getRequest('/candidate/findSectionsForBidNotice/' + id, params)
}

// 中标候选人第三步：保存选中标段
export const saveCanBids = (params = {}) => {
  return getRequest('/candidate/saveNoticeBidSection', params)
}

// 中标候选人第四步：回显选中的标段
export const viewCanBids = (id,params = {}) => {
  return getRequest('/candidate/findSectionsForId/' + id, params)
}

// 中标候选人第四步：添加中标候选人及项目负责人信息
export const saveCanProInfo = (params = {}) => {
  return postBodyRequest('/candidate/saveCandidate', params)
}

// 中标候选人第四步：删除中标候选人
export const removeCanBid = (id, params = {}) => {
  return getRequest('/candidate/deleteCandidate/' + id, params)
}

// 中标候选人:建项
export const buildCandidate = (params = {}) => {
  return getRequest('/candidate/buildNotice', params)
}

// 中标候选人：预览
export const canPreView = (id, params = {}) => {
  return getRequest('/candidate/findPreviewInfo/' + id, params)
}

// 中标候选人:发变更
export const changeCandidate = (params = {}) => {
  return postBodyRequest('/candidate/changeNotice', params)
}

// 中标候选人:变更回显变更
export const saveChangeCandidate = (params = {}) => {
  return postBodyRequest('/candidate/saveChangeNotice', params)
}

// 中标候选人：废标
export const invalidCan = (params = {}) => {
  return postBodyRequest('/candidate/invalidNotice', params)
}

// 中标候选人：回显后保存废标
export const saveInvalidCan = (params = {}) => {
  return postBodyRequest('/candidate/saveInvalidNotice', params)
}

/* 
  中标结果
*/
// 中标结果：公示列表
export const getResultAll = (params = {}) => {
  return getRequest('/result/getAll', params)
}

// 中标结果：第一步 保存
export const saveResultFirst = (params = {}) => {
  return postBodyRequest('/result/save', params)
}

// 中标结果：第一步 回显
export const viewResultFirst = (id, params = {}) => {
  return getRequest( '/result/findNotice/' + id, params)
}

// 中标结果：回显第二步
export const viewResultSec = (id, params = {}) => {
  return getRequest('/result/findBidAgentInfo/' + id, params)
}

// 中标结果：回显关联公告的标段
export const viewResultBids = (id, params = {}) => {
  return getRequest('/result/findSectionsForBidNotice/' + id, params)
}

// 中标结果：回显已关联的标段
export const viewResultThird= (id, params = {}) => {
  return getRequest('/result/findSectionsForId/' + id, params)
}

// 中标结果：第四步 保存中标人信息
export const saveResultEr= (params = {}) => {
  return postBodyRequest('/result/saveResult', params)
}

// 中标结果：预览
export const resultPreView = (id,params = {}) => {
  return getRequest('/result/findPreviewInfo/' + id, params)
}

// 中标结果：第四步 删除中标人信息
export const removeResultEr= (id, params = {}) => {
  return getRequest('/result/deleteCandidate/' + id, params)
}

// 中标结果：发变更 保存第一步
export const saveChangeResult = (params = {}) => {
  return postBodyRequest( '/result/changeNotice', params)
}

// 中标结果：发变更 回显保存第一步
export const saveChangeRes = (params = {}) => {
  return postBodyRequest('/result/saveChangeNotice', params)
}

// 中标结果：废标
export const invalidResult = (params = {}) => {
  return postBodyRequest('/result/invalidNotice', params)
}

// 中标结果：回显后保存废标
export const saveInvalidResult = (params = {}) => {
  return postBodyRequest('/result/saveInvalidNotice', params)
}

/* 
  内网详情
*/
export const getDetail = (id, params = {}) => {
  return getRequest('/notice/findNoticeDetailsById/' + id, params)
}

// 外网详情
export const getDetailExt = (id, params = {}) => {
  return getRequest('/notice/findNoticeDetailsByIdForExternal/' + id, params)
}

/* 
  文件上传
*/
// 文件上传
export const uploadFile = (params = {}) => {
  return postBodyRequest('/file/upload', params)
}

export const uploadUrl = 'https://hive.esep.cn/studio/file/upload'
// export const uploadUrl = '/studio/file/upload'

// 文件回显
export const viewFiles = (params = {}) => {
  return getRequest('/file/getAllByNoticeId', params)
}

// 删除文件
export const removeFileById = (params = {}) => {
  return getRequest('/file/deleteByFileId', params)
}

/* 自主招标类项目 */
export const getAllByCriteria = (params = {}) => {
  return postBodyRequest( '/notice/getAllByCriteria', params)
}

/* 清空标段包 */
export const deleteNoticeBidSection = (params = {}) => {
  return getRequest('/notice/deleteNoticeBidSection', params)
}

/* 
  招标公告 第五步：保存标段包信息 saveSectionInfo
*/
export const saveSectionInfo = (params = {}) => {
  return postBodyRequest('/notice/saveSectionInfo', params)
}

/* 
  代理人信息
*/
export const saveBidAgentInfo = (params = {}) => {
  return postBodyRequest('/notice/saveBidAgentInfoForNotice', params) 
}

export const findBidAgentInfoForNotice = (id,params = {}) => {
  return getRequest('/notice/findBidAgentInfoForNotice/' + id, params)
}

/* 选择标段 */
// 保存
export const saveSectionExtend = (params = {}) => {
  return getRequest('/notice/saveSectionExtend', params)
}
export const findEverySectionsForNotice = (id,params = {}) => {
  return getRequest('/notice/findEverySectionsForNotice/' + id,params)
}


/* 中标候选人 --- 标段*/ 
export const saveCanSectionExtend = (params = {}) => {
  return getRequest('/candidate/saveSectionExtend', params)

}
export const findCanSectionsForNotice = (id,params = {}) => {
  return getRequest('/candidate/findSectionsForNotice/' + id, params)
}
export const checkSort = (params = {}) => {
  return getRequest('/candidate/checkSort', params)
}