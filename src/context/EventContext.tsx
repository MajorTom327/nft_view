import Bluebird from "bluebird";
import { flatten, values } from "ramda";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useWallet from "../hooks/useWallet";
import { useWeb3 } from "../hooks/useWeb3";
import { NftContext } from "./NftContext";

export type EventContextType = {
  events: any[];
};

export const EventContext = createContext<EventContextType>({
  events: [],
});

const { Provider } = EventContext;

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const nftContext = useContext(NftContext);
  const { wallet } = useWallet();
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    if (!wallet) return;
    Bluebird.map(values(nftContext), (nft) =>
      nft.getTransferEvents(wallet)
    ).then((events) => {
      setEvents(flatten(events));
    });
  }, [wallet]);

  const value: EventContextType = {
    events,
  };

  return <Provider value={value}>{children}</Provider>;
};
