import React from 'react';
import { useNetworkState } from 'react-use';

const Network = () => {
    const state = useNetworkState();
    console.log(state);
    const { downlink, downlinkMax, effectiveType, online, previous, rtt, saveData, since, type } = state;
    return (
        <div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <div>{downlink}</div>
            <div>{downlinkMax}</div>
            <div>{effectiveType}</div>
            <div>{online}</div>
            <div>{previous}</div>
            <div>{rtt}</div>
            <div>{saveData}</div>
            <div>{JSON.stringify(since)}</div>
            <div>{type}</div>
        </div>


    )

}
export default Network;