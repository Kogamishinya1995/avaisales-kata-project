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

const formatDuration = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours.toString()} ч. ${remainingMinutes.toString()} м.`;
};

interface TicketProps {
  ticket: TicketType;
}

const Ticket = ({ ticket }: TicketProps) => (
  <div className="ticket">
    <div className="ticket_header">
      <p className="ticket__price">{`${ticket.price.toString()} Р`}</p>
      <img src={`http://pics.avs.io/200/200/${ticket.carrier}.png`} alt="" />
    </div>
    {ticket.segments.map((item) => (
      <div className="ticket__segment" key={uniqueId("ticket_segment_")}>
        <div className="ticket__segment-header">
          <p>
            {item.origin} - {item.destination}
          </p>{" "}
          <p>В пути</p>
          <p>
            {item.stops.length}{" "}
            {`пересад${item.stops.length === 0 ? `ок` : item.stops.length > 1 ? `ки` : `ка`}`}
          </p>
        </div>
        <div className="ticket__segment-content">
          <p>{formatFlightTime(item.date, item.duration)} </p>
          <p>{formatDuration(item.duration)}</p>
          <p>
            {item.stops.length > 0
              ? item.stops.map((transferPoint, index) => (
                  <span key={uniqueId("segment_transfer_point_")}>
                    {transferPoint}
                    {index < item.stops.length - 1 ? ", " : ""}
                  </span>
                ))
              : "Без пересадок"}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Ticket;
