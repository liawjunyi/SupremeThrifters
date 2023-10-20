"use client";
import "@reach/combobox/styles.css";
import {
  GoogleMap,
  useLoadScript,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import React, { useState } from "react";
import ItemCard from "@/components/ItemCard";
import PlacesAutocomplete from "@/components/Autocomplete";
import data from "../../../fakedb.json";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import { ProductItem } from "@/components/ProductItem";
import Search from "@/components/Search";
import Autocomplete from "@/components/Autocomplete";

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
  const [hover, setHover] = useState(null);

  return (
    <>
      {/* {selected && ( */}

      <div className="absolute top-0 bg-white  w-80 h-full p-6">
        <nav class="lg:text-sm lg:leading-6 relative ">
          <div class="absolute top-0 mt-[76px] flex flex-col p-md flex justify-center w-full">
            {data.map(
              ({
                user_id,
                username,
                product_name,
                price,
                product_description,
              }) => (
                <div
                  className="p-sm bg-white border border-gray-200 rounded-md shadow hover:bg-gray-100"
                  onMouseEnter={() => setHover(user_id)}
                >
                  {product_name}
                  {price}
                  {product_description}
                </div>
              )
            )}
          </div>
        </nav>
      </div>
      {/* )} */}
      <div className="absolute top-[20px] left-[15px] z-20 rounded-sm w-[300px]">
        {/* <PlacesAutocomplete
          setSelected={setSelected}
          selected={selected}
          setCenter={setCenter}
          openOnFocus={true}
          getSources={({ query }) => [
            {
              sourceId: "name",
              getItems() {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "supremeThrifters",
                      query,
                    },
                  ],
                });
              },
              templates: {
                item({ item, components }) {
                  console.log(item, components);
                  return <ProductItem hit={item} components={components} />;
                },
              },
            },
          ]}
        /> */}
        <Autocomplete
          onSelect={({ item, setQuery }) => console.log(item)}
        ></Autocomplete>
        {/* <Search></Search> */}
      </div>

      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-full h-screen"
        options={{ mapId: "aa0423f1ef73f4ca", disableDefaultUI: true }}
      >
        {data.map(({ user_id, address: { geo, street } }) => {
          let icon =
            hover == user_id
              ? {
                  url: "/tshirt_solid.svg",
                  scaledSize: { width: 30, height: 30 },
                }
              : {
                  url: "/tshirt_outline.svg",
                  scaledSize: { width: 15, height: 15 },
                };

          return (
            <MarkerF
              position={{ ...geo }}
              icon={icon}
              onMouseOver={() => setHighlight(true)}
              animation={2}
              onClick={() => setActiveMarker(user_id)}
            >
              {activeMarker == user_id ? (
                <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                  <ItemCard></ItemCard>
                </InfoWindowF>
              ) : null}
            </MarkerF>
          );
        })}

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
