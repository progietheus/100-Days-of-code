
      var _vue = new Vue({
  el: ".parent",
  data: {
    open: false
  },
  mounted: function() {},
  methods: {
    clickItem: function(e) {
      $(e.currentTarget).toggleClass("expand");
    }
  }
});
    
