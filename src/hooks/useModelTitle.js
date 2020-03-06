import useStore, { storeKeys } from './useStore';
import useMergeableState from './useMergeableState';
import useInstanceWithToastsAndLoading from './api/useInstanceWithToastsAndLoading';
import useCancellableEffect from './useCancellableEffect';

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
        attempt: {
            id: null,
            name: null,
        },
    });
};

const useModelTitle = (model, id, url = null) => {
    const [modelTitle, setModelTitle] = useStore(storeKeys.useModelTitle);

    const [instance, , cancel] = useInstanceWithToastsAndLoading({
        validation: null,
        notFound: null,
        unauthorized: null,
        forbidden: null,
        code: null,
        server: null,
        client: null,
        redirectPath: null,
    });

    const name = modelTitle[model].id === id ? modelTitle[model].name : null;

    const setModelData = (providedId, providedName) => {
        setModelTitle({
            [model]: {
                id: providedId,
                name: providedName,
            },
        });
    };

    useCancellableEffect(
        () => {
            if (!name && url) {
                instance.get(url).then(response => {
                    setModelData(id, response.data);
                });
            }
        },
        [id, name],
        cancel,
    );

    return [name, setModelData];
};

export default useModelTitle;
