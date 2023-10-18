import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useEffect } from "react";
import {
  Combobox,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxInput,
} from "@reach/combobox";

import "@reach/menu-button/styles.css";

const PlacesAutocomplete = ({ selected, setSelected, setCenter }) => {
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
        placeholder="Search"
        value={value}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        className="w-full py-xs px-md rounded-md  outline outline-1"
      />

      <ComboboxPopover className="rounded-md z-20">
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

export default PlacesAutocomplete;
