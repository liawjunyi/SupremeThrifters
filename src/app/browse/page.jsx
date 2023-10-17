"use client";
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import {
  GoogleMap,
  useLoadScript,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import ItemCard from "@/components/ItemCard";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB7VnhdFUqZiSbJ_em-PsgI6zxrfcgeOnw",
    mapIds: ["aa0423f1ef73f4ca"],
    libraries: ["places", "marker"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const [center, setCenter] = useState({ lat: 1.3521, lng: 103.8198 });
  const [selected, setSelected] = useState(null);
  const [highlight, setHighlight] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const PlacesAutocomplete = ({ setSelected }) => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();

      const results = await getGeocode({ address });

      const { lat, lng } = await getLatLng(results[0]);
      setSelected({ lat, lng });
    };
    useEffect(() => {
      if (!selected) return;
      setCenter(selected);
    }, [selected]);
    return (
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-2"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    );
  };

  return (
    <>
      <div className="absolute top-5 left-1/2 z-10" style={{ width: "300px" }}>
        <PlacesAutocomplete setSelected={setSelected} />
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-full h-screen"
        options={{ mapId: "aa0423f1ef73f4ca" }}
      >
        <MarkerF
          position={{ lat: 1.3319, lng: 103.9273 }}
          icon={{ url: "/tshirt.svg" }}
          onMouseOver={() => setHighlight(true)}
          animation={2}
          onClick={() => setActiveMarker(true)}
        >
          {activeMarker === true ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(false)}>
              <ItemCard></ItemCard>
            </InfoWindowF>
          ) : null}
        </MarkerF>
        {selected && (
          <MarkerF
            position={selected}
            icon={{ url: "/tshirt.svg" }}
            onMouseOver={() => setHighlight(true)}
            animation={2}
            onClick={() => setActiveMarker(true)}
          >
            {activeMarker === true ? (
              <InfoWindowF onCloseClick={() => setActiveMarker(false)}>
                <ItemCard></ItemCard>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        )}
      </GoogleMap>
    </>
  );
}
