const fileNames: string[] = [];

export function createUniqueName(originsType: string, powerName?: string) {
    if (powerName) {
        if (!fileNames.includes(powerName)) return powerName.toLowerCase().replace(/[^a-z0-9]/g, "");

        return powerName + (Math.floor(Math.random() * 100) + 1);
    }


    originsType = originsType.split(":")[1].toLowerCase().replace(/[^a-z0-9]/g, "");

    if(!fileNames.includes(originsType)) return originsType;

    return originsType + + (Math.floor(Math.random() * 100) + 1);
}
