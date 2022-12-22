import React, { useState } from "react";
import IncomeCalculator from './IncomeCalculator'

function IncomeResults(props) {

    const [receivedData, setReceivedData] = useState({});

    return(
        <div>
            <IncomeCalculator />
        </div>
    )

}


export default IncomeResults
