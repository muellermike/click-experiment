import { useEffect } from "react";

function Exercise() {
    let daten = [];

    // lade Daten von einem API
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
        .then(result => result.json());
    }, []);

    // Daten anzeigen
    return (
        <div>
            Das sollen die Daten sein:
            {daten}
        </div>
    )
}

export default Exercise;