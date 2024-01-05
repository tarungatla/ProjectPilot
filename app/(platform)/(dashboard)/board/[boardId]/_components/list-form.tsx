"use client";

import { Plus, X } from "lucide-react";



import { ListWrapper } from "./list-wrapper";

export const ListForm = () => {
    return (
        <ListWrapper>
            <button
                onClick={() => { }}
                className="w-full rounded-md bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-sm"
            >
                <Plus className="h-4 w-4 mr-2" />
                Add a list
            </button>
        </ListWrapper>
    );
};