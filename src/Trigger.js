import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';


export default function Trigger() {
    // Toast
    const toast = useRef(null);

    // Button
    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.current.show({severity:'success', summary: 'Success', detail:'Test Triggered', life: 3000});
        }, 2000);
    };

    // Dropdown
    const [selectedCity, setSelectedCity] = useState(null);
    const tests = [
        { name: 'BTC Flow', code: 'BTC' },
        { name: 'ETH Flow', code: 'ETH' },
        { name: 'XDC Flow', code: 'XDC' },
        { name: 'MATIC FLow', code: 'MATIC' }
    ];

    return (        
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Toast ref={toast} />
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={tests} optionLabel="name" 
                placeholder="Select a test" className="w-full md:w-14rem" />
                <br></br><br></br>
            <Button label="Submit" icon="pi pi-play" loading={loading} onClick={load} />
        </div>
    )
}
  