"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      picUrl: "https://www.dluserver.cn:8080/api/files/download?fileId=567&token=28b0b144599343d0ab634d7040bb5dc5&preview=true"
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.picUrl
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
