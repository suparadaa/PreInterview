export function merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
): number[] {
    const merged: number[] = [];
    let i = 0;
    let j = collection2.length - 1;
    let k = 0;
    
    while (i < collection1.length && k < collection3.length) {
        if (collection1[i] <= collection3[k]) {
            merged.push(collection1[i]);
            i++;
        } else {
            merged.push(collection3[k]);
            k++;
        }
    }
    
    while (i < collection1.length) {
        merged.push(collection1[i]);
        i++;
    }
    
    while (k < collection3.length) {
        merged.push(collection3[k]);
        k++;
    }
    
    while (j >= 0) {
        merged.push(collection2[j]);
        j--;
    }

    for (let i = 1; i < merged.length; i++) {
        const key = merged[i];
        let j = i - 1;
        while (j >= 0 && merged[j] > key) {
            merged[j + 1] = merged[j];
            j--;
        }
        merged[j + 1] = key;
    }

    return merged;
}
