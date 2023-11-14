import {FilterOptions} from "../context/Filter.context.tsx";
import {TOption} from "../types/option.type.ts";


export const optionToString = (filterOptions: FilterOptions, category: TOption["category"]) => {
    if(filterOptions === undefined) {
        return;
    }

    const string = filterOptions[category].join(".");

    if(!string) {
        return "";
    }

    return `${category}=${string}`;
}

type FilterData = {
  label: string;
  options: TOption[]
}[]

export const filterData : FilterData = [
    {
        label: "platform",
        options: [
            {
                label: "Windows (PC)",
                value: "pc",
                category: "platform"
            },
            {
                label: "Browser (Web)",
                value: "browser",
                category: "platform"
            }
        ]
    },
    {
        label: "Genre/Tag",
        options: [
            {
                label: "MMORPG",
                value: "mmorpg",
                category: "tag"
            },
            {
                label: "Shooter",
                value: "shooter",
                category: "tag"
            },
            {
                label: "Strategy",
                value: "strategy",
                category: "tag"
            },
            {
                label: "MOBA",
                value: "moba",
                category: "tag"
            },
            {
                label: "Racing",
                value: "racing",
                category: "tag"
            },
            {
                label: "Open-World",
                value: "open-world",
                category: "tag"
            },
            {
                label: "Fantasy",
                value: "fantasy",
                category: "tag"
            },
            {
                label: "Action",
                value: "action",
                category: "tag"
            }
        ]
    },
    {
        label: "Sort By",
        options: [
            {
                label: "Release-Date",
                value: "release-date",
                category: "sort-by"
            },
            {
                label: "Popularity",
                value: "popularity",
                category: "sort-by"
            },
            {
                label: "Alphabetical",
                value: "alphabetical",
                category: "sort-by"
            },
            {
                label: "Relevance",
                value: "relevance",
                category: "sort-by"
            }
        ]
    }
]
