import React from 'react';

export function formatKeyString(key) {
    return (key.charAt(0).toUpperCase()+key.slice(1)).replace('_',' ');
}

export function formatEvolutionDetail(obj) {
    let details = []
    let detail = "";
    Object.keys(obj).forEach(function(key) {
        let value = obj[key];
        Object.keys(value).forEach(function(i) {
            detail = <li key={`${key}${i}`}>{formatKeyString(i)}: {value[i]}</li>
            details = [... details, detail]            
        })
    })
    return details;
}