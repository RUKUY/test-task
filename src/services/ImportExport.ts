import { useState } from "react"
import { IAbility } from "./Abilities/config"
import { ILoadCharacteristics } from "./Characteristics"


export interface ISavePlayer {
    username: string
    characteristics: ILoadCharacteristics,
    abilities: IAbility[],
}

export const useImportExport = () => {
    const exportPlayer = (dataToExport: ISavePlayer) => {
        const data = JSON.stringify(dataToExport, null, 2);
        const encodedData = encodeURIComponent(data);
        const link = document.createElement('a');
        link.href = `data:application/json;charset=utf-8,${ encodedData }`;
        link.download = `export-${ dataToExport.username }.json`;
        link.click();
    }

    const importPlayer = (file : File) : Promise<ISavePlayer> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function () {
                try {
                    const jsonData = JSON.parse(reader.result as string)
                    resolve(jsonData);
                } 
                catch (SyntaxError) {
                    alert("Плохой файл");
                }
                
            };
            reader.onerror = function () {
                reject(new Error('Ошибка чтения файла'));
            };

            reader.readAsText(file);
        })
        
    }

    return {
        exportPlayer,
        importPlayer
    }


} 