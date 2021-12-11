import loremApiConfig from './loremApiConfig';

export const getTitles = ({quantity = 3}): string[] => {
    return loremApiConfig.get(`/api?quantity=${quantity}`)
}
