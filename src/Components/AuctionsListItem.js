import React from "react";

const AuctionsListItem = props => {
  /*     key={auction.AuktionID}
    titel={auction.Titel}
    beskrivning={auction.Beskrivning}
    slutDatum={auction.SlutDatum}
    utropspris={auction.Utropspris}
    skapadAv={auction.SkapadAv} */

  return (
    <tr>
      <td>{props.titel}</td>
      <td>{props.beskrivning}</td>
      <td>{props.slutDatum}</td>
      <td>{props.utropspris}</td>
      <td>{props.skapadAv}</td>
      <td>
        <button value={props.id} onClick={e => props.event(e)}>
          Show Auction Details
        </button>
      </td>
    </tr>
  );
};

export default AuctionsListItem;