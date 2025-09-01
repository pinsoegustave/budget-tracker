export const Currencies = [
    {
        value: "USD",
        label: "$ Dollar",
        locale: "en-US"
    },
    {
        value: "EUR",
        label: "€ Euro",
        locale: "en-US"
    },

    {
        value: "GBP",
        label: "£ Pound",
        locale: "en-GB"
    },
    {
        value: "YEN",
        label: "¥ Yen",
        locale: "en-GB"
    },
]

export type Currency = (typeof Currencies)[0];