"use client";
import "@reach/combobox/styles.css";
import {
  GoogleMap,
  useLoadScript,
  InfoWindowF,
  MarkerF,
} from "@react-google-maps/api";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import like from "../../../public/like.svg";
import menu from "../../../public/menu.svg";
import close from "../../../public/close.svg";
import recycle from "../../../public/recycle.svg";
import Image from "next/image";
import SideMenu from "@/components/Sidemenu";
import Autocomplete2 from "@/components/Autocomplete2";
import algoliasearch from "algoliasearch";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import { ProductItem } from "@/components/Productitem";
import insightsClient from "search-insights";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { getAuth } from "firebase/auth";

export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB7VnhdFUqZiSbJ_em-PsgI6zxrfcgeOnw",
    mapIds: ["aa0423f1ef73f4ca"],
    libraries: ["places", "marker"],
  });

  if (!isLoaded)
    return (
      <div className="bg-primary h-screen flex justify-center items-center">
        <Image src={recycle} />
      </div>
    );
  return <Map />;
}

function Map() {
  const [center, setCenter] = useState({ lat: 1.3521, lng: 103.8198 });
  const [map, setMap] = useState(null);
  const [selected, setSelected] = useState(null);
  const [zoom, setZoom] = useState(13);
  const [highlight, setHighlight] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [menuActive, setMenuActive] = useState(false);

  const appId = "28OPVE2DNS";
  const apiKey = "19bda594fe34d920e65766859aa94af9";
  const searchClient = algoliasearch(appId, apiKey);

  insightsClient("init", { appId, apiKey, useCookie: true });

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const geo = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCenter(geo);
      setCurrentLocation(geo);
      setZoom(15);
    });
  };

  const auth = getAuth();
  const user = auth.currentUser;

  const handleLiked = async (product) => {
    await setDoc(doc(db, `users/${user.uid}/liked`, product.product_name), {
      product,
    });
  };

  const handleReserved = async (product) => {
    await setDoc(doc(db, `users/${user.uid}/reserved`, product.product_name), {
      product,
    });
  };
  return (
    <>
      <SideMenu
        className={`transition-opacity duration-500  ${
          menuActive ? "opacity-100 ease-in z-20" : "opacity-0 ease-out -z-1"
        }`}
      />
      <div className="absolute top-lg left-sm z-30">
        <Button size="xs" onClick={() => setMenuActive((prev) => !prev)}>
          <Image src={menuActive ? close : menu} />
        </Button>
      </div>
      <div
        className={`transition-opacity duration-500 ${
          menuActive ? "opacity-0 ease-out" : "opacity-100 ease-in"
        }`}
      >
        {selected && (
          <Sidebar>
            {selected.map((item) => (
              <Card
                className={"m-md border border-gray-200 rounded-md shadow "}
              >
                <Accordion
                  title={item.product_name}
                  image={item.product_img_url}
                  onClick={() => {
                    setCenter(item.address.geo);
                    setZoom(15);
                  }}
                >
                  <div>
                    {/* <Image src={image} /> */}
                    <div>Price: ${item.price}</div>
                    <div>Description: {item.product_description}</div>

                    <div className="flex justify-between pt-lg">
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReserved(item);
                          console.log("reserved");
                        }}
                      >
                        Reserve
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLiked(item);
                          console.log("new like");
                        }}
                        size="sm"
                        bold={true}
                      >
                        <Image src={like} />
                      </Button>
                    </div>
                  </div>
                </Accordion>
              </Card>
            ))}
          </Sidebar>
        )}
        <div className="absolute top-lg inset-x-0 mx-auto z-10 rounded-sm xs:w-[300px] w-[150px]">
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
          {/* <Autocomplete
            onSelect={({ item, setQuery }) => {
              setSelected([item]);
              setCenter(item.address.geo);
            }}
            onSubmit={({ state }) => {
              console.log(state.collections[0].items);
              setSelected(state.collections[0].items);
              setZoom(10);
            }}
          /> */}
          <Autocomplete2
            openOnFocus={true}
            classNames={{
              input: "outline-none w-full cursor-text ",
              inputWrapper: "",
              form: "!rounded-md !focus-within:shadow !focus-within:shadow-secondary !focus-within:border-secondary",
              detachedSearchButton: "!rounded-md",
              panel: "z-50",
            }}
            insights={true}
            onSubmit={({ state }) => {
              setSelected(state.collections[0].items);
            }}
            getSources={({ query, setQuery, refresh, setIsOpen }) => [
              {
                sourceId: "product_name",
                getItems() {
                  return getAlgoliaResults({
                    searchClient,
                    queries: [
                      {
                        indexName: "supremeThrifters",
                        query,
                        params: {
                          hitsPerPage: 5,
                          clickAnalytics: true,
                        },
                      },
                    ],
                  });
                },
                templates: {
                  item({ item, components }) {
                    return (
                      <ProductItem
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuery(item.product_name);
                          setSelected([item]);
                          setIsOpen(false);
                          refresh();
                        }}
                        hit={item}
                        components={components}
                      />
                    );
                  },
                  noResults() {
                    return "No results.";
                  },
                },
              },
            ]}
          />
          {/* {(selected || selected) && <Sidebar></Sidebar>} */}
        </div>
        <GoogleMap
          zoom={zoom}
          onLoad={(map) => {
            getCurrentPosition();
            setMap(map);
          }}
          onZoomChanged={() => {
            map ? setZoom(map.zoom) : setZoom(null);
          }}
          center={center}
          mapContainerClassName="w-full h-screen"
          options={{ mapId: "aa0423f1ef73f4ca", disableDefaultUI: true }}
        >
          {currentLocation && (
            <MarkerF
              position={{ ...currentLocation }}
              icon={{
                url: "/man.svg",
              }}
              animation={2}
            ></MarkerF>
          )}
          <Button
            size="md"
            className="absolute right-xl bottom-xl z-5"
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
                fill="white"
              />
              <path
                d="M13 4.069V2H11V4.069C9.2403 4.29368 7.60497 5.09617 6.35057 6.35057C5.09617 7.60497 4.29368 9.2403 4.069 11H2V13H4.069C4.29335 14.7598 5.09574 16.3953 6.3502 17.6498C7.60466 18.9043 9.24017 19.7066 11 19.931V22H13V19.931C14.7599 19.7068 16.3955 18.9045 17.65 17.65C18.9045 16.3955 19.7068 14.7599 19.931 13H22V11H19.931C19.7066 9.24017 18.9043 7.60466 17.6498 6.3502C16.3953 5.09574 14.7598 4.29335 13 4.069ZM12 18C8.691 18 6 15.309 6 12C6 8.691 8.691 6 12 6C15.309 6 18 8.691 18 12C18 15.309 15.309 18 12 18Z"
                fill="white"
              />
            </svg>
          </Button>
          {selected &&
            selected.map(
              ({
                product_name,
                product_description,
                price,
                user_id,
                address: { geo, street },
              }) => {
                let icon = {
                  url: "/tshirt_solid_yellow.svg",
                  scaledSize: { width: 30, height: 30 },
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
                        <div>
                          <p>{product_name}</p>
                          <p>${price}</p>
                        </div>
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
      </div>
    </>
  );
}
