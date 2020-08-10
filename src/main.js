import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import '@/assets/css/animate.min.css'
Vue.config.productionTip = false
import {goAnchor,GetQueryString} from './assets/js/common.js';
//import Antd from 'ant-design-vue'
import { Menu,Table } from 'ant-design-vue';
Vue.use(Menu);
Vue.use(Table);

import 'ant-design-vue/dist/antd.css'

import 'swiper/css/swiper.css'

new Vue({
  router,
  store,
  render: h => h(App),
   mounted:function(){//解决跳转到新页面不默认固定在顶部的bug

      this.$router.afterEach((to, from, next) => {

          window.scrollTo(0, 0)

      })

    },

     methods:{

        goAnchor,

        GetQueryString,

      },

      watch:{

        '$route.query':function(newVal,oldVal){

          var maodian = newVal.maodian;

          if(maodian){

            this.goAnchor('#'+maodian);

          }

        }

      }

}).$mount('#app')
