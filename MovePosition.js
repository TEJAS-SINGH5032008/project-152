AFRAME.registerComponent("move", {
    schema: {
      moveY: { type: "number", default: 1 },
    },

    tick: function () {
        var pos = this.el.getAttribute("position")
        this.data.moveY = this.data.moveY + 0.01;

        pos.y = this.data.moveY;
        this.el.getAttribute("position", { x: pos.x, y: pos.y, z:pos.z});


    }
})
  
AFRAME.registerComponent("camera-zoom-out", {
    schema: {
        moveZ: {type: "number", default: 10},
    },
    tick: function (){
        this.data.moveZ = this.data.moveZ + 0.1;

        pos.z = this.data.movez;
        this.el.getAttribute("position", { x: pos.x, y: pos.y, z:pos.z});


    }
    
})

AFRAME.registerComponent("fall-out", {
    schema: {
        moveZ: {type: "number", default: 10},
    },
    tick: function (){
        this.data.moveY = this.data.moveY + 0.1;

        pos.y = this.data.moveY;
        this.el.getAttribute("position", { x: pos.x, y: pos.y, z:pos.z});


    }
    
})