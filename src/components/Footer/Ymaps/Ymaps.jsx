import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  GeolocationControl,
  RouteButton,
  ZoomControl,
} from "react-yandex-maps";

const Ymaps = () => {
  return (
    <YMaps>
      <div
        className=""
      >
        <Map
          className="h-[300px] pt-[1px]"
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
          <ZoomControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default Ymaps;
