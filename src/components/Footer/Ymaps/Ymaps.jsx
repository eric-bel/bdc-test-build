import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  RouteButton,
  SearchControl,
  ZoomControl,
} from "react-yandex-maps";

const Ymaps = () => {
  return (
    <YMaps>
      <div className="w-full h-full p-5 mob:p-1">
        <Map
          className="h-full w-full mob:h-4/5"
          defaultState={{
            center: [41.642706, 41.635418],
            zoom: 15,
            controls: [],
          }}
        >
          <Placemark geometry={[41.642706, 41.635418]} />
          <GeolocationControl options={{ float: "left" }} />
          <FullscreenControl />
          <RouteButton options={{ float: "right" }} />
          <SearchControl options={{ float: "right" }} />
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default Ymaps;
