import useStore, { storeKeys } from './useStore';
import useMergeableState from './useMergeableState';

/*
 * TODO: Write unit test
 * */

export const useModelTitleProvider = () => {
    return useMergeableState({
        tag: {
            id: null,
            name: null,
        },
        task: {
            id: null,
            name: null,
        },
    });
};

const useModelTitle = (model, id) => {
    const [modelTitle, setModelTitle] = useStore(storeKeys.useModelTitle);

    const name = modelTitle[model].id === id ? modelTitle[model].name : null;

    const setModelData = (providedId, providedName) => {
        setModelTitle({
            [model]: {
                id: providedId,
                name: providedName,
                default: modelTitle[model].default,
            },
        });
    };

    return [name, setModelData];
};

export default useModelTitle;
