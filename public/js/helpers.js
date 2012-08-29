var KO = function(value) {
  if(_.isArray(value) === true) {
    return ko.observableArray(value);
  } else if(typeof value === "function") {
    if(arguments.length > 1) {
        return ko.computed(value,arguments[1]);
    } else {
        return ko.computed(value);
    }
  } else { return ko.observable(value); }
};
