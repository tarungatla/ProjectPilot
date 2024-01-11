"use client";

import { useCardModal } from "@/hooks/use-card-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { fetcher } from "@/lib/fetcher";
import { useQuery } from "@tanstack/react-query";
import { CardWithList } from "@/types";
import { Header } from "./header";


export const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ["card", id],
    queryFn: () => fetcher(`/api/cards/${id}`), //fetch card details
  }); 

  return (
    <Dialog 
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <div>
          {cardData?.title}
          <Header data={cardData} />
        </div>
      </DialogContent>
    </Dialog>
  );
};