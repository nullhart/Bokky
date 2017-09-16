<template>
  <div>

    <md-toolbar class="md-accent md-dense">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">Bokky</h2>
      <md-button class="md-icon-button md-background">
        <md-icon>more_vert</md-icon>
      </md-button>
    </md-toolbar>

    <textarea class="" v-model="message" placeholder="edit me"></textarea>
    <!--Main Button Bar-->

    <md-bottom-bar class="fixedbutton">
      <md-bottom-bar-item md-icon="play_arrow">Play</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="pause" md-active>Pause</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="clear">Clear</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>


export default {
  name: 'MainApp',
  components: {},
  methods: {
    arrayify(inputText) {
      console.log('hello')

    }

  }
}


const textArrayOBJ = function(text) {
  this.text = text
  this.age = 4
  next = function() {
    this.textArray = this.text.split('.');
    console.log(this.agetextArray);
  }
}
</script>



<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

.textarea {}

.fixedbutton {
  position: fixed;
  bottom: 0px;
}
</style>
