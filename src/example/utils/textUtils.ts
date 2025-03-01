import {LoremIpsum} from 'lorem-ipsum';

export const loremIpsum = ({
    count,
    units
}: {
    count: number,
    units: 'words' | 'sentences' | 'paragraphs'
}) => {
    return new LoremIpsum({ count, units });
};
