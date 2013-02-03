var Pill = (function($) {
  var skeleton = $("<div class='pill'><span class='close'>x</span><span class='value'></span><div/>");

  var ctor = function(container, value, text) {
    var _this = this;
    _this.$el = skeleton.clone();

    _this.value = value;
    _this.text = text || value;

    _this.$el.on('click', '.close', function(e) { e.stopPropagation(); _this.destroy.call(_this); });
    _this.render();
    container.append(_this.$el);
  };

  ctor.prototype = {
    destroy: function() {
      this.$el.remove();
      $(this).trigger('change:destroyed').off();
    },
    render: function() {
      this.$el.find('.value').text(this.text);
    }
  };

  return ctor;
})(jQuery);

var PillCollection = (function($) {
  var ctor = function(container) {
    this.pills = [];
    this.container = container;
  };

  ctor.prototype = {
    addPill: function(value, text) {
      var _this = this,
          new_pill = new Pill(_this.container, value, text);

      $(new_pill).on('change:destroyed', function() { _this.removePill(new_pill); });
      this.pills.push(new_pill);
    },
    removePill: function(pill) {
      var index = this.pills.indexOf(pill);
      if (index !== -1)
        this.pills.splice(index, 1);
    },
    reset: function(values) {
      var _this = this,
          pills = _this.pills;

      while (pills.length > 0)
        pills.shift().destroy();

      if (values)
        $.each(values, function(i, value) { _this.addPill.apply(_this, value); });
    },
    value: function() {
      return $.map(this.pills, function(pill) { return pill.value; });
    }
  };

  return ctor;
})(jQuery);