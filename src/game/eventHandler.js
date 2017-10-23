function EventDispatcher() {
  var dummy = document.createTextNode("");

  this.off = dummy.removeEventListener.bind(dummy);
  this.on = dummy.addEventListener.bind(dummy);
  this.trigger = function(eventName, data) {
    if (!eventName) return;
    var e = new CustomEvent(eventName, { detail: data });
    dummy.dispatchEvent(e);
  };
}

export { EventDispatcher };
