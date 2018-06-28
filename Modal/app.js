var _vue = new Vue({
  el:'.wrapper',
  data:{
    selected: '',
    items: [
      'Item #1',
      'Item #2',
      'Item #3'
    ],
    open: false,
    modalOpen: false,
    closing: false
  },
  mounted: function(){
    
  },
  methods: {
    selectItem: function(e){
      this.selected = e.currentTarget.firstChild.dataset.value;
      this.open = true;
      $('#modal').fadeIn();
    },
    close: function(e){
      this.open = false;
      this.closing = true;
      $('#modal').fadeOut();
    }
  }
});
