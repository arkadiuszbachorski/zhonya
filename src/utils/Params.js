export default class Params {
    params;

    constructor(params) {
        this.params = params;
    }

    default() {
        return this.params;
    }

    prepare(newParams, merge = {}) {
        const preparedParams = {};

        Object.keys(this.params).forEach(oldParamKey => {
            const oldParam = this.params[oldParamKey];
            const newParam = newParams[oldParamKey];
            if (newParam) {
                preparedParams[oldParamKey] = oldParam === newParam ? undefined : newParam;
            }
        });

        return { ...preparedParams, ...merge };
    }

    hasChanged(newParams) {
        let hasChanged = false;

        Object.keys(this.params).forEach(oldParamKey => {
            const oldParam = this.params[oldParamKey];
            const newParam = newParams[oldParamKey];
            if (newParam && oldParam !== newParam) {
                hasChanged = true;
            }
        });

        return hasChanged;
    }
}
