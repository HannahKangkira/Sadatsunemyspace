import React, { useEffect } from 'react';

function CurrencyConverter() {
    useEffect(() => {
        // 动态加载外部脚本
        const script = document.createElement('script');
        script.src = "https://cdn.logwork.com/widget/currency_converter.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <a 
                href="https://logwork.com/free-currency-converter-calculator" 
                className="currency_convertor" 
                data-currencies="USD,CNY,JPY,EUR,GBP,CAD"
                data-color="#bc474d" 
                data-background="#ffcfcd"
                data-size="280"
                >
                Currency Converter
            </a>
        </div>
    );
}

export default CurrencyConverter;
