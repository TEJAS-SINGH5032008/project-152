// Registering component in box-component.js
AFRAME.registerComponent("base", {
  schema: {
    radius: { type: "number", default: 150 },
    height: {type:"number", default: 3}
  },

  init: function () {
this.el.setAttribute("geometry", {
  primitive: "cylinder",
  radius: this.data.radius,
  height: this.data.height
})
  },

  tick: function () {

    this.data.moveX = this.data.moveX + 0.00;

    var pos = this.el.getAttribute("position");

    pos.x = this.data.moveX;

    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z});
  }
});
