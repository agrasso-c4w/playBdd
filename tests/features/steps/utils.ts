// Convert any string separated from <separator> and return a list
export function convertStringToArray(input: string, separator = ','): string[] {
    return input.split(separator).map(item => item.trim());
}

// Build a link based on sportName
export function getLinkBySportName(sportName: string) {
    let hrefLink: string = '';
    switch (sportName) {
        case 'IPPICA': {
            hrefLink = `/ippica`;
            break;
        }
        case 'VIRTUAL': {
            hrefLink = `/virtuali`;
            break;
        }
        case 'TOP': {
            hrefLink = '/sport';
            break;
        }
        default: {
            hrefLink = `/sport/${sportName}`;
            break;
        }
    }
    return hrefLink;

}