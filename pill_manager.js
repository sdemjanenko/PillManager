var Pill = (function($) {
  var skeleton = $("<div class='pill'><span class='close'>x</span><span class='value'></span><div/>");

  var ctor = function(container, value) {
    var _this = this;
    _this.$el = skeleton.clone();

    _this.value = value;
    _this.changeValue(value, {silent: true});
    _this.$el.on('click', '.close', function() { _this.destroy.call(_this); });

    container.append(this.$el);
  };

  ctor.prototype = {
    changeValue: function(new_value, options) {
      this.value = new_value;
      this.$el.find('.value').text(new_value);
      if (options && !options.silent)
        $(this).trigger('change', [new_value]);
    },
    destroy: function() {
      this.$el.remove();
      $(this).trigger('change:destroyed');
      $(this).off();
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
    addPill: function(value) {
      var _this = this,
          new_pill = new Pill(_this.container, value);

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
        $.each(values, function(i, value) { _this.addPill(value); });
    },
    value: function() {
      return $.map(this.pills, function(pill) { return pill.value; });
    }
  };

  return ctor;
})(jQuery);