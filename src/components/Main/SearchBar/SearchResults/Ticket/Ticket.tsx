import { parseISO, add, addMinutes, format } from "date-fns";
import uniqueId from "lodash/uniqueId";
import { TicketType } from "@AppTypes/commonTypes";

const formatFlightTime = (startDate: string, duration: number) => {
  const start = parseISO(startDate);
  const end = add(start, { minutes: duration });
  const startTime = format(start, "HH:mm");
  const endTime = format(end, "HH:mm");
  return `${startTime} – ${endTime}`;
};

interface TicketProps {
  ticket: TicketType;
}

const Ticket = ({ ticket }: TicketProps) => (
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
          {`пересад${item.stops.length === 0 ? `ок` : item.stops.length > 1 ? `ки` : `ка`}`}
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
