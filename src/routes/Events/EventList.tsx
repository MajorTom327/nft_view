import classNames from "classnames";
import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import { shorterWallet } from "../../hooks/useWallet";
import { Table } from "../../components/Table";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";

type Props = {};

export const EventList: React.FC<Props> = ({}) => {
  const { events } = useContext(EventContext);

  const columns = [
    { key: "event", label: "Event" },
    { key: "blockNumber", label: "Block" },
    { key: "returnValues.from", label: "From", transform: shorterWallet },
    { key: "returnValues.to", label: "To", transform: shorterWallet },
    { key: "returnValues.tokenId", label: "Token" },
  ];
  return (
    <>
      <Card>
        <Title center h1>
          Events
        </Title>
        <Table columns={columns} data={events} />
      </Card>
    </>
  );
};

EventList.defaultProps = {};

export default EventList;
