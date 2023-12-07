import React from "react";

import { StockProvider } from "./StockProvider";
import StockTradingApp from "./StockTradingApp";
//import ErrorBoundary from "./ErrorBoundry";

function FinApp() {
    return (
        
            <StockProvider>
                <StockTradingApp />
            </StockProvider>
        
    );
}

export default FinApp;