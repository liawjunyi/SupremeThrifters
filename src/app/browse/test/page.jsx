"use client";
import React, { useEffect, useState } from "react";

import busTopViewImage from "../../../../public/tshirt.svg";

const Map = ({ center, markers }) => {
  useEffect(() => {
    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      const map = new Map(document.getElementById("map-view"), {
        center,
        zoom: 14,
        mapId: "aa0423f1ef73f4ca",
      });
      let mapMarkers = [];
      for (let markerData of markers) {
        const markerComponent = document.createElement("div");
        markerComponent.innerHTML = `
  <img src="${busTopViewImage}" />
  <h5 style="background-color: ${markerData.marker.backgroundColor}; color: white; border-radius: 10px; padding: 8px;">
        ${markerData.marker.text}
  </h5>
`;
        const m = new AdvancedMarkerElement({
          map,
          position: markerData.coordinates,
          content: markerComponent,
        });
        mapMarkers.push(m);
      }
    }
    initMap();
  }, []);

  return <div id="map-view" style={{ width: "100%", height: "100%" }}></div>;
};
export default Map;
