AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assets/posters/captain-aero-poster.jpg",
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "./assets/posters/outer-space-poster.jpg",
      },

      {
        id: "spiderman",
        title: "Spiderman",
        url: "./assets/posters/spiderman-poster.jpg",
      },
      {
        id: "superman",
        title: "Superman",
        url: "./assets/posters/superman-poster.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position,item.id);
      const thumbnail = this.createThumbNail(item);
      borderEl.appendChild(thumbnail);
      const titleEl = this.createTitleEl(position,item);
      borderEl.appendChild(titleEl);
      // Thumbnail Element
      
      // Title Text Element
      
      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function(position,id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id",id);
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:22,
      height:40,
    });
    entityEl.setAttribute("position",position);
    entityEl.setAttribute("material",{
      color:"white",
    });
    entityEl.setAttribute("cursor-listener",{});
    return entityEl;
  },

  createThumbNail:function(item) {
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("visible",true);
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:20,
      height:28,
    });
    entityEl.setAttribute("position",{
      x:0,
      y:5,
      z:0.1,
    });
    entityEl.setAttribute("material",{src: item.url});
    return entityEl;
  },

  createTitleEl:function(position,item) {
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70,
      color:"black",
      value:item.title,
    });
    const elPosition=position;
    elPosition.y=-20;
    entityEl.setAttribute("position",elPosition);
    entityEl.setAttribute("visible",true);
    return entityEl;
  }
  
});
