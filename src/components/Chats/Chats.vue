<template>
  <div>
    <div v-for="row in contatos" :key="row.message">
      <div class="chatlistItem" @click="click(row)">
        <img class="chatlistItem--avatar" :src="row.img" alt="" />
        <div class="chatlistItem--lines">
          <div class="chatlistItem--line">
            <div class="chatlistItem--name">{{ row.nome }}</div>
            <div class="chatlistItem--date">20:00</div>
          </div>
          <div class="chatlistItem--line">
            <div class="chatlistItem--lastMsg"><p>TESTE</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    click(contato) {
      this.$store.commit("ChatsVuex/Contato", contato);
      console.log(contato);
    },
  },
   

  props: {
    contatos: Array,
  },
  computed: {
    // counter(){
    //   return store.state.ChatsVuex.count;
    // }
  },
};
</script>

<style>
.chatList {
  flex: 1;
  background-color: #fff;
  overflow: auto;
}
.chatList::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.chatList::-webkit-scrollbar-thumb {
  background-color: rgb(0, 0, 0, 0.2);
}
.chatlistItem {
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 70px;
}
.chatlistItem:hover {
  background-color: #f5f5f5;
}
.chatlistItem--avatar {
  border-radius: 50%;
  display: flex;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 15px;
}
.chatlistItem--lines {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eee;
  padding-right: 15px;
  padding-top: 15px;
  margin-left: 15px;

  flex-wrap: wrap;
  min-width: 0;
}
.chatlistItem--line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.chatlistItem--name {
  font-size: 14px;
  color: black;
}
.chatlistItem--date {
  font-size: 12px;
  color: #999;
}
.chatlistItem--lastMsg {
  font-size: 14px;
  color: #999;
  display: flex;
  width: 100%;
}
.chatlistItem--lastMsg p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
}
</style>