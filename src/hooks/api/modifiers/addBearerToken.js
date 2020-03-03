export default function addBearerToken(instance, token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
