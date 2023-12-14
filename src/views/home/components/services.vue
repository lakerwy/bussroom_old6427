<template>
  <div>
    <Card>
      <p slot="title" class="card-title">
        <!-- <Icon type="md-map" style="margin-right:5px"></Icon> -->
        <span style="font-size: 18px; font-weight: bold">定制服务</span>
      </p>
      <div style="widht: 100%; height: 170px; padding: -20px">
        <Row :gutter="16">
          <Col :span="8">
            <div class="service">
              <div class="serviceTitle">
                <img src="@/assets/lishi_03.jpg" alt="" />
                <span>历史信息查询</span>
              </div>
              <div class="serviceContent">
                深耕招投标行业十多年，积累了庞大、全面的信息数据中心；专业信息查询人员，快速、精准定位客户需求，为客户提供超值服务。
                <p style="line-height:24px;">采钻兑换 2000采钻/条</p>
              </div>
            </div>
          </Col>
          <Col :span="8">
            <div class="service">
              <div class="serviceTitle">
                <img src="@/assets/qianqi_03.jpg" alt="" />
                <span>前期项目大全</span>
              </div>
              <div class="serviceContent">
                每周定时汇集各行业拟在建项目信息，及时呈现行业发展现状、预测发展趋势。帮助企业挖掘精准市场，调整业务布局，掘金商海。
                <p style="line-height:24px;">采钻兑换 80W采钻/行业/年</p>
              </div>
            </div>
          </Col>
          <Col :span="8">
            <div class="service">
              <div class="serviceTitle">
                <img src="@/assets/weixing_06.jpg" alt="" />
                <span>行业周刊、月报</span>
              </div>
              <div class="serviceContent">
                行业内工程项目新闻、用地新闻、政策性变化、地区变化等服务，便于客户及时、全面、准确的掌握行业信息和动态变化。
              </div>
            </div>
          </Col>
        </Row>
        <Row :gutter="16" style="margin-top: 15px">
          <Col :span="8">
            <div class="service">
              <div class="serviceTitle">
                <img src="@/assets/gexinghua_16.jpg" alt="" />
                <span>个性化信息汇总</span>
              </div>
              <div class="serviceContent">
                按照地区、行业等精确汇总招标、中标、项目信息。招投标行业十多年的信息积累，为企业提供精准、全面的信息。
                <p style="line-height:24px;">采钻兑换	2W采钻/次（每次不超过100条）</p>
              </div>
            </div>
          </Col>
          <Col :span="8">
            <div class="service">
              <div class="serviceTitle">
                <img src="@/assets/dingzhi_15.jpg" alt="" />
                <span>定制招中标前期项目汇总</span>
              </div>
              <div class="serviceContent">
                根据用户需求精选招中标、项目信息；将设备信息、中标金额、中标单位等结构化。为企业提供精细的市场信息，便于快速拓展市场。
                <p style="line-height:24px;">采钻兑换	20W采钻/次</p>
              </div>
            </div>
          </Col>
          <Col :span="8">
            <div class="service">
              <div class="serviceTitle">
                <img src="@/assets/hangye_15.jpg" alt="" />
                <span>数据结构化</span>
              </div>
              <div class="serviceContent">
                VIP特权服务：
                VIP会员可免费获得1次上限5000条招中标数据/年，按照字段进行数据结构化，超出条数需另行收费。
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: "services",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang='less' scoped>
.service {
  height: 80px;
  cursor: pointer;
  width: 100%;
  position: relative;
  overflow: hidden;
  .serviceContent {
    height: 80px;
    padding: 5px;
    z-index: 10;
    font-size: 12px;
    position: relative;
    transform: translateX(-100% - 1px);
    background: url("../../../assets/hui_03.png");
    overflow: hidden;
    color: #fff;
    transition: transform 0.8s;
    -moz-transition: transform 0.8s; /* Firefox 4 */
    -webkit-transition: transform 0.8s; /* Safari 和 Chrome */
    -o-transition: transform 0.8s;
  }
  .serviceTitle {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    color: #333;
    span {
      margin-left: 8px;
      font-size: 16px;
    }
    img{
      width: 40px;
      height: 40px;
    }
  }
}

.service:hover .serviceContent {
  transform: translateX(0px);
}
</style>