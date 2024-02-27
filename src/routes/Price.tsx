import styled from "styled-components";

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Text = styled.text`
    font-size: 20px;
    align-items: center;
    padding-bottom: 10px;
    padding-top: 10px;
`;
interface PriceData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    beta_value: number;
    first_data_at: string;
    last_updated: string;
    quotes: {
        USD: {
            ath_date: string;
            ath_price: number;
            market_cap: number;
            market_cap_change_24h: number;
            percent_change_1h: number;
            percent_change_1y: number;
            percent_change_6h: number;
            percent_change_7d: number;
            percent_change_12h: number;
            percent_change_15m: number;
            percent_change_24h: number;
            percent_change_30d: number;
            percent_change_30m: number;
            percent_from_price_ath: number;
            price: number;
            volume_24h: number;
            volume_24h_change_24h: number;
        };
    };
}
interface PriceProps {
    tickersData: PriceData;
}

function Price({tickersData}: PriceProps) {
    return <Container>
        <Text>
            1 hour price change is:   ${tickersData.quotes.USD.percent_change_1h}
        </Text>
        <Text>
            1 week price change is:   ${tickersData.quotes.USD.percent_change_7d}
        </Text>
        <Text>
            1 year price change is:   ${tickersData.quotes.USD.percent_change_1y}
        </Text>
    </Container>;
}

export default Price;