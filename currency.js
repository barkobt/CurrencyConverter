class Currency {
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fpwq50sB7mkjJ8SnlzWLdXmmHOWnBCxBbK5WNB1u&base_currency=";
    }

    async exchange(amount , firstCurrency , secondCurrency) {
        let url = await fetch(`${this.url}${firstCurrency}`);
        let result = await url.json();
        
        const data = result.data[secondCurrency];

        return data;
    }
}