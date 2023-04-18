import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import {trees, wildlife} from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  wildlife(); // => "Elk, Bighorn Sheep, Moose"

  return (
    <>
      <h1>Colorado State Parks!</h1>
    <MesaVerde />
    <p>{trees}</p>
    </>

  );
}
