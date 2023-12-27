import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
// export const navpageRouter = {
//     path: '/navpage',
//     name: 'navpage',
//     meta: {
//         title: '登录 - 我的商务室 '
//     },
//     component: () => import('@/views/navPage.vue')
//     // component: () => import('@/views/home/homepage.vue')
// };

export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录 - 我的商务室 '
    },
    component: () => import('@/views/login.vue')
};

export const indexRouter = {
    path: '/index',
    name: 'index',
    meta: {
        title: '登录 - 我的商务室 '
    },
    component: () => import('@/views/index.vue')
};


export const registRouter = {
    path: '/regist',
    name: 'regist',
    meta: {
        title: '注册 - 我的商务室'
    },
    component: () => import('@/views/regist.vue')
};

export const registResult = {
    path: '/regist-result',
    name: 'regist-result',
    meta: {
        title: '注册结果 - 我的商务室'
    },
    component: () => import('@/views/regist-result.vue')
};

export const reset = {
    path: '/reset',
    name: 'reset',
    meta: {
        title: '重置密码 - 我的商务室'
    },
    component: () => import('@/views/reset.vue')
};

// export const secondInfo = {
//     path: '/second-info/:infoId',
//     name: 'second-info',
//     meta: {
//         title: 'cms - 二手临时信息'
//     },
//     component: () => import('@/views/SecondInfo.vue')
// };

export const relateRouter = {
    path: '/relate',
    name: 'relate',
    meta: {
        title: '绑定账号 - 我的商务室 '
    },
    component: () => import('@/views/relate.vue')
};

export const authorizeRouter = {
    path: '/authorize',
    name: 'authorize',
    meta: {
        title: ' 我的商务室 '
    },
    component: () => import('@/views/authorize.vue')
};

// export const page404 = {
//     path: '/*',
//     name: 'error-404',
//     meta: {
//         title: '404-页面不存在'
//     },
//     component: () => import('@/views/error-page/404.vue')
// };

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'download', title: '投标工具下载', name: 'download', component: () => import('@/views/collect/download.vue') },
        { path: '/project-info', title: '项目详情', name: 'projectInfo', component: () => import('@/views/projectManage/info.vue') },
        { path: 'project-create', title: '项目详情', name: 'projectCreate', component: () => import('@/views/projectManage/create.vue') },
        { path: 'change-pass', title: '密码管理', name: 'change_pass', component: () => import('@/views/change-pass/change-pass.vue') },
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/my-message/message.vue') },
        { path: 'add', title: '添加', name: 'add', component: () => import('@/views/xboot-vue-template/new-window/add.vue') },
        { path: 'edit', title: '编辑', name: 'edit', component: () => import('@/views/xboot-vue-template/new-window/edit.vue') },
        { path: 'leave', title: '请假申请', name: 'leave', component: () => import('@/views/activiti/business/leave.vue') },
        { path: 'historic-detail', title: '流程进度历史详情', name: 'historic_detail', component: () => import('@/views/activiti/historic-detail/historicDetail.vue') },


        { path: '/infoPublish/stateList', title: '所有公告', name: 'stateList', component: () => import('@/views/infoPublish/infoHome/stateList.vue') },
        { path: '/project/addProject', title: '新建项目', name: 'addProject', component: () => import('@/views/infoPublish/project/addProject.vue') },
        { path: '/project/editProject', title: '编辑项目', name: 'editProject', component: () => import('@/views/infoPublish/project/editProject.vue') },
        { path: '/project/projectDetail', title: '项目详情', name: 'projectDetail', component: () => import('@/views/infoPublish/project/projectDetail.vue') },

        { path: '/tender/tenderDetail', title: '招标公告详情', name: 'tenderDetail', component: () => import('@/views/infoPublish/tender/tenderDetail.vue') },
        { path: '/tender/addTender', title: '新建招标公告', name: 'addTender', component: () => import('@/views/infoPublish/tender/addTender.vue') },
        { path: '/tender/editTender', title: '编辑招标公告', name: 'editTender', component: () => import('@/views/infoPublish/tender/editTender.vue') },
        { path: '/tender/correctTenderStep', title: '变更招标公告', name: 'correctTenderStep', component: () => import('@/views/infoPublish/tender/correctTenderStep.vue') },
        { path: '/tender/abandonTender', title: '新建废标公告', name: 'abandonTender', component: () => import('@/views/infoPublish/tender/abandonTender.vue') },
        { path: '/tender/editCorrectTender', title: '编辑变更招标公告', name: 'editCorrectTender', component: () => import('@/views/infoPublish/tender/editCorrectTender.vue') },
        { path: '/tender/editAbandonTender', title: '编辑废标招标公告', name: 'editAbandonTender', component: () => import('@/views/infoPublish/tender/editAbandonTender.vue') },

        { path: '/candidate/candidateDetail', title: '中标候选人公示详情', name: 'candidateDetail', component: () => import('@/views/infoPublish/candidate/candidateDetail.vue') },
        { path: '/candidate/addCandidate', title: '新建中标候选人公示', name: 'addCandidate', component: () => import('@/views/infoPublish/candidate/addCandidate.vue') },
        { path: '/candidate/editCandidate', title: '编辑中标候选人公示', name: 'editCandidate', component: () => import('@/views/infoPublish/candidate/editCandidate.vue') },
        { path: '/candidate/correctCandidate', title: '变更中标候选人公示', name: 'correctCandidate', component: () => import('@/views/infoPublish/candidate/correctCandidate.vue') },
        { path: '/candidate/abandonCandidate', title: '新建废标候选人公示', name: 'abandonCandidate', component: () => import('@/views/infoPublish/candidate/abandonCandidate.vue') },
        {path: '/candidate/editCorrect', title: '编辑变更中标候选人公示', name: 'editCorrectCan', component: () => import('@/views/infoPublish/candidate/correctEdit.vue')},
        {path: '/candidate/editAbandon', title: '编辑废标中标候选人公示', name: 'editAbandonCan', component: () => import('@/views/infoPublish/candidate/abandonEdit.vue')},

        { path: '/result/resultDetail', title: '中标结果公告详情', name: 'resultDetail', component: () => import('@/views/infoPublish/result/resultDetail.vue') },
        { path: '/result/addResult', title: '新建中标结果公告', name: 'addResult', component: () => import('@/views/infoPublish/result/addResult.vue') },
        { path: '/result/editResult', title: '编辑中标结果公告', name: 'editResult', component: () => import('@/views/infoPublish/result/editResult.vue') },
        { path: '/result/correctResult', title: '新建变更中标结果公告', name: 'correctResult', component: () => import('@/views/infoPublish/result/correctResult.vue') },
        { path: '/result/abandonResult', title: '新建废标中标结果公告', name: 'abandonResult', component: () => import('@/views/infoPublish/result/abandonResult.vue') },
        { path: '/result/editCorrectResult', title: '编辑变更中标结果公告', name: 'editCorrectResult', component: () => import('@/views/infoPublish/result/editCorrectResult.vue') },
        { path: '/result/editAbandonResult', title: '编辑废标中标结果公告', name: 'editAbandonResult', component: () => import('@/views/infoPublish/result/editAbandonResult.vue') },

        { path: '/prequalification/prequalificationDetail', title: '资格预审公告详情', name: 'prequalificationDetail', component: () => import('@/views/infoPublish/prequalification/prequalificationDetail.vue') },
        { path: '/prequalification/prequalificationCorrect', title: '变更资格预审公告', name: 'correctPre', component: () => import('@/views/infoPublish/prequalification/prequalificationCorrect.vue') },
        { path: '/prequalification/abandonPrequalification', title: '新建废标资格预审公告', name: 'abandonPre', component: () => import('@/views/infoPublish/prequalification/abandonPrequalification.vue') },
        { path: '/prequalification/addPrequalification', title: '新建资格预审公告', name: 'addPrequalification', component: () => import('@/views/infoPublish/prequalification/addPrequalification.vue') },
        { path: '/prequalification/editPrequalification', title: '编辑资格预审公告', name: 'editPrequalification', component: () => import('@/views/infoPublish/prequalification/editPrequalification.vue') },
        { path: '/prequalification/editCorrectPre', title: '编辑变更资格预审公告', name: 'editCorrectPre', component: () => import('@/views/infoPublish/prequalification/editCorrectPre.vue') },
        { path: '/prequalification/editAbandonPre', title: '编辑废标资格预审公告', name: 'editAbandonPre', component: () => import('@/views/infoPublish/prequalification/editAbandonPre.vue') },

        { path: '/bidder/bidderDetail', title: '投标人详情', name: 'bidderDetail', component: () => import('@/views/infoPublish/bidder/bidderDetail.vue') },


        { path: '/infoPublish/noticeDetail', title: '公告详情', name: 'noticeDetail', component: () => import('@/views/infoPublish/tenderDetail/detail.vue') },
        { path: '/infoPublishOut/autoDetail', title: '自主招标类项目详情', name: 'autoDetail', component: () => import('@/views/infoPublishOut/autoDetail.vue') },

    ]
};

export const appRouter = [];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    // secondInfo,
    // navpageRouter,
    loginRouter,
    indexRouter,
    registRouter,
    registResult,
    reset,
    relateRouter,
    authorizeRouter,
    otherRouter,
    locking,
    ...appRouter,
    page500,
    page403,
];
