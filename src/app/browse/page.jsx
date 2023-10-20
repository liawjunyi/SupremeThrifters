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
import Autocomplete from "@/components/Autocomplete";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import Image from "next/image";
import image from "../../../public/shirt2.jpg";
import Card from "@/components/Card";
import Accordion from "@/components/Accordion";

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
  const [map, setMap] = useState(null);
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(10);
  const [highlight, setHighlight] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [hover, setHover] = useState(null);

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const geo = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCenter(geo);
      setZoom(15);
    });
  };

  return (
    <>
      {selected && (
        <Sidebar>
          {selected.map((item) => (
            <Card className={"m-md border border-gray-200 rounded-md shadow "}>
              <Accordion
                title={item.product_name}
                image={image}
                onClick={() => {
                  setCenter({ ...item.address.geo });
                  setZoom(15);
                }}
              >
                <div>
                  {/* <Image src={image} /> */}

                  {item.product_name}
                  {item.price}
                  {item.product_description}
                  <div className="flex justify-between">
                    <Button
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("reserved");
                      }}
                    >
                      Reserve
                    </Button>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("liked");
                      }}
                      size="small"
                    >
                      Like
                    </Button>
                  </div>
                </div>
              </Accordion>
            </Card>
          ))}
        </Sidebar>
      )}

      <div className="absolute top-lg inset-x-0 mx-auto z-10 rounded-sm w-[300px]">
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
          onSelect={({ item, setQuery }) => {
            setSelected([item]);
            setCenter({ ...item.address.geo });
          }}
          onSubmit={({ state }) => {
            console.log(state.collections[0].items);
            setSelected(state.collections[0].items);
            setZoom(10);
          }}
        />
        {/* {(selected || selected) && <Sidebar></Sidebar>} */}
      </div>
      <Button
        size="medium"
        className="absolute right-xl bottom-xl  z-5"
        onClick={() => getCurrentPosition()}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            fill="black"
          />
          <path
            d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
            fill="black"
          />
        </svg>
      </Button>

      <GoogleMap
        zoom={zoom}
        onLoad={(map) => setMap(map)}
        onZoomChanged={() => {
          map ? setZoom(map.zoom) : setZoom(null);
        }}
        center={center}
        mapContainerClassName="w-full h-screen"
        options={{ mapId: "aa0423f1ef73f4ca", disableDefaultUI: true }}
      >
        {selected &&
          selected.map(
            ({
              product_name,
              product_description,
              user_id,
              address: { geo, street },
            }) => {
              let icon = {
                url: "/tshirt_solid.svg",
                scaledSize: { width: 40, height: 40 },
              };

              return (
                <MarkerF
                  position={{ ...geo }}
                  icon={icon}
                  onMouseOver={() => setHighlight(true)}
                  animation={2}
                  onClick={() => setActiveMarker(user_id)}
                >
                  {activeMarker == user_id && (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <ItemCard></ItemCard>
                    </InfoWindowF>
                  )}
                </MarkerF>
              );
            }
          )}
        {/* 
       {selected &&
          selected.map
          <MarkerF
            position={{ ...selected.address.geo }}
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
        )} */}
      </GoogleMap>
    </>
  );
}
