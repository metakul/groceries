
import { cryptoData } from "./mockData";
const MarqueeCryptoNew = () => {
    return (
        <section className="overflow-hidden mb-2">
                <div
                    className="flex flex-shrink-0 items-center justify-center rounded-2.5xl border border-jacarta-100  p-2"
                >
                    {cryptoData.map((crypto, index) => (
                        <div key={index} className="ml-6 mr-6 flex animate-marquee space-x-8 ">
                            <div className="crypto-info flex">
                                <img src={crypto.icon} alt={crypto.title} className="crypto-icon w-8 h-8" />
                                <div className="crypto-price  my-auto">{crypto.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
        </section>

    );
};

export default MarqueeCryptoNew;
