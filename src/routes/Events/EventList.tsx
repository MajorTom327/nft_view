import classNames from "classnames";
import React, { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import useWallet, { shorterWallet } from "../../hooks/useWallet";
import { Table } from "../../components/Table";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { CiInboxIn, CiInboxOut } from "react-icons/ci";

type Props = {};

export const EventTypeView: React.FC<{ value: any; row: any }> = ({ row }) => {
  const { wallet } = useWallet();

  const { returnValues } = row;
  const { from, to } = returnValues;

  // return null;
  return (
    <div className="text-2xl text-center w-full px-2">
      {from === wallet ? <CiInboxOut /> : <CiInboxIn />}
    </div>
  );
};

export const AddressViewer: React.FC<{ value: string }> = ({ value }) => {
  const { wallet } = useWallet();

  if (value === wallet) {
    return <div className="text-secondary">me</div>;
  }
  if (value === "0x0000000000000000000000000000000000000000") {
    return <div className="text-gray-500">burn</div>;
  }
  return <div className="text-accent">{shorterWallet(value)}</div>;
};

export const EventList: React.FC<Props> = ({}) => {
  const { events } = useContext(EventContext);

  const columns = [
    { key: "symbol", label: "NFT" },
    { key: "event", label: "Event", component: EventTypeView },
    { key: "blockNumber", label: "Block" },
    { key: "returnValues.from", label: "From", component: AddressViewer },
    { key: "returnValues.to", label: "To", component: AddressViewer },
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
