import { parseISO, add, addMinutes, format } from "date-fns";
import uniqueId from "lodash/uniqueId";
import { TicketType } from "@AppTypes/commonTypes";

const test = {
  price: 75440,
  carrier: "U6",
  segments: [
    {
      origin: "MOW",
      destination: "HKT",
      date: "2025-05-22T12:40:21.513Z",
      duration: 1216,
      stops: ["IST", "DOH", "DOH"],
    },
    {
      origin: "HKT",
      destination: "MOW",
      date: "2026-05-15T19:00:10.984Z",
      duration: 796,
      stops: ["DEL"],
    },
  ],
};

const formatFlightTime = (startDate: string, duration: number) => {
  const start = parseISO(startDate);
  const end = add(start, { minutes: duration });
  const startTime = format(start, "HH:mm");
  const endTime = format(end, "HH:mm");
  return `${startTime} – ${endTime}`;
};

const Ticket = (ticket: TicketType) => (
  <div className="ticket">
    <p>{`${ticket.price.toString()}₽`}</p>
    <img src={`http://pics.avs.io/200/200/${ticket.carrier}.png`} alt="" />
    {ticket.segments.map((item) => (
      <div key={uniqueId("ticket_segment_")}>
        {" "}
        <p>
          {item.origin} - {item.destination}
        </p>{" "}
        <p>Duration: {item.duration} minutes</p>
        <p>В пути</p>
        <p>
          {item.stops.length}{" "}
          {`пересад${item.stops.length === 1 ? `ки` : `ка`}`}
        </p>
        <p>{formatFlightTime(item.date, item.duration)} </p>
        <p>{format(addMinutes(new Date(0), item.duration), "H:mm")}</p>
        {item.stops.map((transferPoint, index) => (
          <p key={uniqueId("segment_transfer_point_")}>
            {transferPoint}
            {index < 2 ? `,` : ``}
          </p>
        ))}
      </div>
    ))}
  </div>
);

export default Ticket;
