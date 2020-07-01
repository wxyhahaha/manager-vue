<template>
  <div class="checklist">
    <div class="menu">
      <div class="firstMenu">
        <div class="menuMain"
             v-for="menu in menuList"
             :key="menu.id"
             @mouseenter="makeChildPop(menu.id)"
             >
          {{menu.title}}
        </div>
      </div>
      <div class="secondMenu">
        <div v-for="(menu, activeIdx) in menuList" :key="1+menu.id" v-show="activeChildPop === activeIdx">
          <div class="childMenu"
               v-for="(childMenu, idx) in menu.childMenu"
               :key="idx"
               @mouseenter="makeChildNodePop(childMenu.id)">
          {{childMenu.title}}
        </div>
        </div>
      </div>
      <div class="thirdMenu">
        <div v-for="menu in menuList">
          <div v-for="(childMenu, activeChildIdx) in menu.childMenu" v-show="activeChildNodePop === childMenu.id" >
            <div class="childMenuNode"
                 v-for="childMenuNode in childMenu.childMenuNode">
              {{childMenuNode.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeChildPop: '',
      activeChildNodePop: '',
      menuList: [{
        id: 0,
        title: '岗位管理',
        childMenu: [{
            id: '0-0',
          title: '岗位1',
          childMenuNode: [{
            title: '岗位1子级1'
          }]
        },{
          id: '0-1',
          title: '岗位2',
          childMenuNode: [{
            title: '岗位2子级1'
          },{
            title: '岗位2子级2'
          }]
        },{
        id: '0-2',
          title: '岗位3',
          childMenuNode: [{
            title: '岗位3子级1'
          },{
            title: '岗位3子级2'
          }]
        }]
      },{
        id: 1,
        title: '安全防护',
        childMenu: [{
            id: '1-0',
          title: '安全防护1',
          childMenuNode: [{
            title: '安全防护1子级1'
          },{
            title: '安全防护1子级2'
          }]
        },{
            id: '1-1',
          title: '安全防护2',
          childMenuNode: [{
            title: '安全防护2子级1'
          }]
        },{
            id: '1-2',
          title: '安全防护3',
        }]
      }]
    }
  },
  methods: {
    makeChildPop (id) {
      this.activeChildPop = id
      this.activeChildNodePop = ''
    },
    // cancelChildPop (id) {
    //   this.activePop = ''
    // },
    makeChildNodePop (id) {
      this.activeChildNodePop = id
      console.log(id)
    }
  }
}
</script>

<style scoped>
.checklist {
  height: 100%;
  padding: 10px;
  margin-bottom: 50px;
}
.firstMenu {
  float: left;
  width: 180px;
}
.secondMenu {
  float: left;
}
.thirdMenu {
  float: left;
}
/* .menuMain {
  position: relative;
  background: #E9EFF3;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  text-align: left;
  margin-bottom: 4px;

  &::after {
    display: block;
    content: '>';
    position: absolute;
    top: 50%;
    right: 5px;
    z-index: 999;
    transform: translateY(-50%)
  }
}
.childMenu,
.childMenuNode {
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  border: 1px solid #ccc;
} */
</style>

