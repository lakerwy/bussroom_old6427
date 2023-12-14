import REG from './commonExp';
/**
 * 用户名
 * @param rule 验证规则（不含特殊字符）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateUsername = (rule, value, callback) => {
  var reg = /^[a-zA-Z0-9_\u4e00-\u9fa5]{1,16}$/;
  if (value.length > 16) {
    callback(new Error('长度不能超过16个字符'));
  } else if (!reg.test(value)) {
    callback(new Error('仅支持大小写英文、中文和下划线_'));
  } else {
    callback();
  }
};

export const validateTel = (rule, value, callback) => {
  // 座机号验证
  var a = /^(0\d{2,3}-\d{7,8})$/;
  if (a.test(value)) {
    callback();
  } else {
    callback(new Error(`请输入正确格式的电话号码"区号-号码"`));
  }
};

/**
 * 密码格式验证
 * @param rule 验证规则（不少于6位）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validatePassword = (rule, value, callback) => {
  if (value.length < 6) {
    callback(new Error('密码长度不得小于6位'));
  } else {
    callback();
  }
};

/**
 * 手机号码格式验证
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateMobile = (rule, value, callback) => {
  var reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (!reg.test(value)) {
    callback(new Error('手机号格式错误'));
  } else {
    callback();
  }
};

/**
 * 身份证号码格式验证
 * @param rule 验证规则（是否满足18位）
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateIDCard = (rule, value, callback) => {
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (!reg.test(value)) {
    callback(new Error('身份证号码格式错误'));
  } else {
    callback();
  }
};

export const checkEmpty = (rule, value, callback) => {
  var reg = /^[^ ]+$/;
  if (!reg.test(value)) {
    callback(new Error('不能包含空格'));
  } else {
    callback();
  }
};

// 信息发布平台校验规则
/**
 * 字符非法校验
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateFault = (rule, value, callback) => {
  if (
    value.match(REG.reg.chinese) == null &&
    value.match(REG.reg.english) == null
  ) {
    callback(new Error("输入内容包含非法字符，请重新输入！"));
  }else {
    callback()
  }
};

/**
 * 特殊字符校验
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateSpecial = (rule, value, callback) => {
  if (value.match(REG.reg.particular) !== null) {
    callback(new Error("输入内容包含特殊字符，请去除！"));
  }else {
    callback()
  }
};

export const validateSpecial1 = (rule, value, callback) => {
  if (value.match(REG.reg.particular1) !== null) {
    callback(new Error("输入关键词包含特殊符号，删除后可查询。"));
  }else {
    callback()
  }
};
/**
 * 机构编码格式验证
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateCode = (rule, value, callback) => {
  if(value.length !== 18) {
    callback(new Error("请输入18位信用代码!"))
  }else if (value.match(REG.reg.code) == null) {
    callback(new Error("只能输入阿拉伯数字或英文字母！"));
  } else {
    callback();
  }
};

/**
 * 邮箱格式验证
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateEmail = (rule, value, callback) => {
  if (value.match(REG.reg.email) == null) {
    callback(new Error("输入的邮箱格式有误,请重新输入！"));
  } else {
    callback();
  }
};

/**
 * 手机号格式验证
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validatePhone = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入手机号！"));
  } else if (value.length !== 11) {
    callback(new Error("请输入11位手机号！"));
  } else if (value.match(REG.reg.telphone) == null) {
    callback(new Error("该输入正确的手机号码！"));
  } else {
    callback();
  }
};

/**
 * 联系电话格式验证
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validateContactTel = (rule, value, callback) => {
  if (
    value.match(REG.reg.telphone) == null &&
    value.match(REG.reg.fixtel) === null
  ) {
    callback(new Error("请输入正确的联系电话！"));
  } else {
    callback();
  }
};

/**
 * 金额格式验证
 * @param rule 验证规则
 * @param value 需要验证的值
 * @param callback 回调函数
 */
export const validatePrice = (rule, value, callback) => {
  if (value === "") {
    callback();
  } else if (value.match(REG.reg.price) == null) {
    callback(new Error("请输入合法的金额！"));
  } else {
    callback();
  }
};
